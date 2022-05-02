// metodos node
const fs = require('fs');
const path = require("path");

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
    console.log('Contenido del directorio', dirFilesArray);
    return dirFilesArray
}

//muestra los archivos md dentro del  
const mdFiles = (isPath) => {
    const mdExtensionFiles = path.extname(isPath) === '.md'
    return mdExtensionFiles;
}

//función con recursividad para recorrer las carpetas y archivos consiguiendo los .md 
const getMdFiles = (isPath, allMdFiles) => {
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

module.exports = {
    converterPathAbsolut, 
    validatePath,
    isDirectory,
    dirFiles,
    getMdFiles,
    
    
};


// //función para leer contenido de una rchivo
// const readFile = (ispath) => {
//     fs.readFile(ispath, 'utf8', function(err,data) {
//         if (err) throw err;
//         console.log(data);
//         return data;
//     });
// }
