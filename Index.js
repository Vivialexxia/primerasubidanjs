const cursos = require('./datosCursos');
const listar = require('./listaCursos');
const fs = require('fs');
const estudiante = {
    idEstudiante: { demand: true, alias: 'Id' },
    nombreEstudiante: { demand: true, alias: 'Nombre' },
    idCurso: { demand: true, alias: 'Curso' }
}
/*Se define el comando Inscribir, y se le pasan los argumentos definidos en la variable constante estudiante*/
const argv = require('yargs')
    .command('inscribir', 'matricula', estudiante)
    .argv;


/* Se crea variable para guardar la busqueda en el array de cursos disponibles*/
let SeleccionaCurso = cursos.cursos.contenido.find(function (cursoSelect) { return cursoSelect.id == argv.Curso })

if (typeof SeleccionaCurso != 'undefined') {
    console.log("El curso selecccionado es: " + SeleccionaCurso.id + " " + SeleccionaCurso.nombre);

    /*Se define la funcion crearArchivo*/
    let crearArchivo = (SeleccionaCurso) => {

        /*Se guarda en la variable texto el nombre, id y Curso seleccionado para escribirlo en el archivo*/
        texto = argv.Nombre + " Con Numero de Identificacion : " + argv.Id + " Se ha Matriculado en el curso : " + SeleccionaCurso.nombre + '\n';
        /*Crea el archivo matricula.txt en el directorio actual de ejecucion*/
        fs.writeFile('./matricula.txt', texto, (err) => {
            if (err) throw ("Se ha producido el siguiente error: " + err);/* Se valida si ocurrio algun error durante la creacion del archivo, si no hay error ejecuta la proxima linea*/

            console.log("Se ha creado el archivo de matricula con exito.");

        });

    }
    /*Se Ejecuta la funcion crearArchivo*/
    crearArchivo(SeleccionaCurso);

}
else {
    /*Se valida que la ejecucion se halla hecho con parametros, si no es asi lista los cursos, si la ejecucion
    se hizo con paramtros pero no encuentra el curso se pinta la alerta de curso no encontrado y se vuelve a 
    listar los cursos disponibles*/
    if (process.argv.length > 2 && typeof SeleccionaCurso == 'undefined') {
        console.log(+'\n\n'+"No se ha logrado encontrar el Curso por favor verifique en la Lista." + '\n\n');
        listar.listar();
    }
    else
        listar.listar();

}


/* Para Ejecutar este programa se debe hacer asi: node Index inscribir --Id 99999 --Nombre 'vivian' --Curso 1 */



