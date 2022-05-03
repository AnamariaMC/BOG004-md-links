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

//leer los archivos y extraer los links. Esta funcion me retorna un arreglo de objetos con los links encontados.
const readLinks = (isPath) => {
    const regExp1 = new RegExp (/\[([\w\s\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg);//link
    const regExp2 = new RegExp (/\[[\w\s\d.()]+\]/);//texto
    const regExp3 = new RegExp (/\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg);//ruta
    const fileContent = fs.readFileSync(isPath, 'utf-8');//lee el archivo
    //console.log('fileContent: ', fileContent);
    const arrayLinks = fileContent.match(regExp1);/* extraigo los links que coincidan con mi expresion regular
        match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena.*/
    console.log('arrayLinks: ', arrayLinks);
    if (arrayLinks === null) {
        console.log('----| | ✧ ✿ ...La ruta ingresada no tiene links... ✿ ✧ | |---');
        return [];
    }
    else {
        return arrayLinks.map((myLinks) => {
        const myhref = myLinks.match(regExp3).join().slice(1, -1);//URL encontradas
        const mytext = myLinks.match(regExp2).join().slice(1, -1);//Texto que aparecía dentro del link
        
        return {
            href: myhref,
            text: mytext,
            fileName: isPath//Ruta del archivo donde se encontró el link.
        }
    })};
};

module.exports = {
    converterPathAbsolut, 
    validatePath,
    isDirectory,
    dirFiles,
    getMdFiles,
    readLinks,      
};
