const { converterPathAbsolut,
  getMdFiles,
  readFileContent,
  validatePath,
  httpsPromise
} = require('./nodemethods');

//Función mdLinks
const mdLinks = (path, option) => new Promise((resolve, reject) => {
  //entrega la RUTA ABSOLUTA 
  const absolutePath = converterPathAbsolut(path);
  //Revisa si la RUTA es VALIDA ✿ 
  const validatePathRes = validatePath(absolutePath);
  //trae la función recursiva para leer archivos
  let arrayMdFile = []
  if (validatePathRes === false) {
    resolve('| ✿ NO EXISTEN ARCHIVOS ✿ |');
  } else if (validatePathRes) {
    const mdFiles = getMdFiles(absolutePath, arrayMdFile)
    //console.log('archivos encontrados', mdFiles );
    if (mdFiles.length === 0) {
      resolve('directorio vacio')

    } else {
      readFileContent(arrayMdFile)
        .then((objectLinks) => {
          //console.log('objectlinks', objectLinks);
          if (objectLinks.length === 0) {
            reject('|✧ No se han encontrado links dentro del archivo md. ✧ | |');
          } else {
            if (option.validate === true) {
              httpsPromise(objectLinks).then(response => {
                resolve(response)

              })
            } else {
              resolve(objectLinks);
            }
          }
        })
    };

  };
  reject
});
module.exports = mdLinks;
