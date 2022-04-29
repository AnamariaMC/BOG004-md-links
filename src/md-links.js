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

  console.log('todos los .md', getMdFiles )



});
module.exports = mdLinks;
    

//   //condicional para verificar si la ruta es valida
//   if(resultValidatePath){
//     fileDirector(absolutePath)
//       .then((isDirResult) => {
//           if(isDirResult){
//               console.log('Recursividad Revisar');
//               const dirFiles = readDirFiles(absolutePath);
//               resolve(dirFiles);
//               //debe retornar un array con una o mas rutas
//           }else {
//               console.log('Guardar ruta md en array');
//               const fileMdResult = isFileMd(absolutePath);
//               pathArray.push(fileMdResult);
//               console.log(pathArray);
//               resolve(fileMdResult);
//           }
//       })
//       .catch((error) => {
//           console.log('soy error', error);
//       });
//   }else{
//       const invalidPath = 'Ruta no valida'; 
//       console.log(invalidPath);
//       return invalidPath;
//   }

 



// //captura de la ruta a partir del array de args
// const terminalPath = args[2];

// //Resuelve y normaliza la ruta
// const pathAbsolute = path.resolve(terminalPath).normalize();
// console.log('Hola ya soy absoluta', pathAbsolute);

// //

// // verifica si existe la ruta
// const validatePath = (path) => fs.existsSync(path);


// // función para saber si es un directorio o archivo. Si es directorio : true y si es archivo: false
// const isFileOrDirectory =  (pathToCheck) =>{
//     fs.stat(pathToCheck, (err, stats) => {
//         if (err) throw err;
//         console.log('soy directorio?', stats.isDirectory());
//     });
// }
// // función para leer el contenido de mi archivo
// const readFile = (pathToRead) => {
//     fs.readFile(pathToRead, 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
//     });
// }
// // Guardo el rersultado e invoco la función pasando conmo argumento pathAbsolute
// const resultValidatePath  = validatePath(pathAbsolute);

// if(resultValidatePath === true ){
//     isFileOrDirectory(pathAbsolute)
//     readFile(pathAbsolute);
// }else{
//     console.log('Fin del programa');
// }




// // Function para listar los nombres d elos archivos de un directorio 
// const contenstDir = () => {
//     filenames = fs.readdirSync(__dirname);

//     console.log("Archivos del directorio:");
//     filenames.forEach(file => {
//     console.log(file);
//     });

//     console.log("Documentos .md extension:");
//     filenames.forEach(file => {
//     if (path.extname(file) == ".md")
//     console.log(file);
//     })

//     // Function to get current filenames in directory with "withFileTypes" set to "true" 
//     // fileObjs = fs.readdirSync(__dirname, { withFileTypes: true });
//     // console.log("\nCurrent directory files:");
//     // fileObjs.forEach(file => {
//     // console.log(file);
//     // });
// }
// contenstDir()  

// const extension = path.extname('./prueba.md'); //obtener la extención del archivo
// console.log(extension);

// otenemos la ruta absoluta del directorio y del archivo actual
// const dirName = path.dirname(__dirname); //El dirname obtiene la ruta  
// const fileName = path.dirname(__filename); //__filename es el archivo actual en el que estoy
// console.log('directory-name :', dirName, 'file-name :', fileName);


// const { fstat } = require('fs');

// const mdlinks = (args) => {
//     console.log('llego a md');
//     //console.log('INFO DESDE MD', args)
//     const path = require('path');
//     const fs = require('fs');//función sistem
//     //traemos la ruta que nos pasa el array desde el erg[2]
//     const terminalPath = args[2];

//     //conversión de ruta relativa a absoluta 
//     const terminalPathAbsolute = path.resolve(terminalPath).normalize();
//     console.log('PAAAAATH', terminalPathAbsolute);

//     fs.stat(terminalPathAbsolute, (err, stats) => {
//         if (err) throw err;
//         console.log('es directorio?', stats.isDirectory());
//     });

// } 
// module.exports = mdlinks;


// //modulos de Node
// const fs = require('fs');//función sistem 
// const process = require('process');// provee información
// const path = require('path')//

// // captura de argumentos desde la terminal
// const args = process.argv;
// //console.log(args);
// //console.log('el numero de argumentos es '+ args.length + ' index 2 ' +args[2]);
// //console.log('esto es process: ', process.argv)// captura de argumentos desde la terminal
// const rutaArgumento = path.resolve(args[2]);//resuelve la ruta de relativa a absoluta 

// console.log(path.normalize(rutaArgumento));
// //lee el contenido de los archivos
// fs.readFile(path.normalize(rutaArgumento), 'utf8', function(err, data) {
//   if (err) throw err;
//   console.log('este es el contenido del archivo:', data);
// });
// //exname es para obtener la extención del archivo
// const extension = path.extname('prueba.md');
// //console.log('es un archivo '+ extension);

// //obtiene la ruta absoluta del directorio y/o archivo actual
// const dirName = path.dirname(__dirname); //El dirname obtiene la ruta  
// const fileName = path.dirname(__filename); //__filename es el archivo actual en el que estoy
// //console.log('directory-name :', dirName);
// //console.log('file-name :', fileName);
