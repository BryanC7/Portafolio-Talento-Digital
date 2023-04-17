# Repositorio
https://github.com/BryanC7/Portafolio-Talento-Digital.git
## Instrucciones para la ejecucción del proyecto  
1. Para que el proyecto funcione correctamente es necesario la instalación de: ```node.js``` ```postgreSQL```.
2. Ejecutar mediante terminal el comando ```npm i``` para llevar a cabo las instalaciones de todas las dependencias implementadas.
3. Ir a la carpeta config, abrir el archivo config.json y modificar el objeto ```development``` con los datos personales de tu conexión de postgreSQL.
4. Para la creación de la base de datos ejecutar ```npm run create-db```.
5. Para la creación de tablas ir a la carpeta backend, abrir el archivo 'query.js' y descomentar el primer bloque entre 'inicio primera ejecución' y 'término primera ejecución'. Una vez hecho ejecutar en la terminal ```npm run query-tables```.
6. Desde ese mismo archivo comentar la inserción de datos a 'newUser' y descomentar el segundo bloque 'adminUser'. Ejecutar nuevamente ```npm run query-tables```.
7. Finalmente, en la terminal ejecutar ```npm run init-back``` para arrancar el proyecto. Una vez iniciado, acceder en el navegador a "http://localhost:3000/index".