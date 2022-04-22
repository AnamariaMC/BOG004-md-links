//importamos modulo de mdlinks
const mdLinks = require('./md-links.js')
// node methods process
const process = require('process');
const terminalArgs = process.argv;

//
mdLinks(terminalArgs);
