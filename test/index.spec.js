const mdLinks = require('../src/index.js');

const path = 'test/pruebasTest';
const rootLinks = 'test/pruebasTest/pruebasinLinks.md';
const rootWithoutLinks = 'test/pruebasTest/pruebasTest.md';
const rootLinkbad = 'test/pruebasTest/pruebasTestInvalida.md';
const emptyroute = 'test/pruebasTest/pruebaTestSinNada';

const arrayLinks = [
  {
    href: 'https://www.google.com',
    text: 'Google',
    file: 'C:\\Users\\Ing. Anamaria MC\\Documents\\laboratoria\\BOG004-md-links\\test\\pruebasTest\\pruebaTest.md',
    status: 200,
    ok: 'OK',
  },
  {
    href: 'https://node.org/',
    text: 'Node-Roto',
    file: 'C:\\Users\\Ing. Anamaria MC\\Documents\\laboratoria\\BOG004-md-links\\test\\pruebasTest\\pruebaTest.md',
    status: 404,
    ok: 'FAIL',
  }];


describe('mdLinks', () => {
  it('Debe ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('Debe retornar una promesa', () => {
    expect(mdLinks(path) instanceof Promise).toBeTruthy()
  });
  it('Debería retornar un arreglo de objetos de links validados',() =>{
    mdLinks(rootLinks, { validate: true }).then(e => expect(e).toEqual(arrayLinks)).catch((error) => error)
  });
  it('Deberia retornar un array de objetos invalidos', () => {
    return mdLinks(rootLinks, {validate:false}).then(e => expect(e).toEqual(arrayLinks))
  })
  it('Debe retornar un mensaje de ruta no valida', () => {
    return mdLinks(rootLinkbad, {validate:true}).catch(e => expect(e).toMatch('|✧ Ruta no valida ✧ |'))
  })
  it('Debe retornar el mensaje de no hay links', () => {
  return mdLinks(rootWithoutLinks, {validate:true}).catch(e => expect(e).toMatch("|✧ No se han encontrado links dentro del archivo md. ✧ |"))
  })
  it('Debe retornar mensaje de directorio vacio', () => {
    return mdLinks(emptyroute, {validate:true}).catch(e => expect(e).toMatch("|✧ El directorio esta vacio ✧ |"))
  })
});
