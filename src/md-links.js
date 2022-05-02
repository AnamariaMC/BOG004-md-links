// Módulos de node

const { converterPathAbsolut, 
    getMdFiles,
} = require('./nodemethods');

//Función mdLinks
const mdLinks = (args) => new Promise(() => { 
  // captura de la ruta a partir del array de args
  const catchedPath = args[2];
  
  // invoca funcion converterPathAbsolut
  const absolutePath = converterPathAbsolut(catchedPath);
  console.log('PATH', absolutePath)

  const mdFiles = getMdFiles(catchedPath, [])
  console.log('todos los .md', mdFiles);



});
module.exports = mdLinks;
    

