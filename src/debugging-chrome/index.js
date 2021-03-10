function repetir(nombre, veces){
/**
 * @author Edmoun Ramirez#14
 * @version 0.1.0
 * @param  {string} nombre
 * @param {number}  veces
 * @return {node}
 */

 for (let index = 1; index <= veces; index++) {
     let element = document.createElement('p');
     element.innerText=nombre;
     document.body.appendChild(element);

 }
 
}

const nom = prompt("Escribe tu nombre")
const vcs = parseInt(prompt("Escribe las vcs"));
repetir(nom, vcs);