# PROYECTO PERSONAL TALENTO DIGITAL - Página Web Digitalizate
## Link repositorio
```bash
    https://github.com/BryanC7/Portafolio-Talento-Digital.git
```
## Instrucciones para la ejecución del proyecto  
1. En primer lugar, es necesario la instalación de: ```node.js``` ```postgreSQL``` en tu pc.
2. Ejecutar mediante terminal el comando ```npm i``` para llevar a cabo las instalaciones de todas las dependencias implementadas.
3. Para que el proyecto funcione correctamente se requiere utilizar REST-API-Talento-Digital ("https://github.com/BryanC7/REST-API-Talento-Digital"), por lo que se deben seguir las instrucciones especificadas en el readme de dicho proyecto.
4. Ir a la carpeta backend y al archivo ```.env.example``` eliminar el ".example" para hacer uso de la variable de entorno almacenada.
5. Finalmente, en la terminal ejecutar ```npm run init-back``` para arrancar el proyecto. Una vez iniciado, acceder en el navegador a "http://localhost:3000/index".

## Rúbrica
Items de la rúbrica y sus archivos respectivos (La totalidad de los puntos a evaluar están divididos entre ambos proyectos):

#### Lenguaje Node
- Inclusión de paquetes y librerias de usuario: ```package.json```
- Agrupación de código y separación por funcionalidad: ```/js```
- Utilización de funciones asíncronas: ```/backend/routes/routes.js``` ```/js/class/User.js``` ```/js/class/Order.js```
- Lectura de parámetros de entrada: ```/backend/routes/routes.js```
- Funcionamiento general del aplicativo: ```/backend/routes/routes.js```

#### Algoritmo de cálculo y manipulación de archivos de texto
- Utilización general del lenguaje, sintaxis, selección de tipo de datos, sentencias lógicas, expresiones, operaciones, comparaciones: ```/js``` ```/backend/routes/routes.js```
- Utilización de sentencias repetitivas: ```/js/templates.js``` ```/js/validate-form.js``` ```/js/validate-pay.js```
- Convenciones y estilos de programación: ```/js/class``` ```/js/templates.js``` ```/js/register-editInfo.js```
- Utilización correcta de estructura de datos: ```/backend/routes/routes.js```
- Manipulación de archivos: ```/backend/routes/routes.js``` ```/views/partials/registerForm.hbs``` ```/views/editInfo.hbs```

#### Página Web 
- Uso de tags html (uso de hbs como motor de plantilla), estilos CSS y uso de framework Bootstrap, responsividad: ```/views``` ```/public/css```

#### Uso de express
- Creación de servicio: ```/backend/routes/routes.js``` ```/backend/routes/index.js```