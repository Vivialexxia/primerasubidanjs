

const cursos = require('./datosCursos');
const listar = require('./listaCursos');
const server = require('express');
const app = server();
const inicio = require('./Index');


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

    /*Se define la funcion para imprimir en html*/
    let imprimehtml = (SeleccionaCurso) => {

        /*Se guarda en la variable texto el nombre, id y Curso seleccionado para escribirlo en el archivo*/
        texto = "Hola: "+ argv.Nombre + " Con Numero de Identificacion : " + argv.Id + " Te has matriculado en el curso : " + SeleccionaCurso.nombre + '\n';
    }

    imprimehtml(SeleccionaCurso);



}


else {
    /*Se valida que la ejecucion se halla hecho con parametros, si no es asi lista los cursos, si la ejecucion
    se hizo con paramtros pero no encuentra el curso se pinta la alerta de curso no encontrado y se vuelve a 
    listar los cursos disponibles*/
    if (process.argv.length > 2 && typeof SeleccionaCurso == 'undefined') {
        console.log(+'\n\n' + "No se ha logrado encontrar el Curso por favor verifique en la Lista." + '\n\n');
        listar.listar();
    }
    else
        listar.listar();

}


app.get('/vivi', function (req, res) {
    res.send('<b>'+ texto + '</b>');
}


)
app.listen(8000);


/* Para Ejecutar este programa se debe hacer asi: node EntregaUnoExpress inscribir --Id 99999 --Nombre 'xxxxx' --Curso 1 */


