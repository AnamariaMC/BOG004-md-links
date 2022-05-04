const { converterPathAbsolut, 
    getMdFiles,
    readLinks,
    readFileContent,
    validatePath,
} = require('./nodemethods');

//Función mdLinks
const mdLinks = (args) => new Promise((resolve, reject) => {
  // captura de la ruta a partir del array de args
  const catchedPath = args[2];
  //----Validar si la ruta existe---//
  const validatePathRes  = validatePath(catchedPath);
  //console.log(('|    ✿ RUTA VALIDA ✿   |'), validatePathRes);
  
  // invoca funcion converterPathAbsolut
  const absolutePath = converterPathAbsolut(catchedPath);
  //console.log('PATH', absolutePath)

  let arrayMdFile = []
  const mdFiles = getMdFiles(catchedPath, arrayMdFile)
  // console.log('todos los .md', mdFiles);

  readFileContent(arrayMdFile)
  .then((objectLinks)=>{
    if(objectLinks.length === 0){
        // console.log('No se han encontrado links dentro del archivo md... ✿ ✧ | |');
    }else{
        // console.log('Lectura de los archivos:... ✿ ✧ | |');
        // console.log('Links obtenidos:... ✿ ✧ | |');
        resolve(objectLinks);
    }
  })
  .catch((error)=>{
      const errorMessage = 'Error'
      reject(error, errorMessage)
  });

});

module.exports = mdLinks;
