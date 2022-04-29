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
const getMdFiles = (isPath) => {
    let allMdFiles = [];
    const mdCycle = (isPath) => {
        if (!isDirectory(isPath)) {
            if(mdFiles) {
                allMdFiles.push(isPath);
            }
        }else {
            const readDirectorFiles = fs.readdirSync(isPath);
            let absolutePath = readDirectorFiles.map((fileName) => path.join(isPath, fileName));
            absolutePath.forEach ((fileNamePath) => {
                mdCycle(fileNamePath)
            });
        };
    };
    mdCycle(isPath);
    console.log('que me retorna getMdFiles : ', allMdFiles)
    return allMdFiles // la función retorna un array con todos los archivos .md
};

module.exports = {
    converterPathAbsolut, 
    validatePath,
    isDirectory,
    dirFiles,
    getMdFiles,
    
    
};

// //función para leer contenido de una rchivo
// const readFile = (pathToRead) => {
//     fs.readFile(pathToRead, 'utf8', function(err,data) {
//         if (err) throw err;
//         console.log(data);
//         return data;
//     });
// }

// // funcion para revisar si es archivo md y leer su contenido
// const isFileMd = (filePath) => {
//     const fileExtensionResult = fileExtension(filePath);
//     if(fileExtensionResult === '.md'){
//         return filePath;
//     }else{
//         const isFileMdError = 'Archivo no tiene extención .md';
//         return isFileMdError;
//     }
// };

