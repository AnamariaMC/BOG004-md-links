#!/usr/bin/env node

const mdLinks = require('./index.js')
// node methods process
const process = require('process');

// captura de argumentos de terminal
const terminalArgs = process.argv;

// se llama terminalArguments en ves del array
mdLinks([ 'C:\\Program Files\\nodejs\\node.exe',
'C:\\Users\\Ing. Anamaria MC\\Documents\\laboratoria\\BOG004-md-links\\src\\index.js',
'./mds',
'--prueba']).then((result)=>{
    console.log(result)
  })
  .catch((error)=>{
      const errorMessage = 'Error'
      //reject(error, errorMessage)
      console.log(error, errorMessage)
  });