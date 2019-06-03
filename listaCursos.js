

const lista = require('./datosCursos');

let traecurso = lista.cursos.contenido;

let listar = () => {
    console.log('Los Cursos ofertados por la division de educacion continua de el Tecnologico de Antioquia');
    console.log("\n");


    var count = 0;
    var intervalObjet = setInterval(function () {
        console.log(traecurso[count].id);
        console.log(traecurso[count].nombre);
        console.log(traecurso[count].duracion);
        console.log(traecurso[count].valor);
        console.log("\n");

        count++;

        if (count == traecurso.length) {
            clearInterval(intervalObjet);
            process.stdout.write('\n \n');
            //process.exit();
        }


    }, 2000);

}


module.exports = {
    listar
};

