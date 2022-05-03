// Módulos de node

const { converterPathAbsolut, 
    getMdFiles,
    readLinks,
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

  let arrayLinks = mdFiles.map((file) => {
    console.log('que es el file', readLinks(file));  
    return readLinks(file)
  }).flat();
  console.log('TODOS LOS LINKS', arrayLinks);
});

module.exports = mdLinks;
    

