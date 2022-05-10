// metodos node
const fs = require('fs');
const path = require("path");
const { default: fetch } = require("node-fetch");

//función para verificar si la ruta existe
const validatePath = (isPath) => fs.existsSync(isPath);

//Revisa que tipo de ruta es y la convierte a absoluta si no lo es 
const converterPathAbsolut = (isPath) => {
    if (path.isAbsolute(isPath)){
        return isPath;
    }else {
        return path.resolve(isPath).normalize();
    }
}

//Función para saber si es un directorio
const isDirectory = (isPath) => {
    const isDirResult = fs.statSync(isPath).isDirectory();
    return isDirResult;
} 

//Función para revisar los documentos dentro de un archivo 
const dirFiles = (isPath) => {
    const dirFilesArray = fs.readdirSync(isPath);
    //console.log('Contenido del directorio', dirFilesArray);
    return dirFilesArray
}

//muestra los archivos md dentro del directorio 
const mdFiles = (isPath) => {
    const mdExtensionFiles = path.extname(isPath) === '.md'
    return mdExtensionFiles;
}

//función con recursividad para recorrer las carpetas y archivos consiguiendo los .md 
const getMdFiles = (isPath, allMdFiles) => {
    //console.log('isPath', isPath);
        if (!isDirectory(isPath)) {
            if(mdFiles(isPath)) {
                allMdFiles.push(isPath);
            }
        }else {
            //leer de forma asincrónica el contenido de un directorio
            const readDirectorFiles = fs.readdirSync(isPath);
            let absolutePath = readDirectorFiles.map((fileName) => path.join(isPath, fileName));
            absolutePath.forEach((fileNamePath) => {
                getMdFiles(fileNamePath, allMdFiles)
            });
        };
    return allMdFiles 
    // la función retorna un array con todos los archivos .md
};

//leer los archivos y extraer los links. Esta funcion me retorna un arreglo de objetos con los links encontados.
const readLinks = (content, isPath) => new Promise ((resolve) => {
    const regExp1 = new RegExp (/\[([\w\s\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg);//link
    const regExp2 = new RegExp (/\[[\w\s\d.()]+\]/);//texto
    const regExp3 = new RegExp (/\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg);//ruta
    const fileContent = content;//lee el archivo
    const links = fileContent.match(regExp1);/* extraigo los links que coincidan con mi expresion regular
        match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena.*/
    //console.log('arrayLinks: ', arrayLinks);
    let arrayLinks;
    if (links) {
        arrayLinks = links.map((myLinks) => {
            const myhref = myLinks.match(regExp3).join().slice(1, -1);//URL ()
            const mytext = myLinks.match(regExp2).join().slice(1, -1);//Texto []
            return {
                href: myhref,
                text: mytext,
                fileName: isPath,//Ruta del archivo donde se encontró el link.
            };
        });
        resolve (arrayLinks)        
    } else if (links === null){
        resolve ([]);
    }
});

//-----Leer contenido de un archivo------//
const readFileContent = (arrayMds) => new Promise ((resolve) => {
    const mdArray = [];
    arrayMds.forEach((element) => {
        //console.log('resarray', element)
        fs.readFile(element, 'utf-8', function(err, data){
            if (err){
                const errorMessage = '| ✧ Error ✧  |';
                console.log(errorMessage);
            } else {
                readLinks(data, element)
                .then((resArray)=>{
                    mdArray.push(resArray)
                    if (mdArray.length === arrayMds.length) {
                        resolve(mdArray.flat());
                    }
                })
            }
        });
    })
});

// FUNCION QUE OBTIENE UN ARREGLO DE PROMESAS QUE RETORNAN OBJETOS
const httpsPromise = (arrayLinks) => {
    const arrayPromes = arrayLinks.map((obj) => fetch(obj.href)
      .then((res) => ({
        href: obj.href,
        text: obj.text,
        file: obj.fileName,
        status: res.status,
        ok: res.ok ? 'OK' : 'FAIL'
      }))
      .catch(() => ({
        href: obj.href,
        text: obj.text,
        file: obj.fileName,
        status: 500,
        ok: 'FAIL'
      })));
    return Promise.all(arrayPromes);
    
    
};
  
module.exports = {
    converterPathAbsolut, 
    validatePath,
    getMdFiles,
    readFileContent,
    httpsPromise,     
};
