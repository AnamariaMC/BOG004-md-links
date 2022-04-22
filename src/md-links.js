const { fstat } = require('fs');

const mdlinks = (args) => {
    console.log('llego a md');
    //console.log('INFO DESDE MD', args)
    const path = require('path');
    const fs = require('fs');//función sistem
    //traemos la ruta que nos pasa el array desde el erg[2]
    const terminalPath = args[2];

    //conversión de ruta relativa a absoluta 
    const terminalPathAbsolute = path.resolve(terminalPath).normalize();
    console.log('PAAAAATH', terminalPathAbsolute);

    fs.stat(terminalPathAbsolute, (err, stats) => {
        if (err) throw err;
        console.log('es directorio?', stats.isDirectory());
    });

} 
module.exports = mdlinks;


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
