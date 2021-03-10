// Edmoun Ramirez#14 5b

const = saludar (nombre) =>{

    console.log('Creando etiqueta h1, en el HTML!');

    const h1 = document.CreateElement('h1');
    h1.innerText = 'Hola, ${nombre}';

    document.body.append(h1);

}
const user = "Juancho";
saludar(user);  

