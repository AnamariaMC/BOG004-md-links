//importamos modulo de mdlinks
const mdLinks = require('./md-links.js')
// node methods process
const process = require('process');

// captura de argumentos de terminal
const terminalArgs = process.argv;

//Llamo función mdLinks 
mdLinks(terminalArgs);
