
let OfertaCursos = {
   id:1,
   nombre:1,
   duracion:1,
   valor:1,
   };
   

let oferta = (nota_uno,nota_dos,nota_tres)=>{
    setTimeout (function(){
        let resultado = (nota_uno+nota_dos+nota_tres)/3;
        console.log('El promedio 2 es'+ resultado);
    
}, 2000);
}
