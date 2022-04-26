// metodos node
const fs = require('fs');
const path = require("path");

//función para convertir ruta a absoluta
const converterPath = (pathToConverter) => {
    let pathToConvertResult;
    path.isAbsolute(pathToConverter) 
        ? pathToConvertResult = pathToConverter
        : pathToConvertResult = path.resolve(pathToConverter).normalize();
    return pathToConvertResult;
}
//función para verificar si la ruta existe
const validatePath = (path) => fs.existsSync(path);

//Función para saber si es un directorio
const fileDirector = (pathToCheck) => new Promise((resolve) => {
    fs.stat(pathToCheck, (err, stats) => {
        if(err) throw err;
        const isDirResult = stats.isDirectory()
        console.log('Es Directorio?', isDirResult);
        resolve(isDirResult);
    });
}); 
//Función para revisar los documentos dentro de un archivo 
const readDirFiles = (pathToCheckContent) => {
    const dirFiles = fs.readdirSync(pathToCheckContent);
    console.log('Contenido del directorio', dirFiles);
    return dirFiles
}
//muestra la extención del documento encontrado 
const fileExtension = (filePath) => {
    const extension = path.extname(filePath);
    return extension
}

//función para leer contenido de una rchivo
const readFile = (pathToRead) => {
    fs.readFile(pathToRead, 'utf8', function(err,data) {
        if (err) throw err;
        console.log(data);
        return data;
    });
}

// funcion para revisar si es archivo md y leer su contenido
const isFileMd = (filePath) => {
    const fileExtensionResult = fileExtension(filePath);
    if(fileExtensionResult === '.md'){
        return filePath;
    }else{
        const isFileMdError = 'Archivo no tiene extención .md';
        return isFileMdError;
    }
};

module.exports = {
    converterPath, 
    validatePath,
    fileDirector,
    readDirFiles,
    fileExtension,
    readFile,
    isFileMd,
};