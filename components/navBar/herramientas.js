let contenedor=document.createElement(`div`);
contenedor.className="contendor";

let herramientas= [
    { nombre: 'Nombre Herramienta', color: 'purple' },
    { nombre: 'Nombre Herramienta', color: 'turquoise' },
    { nombre: 'Nombre Herramienta', color: 'orange' },
    { nombre: 'Nombre Herramienta', color: 'green' },
    { nombre: 'Nombre Herramienta', color: 'red' },
    { nombre: 'Nombre Herramienta', color: 'black' }
];

herramientas.forEach((herramientas) => {
    let herramientaDiv = document.createElement('div');
    herramientaDiv.className = "herramienta-div"; 
    // Crear el bloque de color
    let colorBlock = document.createElement('div');
    colorBlock.className = "color-block"; 
    colorBlock.style.backgroundColor = herramientas.color;

    // Crear el título de la herramienta
    let herramientaTitle = document.createElement('h3');
    herramientaTitle.textContent = herramientas.nombre;
    herramientaTitle.className = "herramientanombre"; 
    
    herramientaDiv.appendChild(colorBlock);
    herramientaDiv.appendChild(herramientaTitle);

    contenedor.appendChild(herramientaDiv);
});
export{contenedor};