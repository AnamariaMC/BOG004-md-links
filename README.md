# Markdown Links &#128515;
Con la ayuda de esta libreria podras encontrar el numero de Links que contiene un archivo .md, en la ejecución podras ver estadisticas como: 

- total de links.
- links únicos. 
- links rotos.


## 1. Instalación
Mediante npm:

 &#9996; npm  install md-links-anamariamc


## 2. Guia de uso

Esta aplicación se puede ejecutar a través de la terminal usando el comando:

`md-links <ruta>` 

### ejemplo:

`md-links <ruta>` 
```sh

PS C:\Users\AnamariaMC\Documents\laboratoria\BOG004-md-links> md-links ./mds            

 |      lINKS ENCONTRADOS:     | 

 ▷ href:  https://es.pedia.org/wiki/Markdown   
 ▷ text:  Markdown 
 ▷ fileName: C:\Users\AnamariaMC\Documents\laboratoria\BOG004-md-links\mds\directorio\pr
 ---- 
 ▷ href:  https://www.google.com/   
 ▷ text:  Google
 ▷ fileName: C:\Users\AnamariaMC\Documents\laboratoria\BOG004-md-links\mds\prueba.md
 ----
 ▷ href:  https://nodejs.org/
 ▷ text:  Node.js
 ▷ fileName: C:\Users\AnamariaMC\Documents\laboratoria\BOG004-md-links\mds\directorio\so
 ----
 ▷ href:  https://nodejs.org/
 ▷ text:  Node.js
 ▷ fileName: C:\Users\AnamariaMC\Documents\laboratoria\BOG004-md-links\mds\directorio\so
 ----
```

### Options

```sh
PS C:\Users\AnamariaMC\Documents\laboratoria\BOG004-md-links> md-links ./mds --validate 
       |  LINK STATUS:  | 
     
▷ href: https://es.pedia.org/wiki/Markdown 
▷ status: 500 
▷ fail: FAIL

▷ href: https://www.google.com/ 
▷ status: 200 
▷ ok: OK
 ---
▷ href: https://nodejs.org/ 
▷ status: 200 
 ---
▷ href: https://nodejs.org/ 
▷ status: 200 
▷ ok: OK
 ---
```

--validate

 - validara cada link dentro del archivo.
 - obtiene ruta del archivo href.  
 - mensaje de OK o FAIL. 
 - estado del link y texto.

 ```sh
 PS C:\Users\AnamariaMC\Documents\laboratoria\BOG004-md-links> md-links ./mds --stats

    |     ESTADISTICAS   |

        ▷ Total:4 
        ▷ Unique:3
 --- 
 ```

 --stats o -s

 - para obtener el total de links. 
 - cantidad de links únicos. 
 
 
 ```sh
 PS C:\Users\AnamariaMC\Documents\laboratoria\BOG004-md-links> md-links ./mds --validate --stats

    |     STATS AND BROKEN   |

        ▷ Total:4 
        ▷ Unique:3
        ▷ Broken:1
 ```

 --validate --stats 

 - para obtener el total de links. 
 - cantidad de links únicos. 
 - links rotos.

 
## 3. Diagrama de flujo

El proyecto fue desrrollado a partir de la construcción de un Diagrama de flujo.

![diagrama-de-flujo]()

Anamaria Medina Cañas.&#128515;

