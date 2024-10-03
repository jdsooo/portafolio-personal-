import { header } from "../header/header.js";
import { dataProyectos } from "./data.js";


function proyectos(){
    let section = document.createElement('section');
    section.appendChild(header());
    section.appendChild(listaProyectos()); // Changed to call listaProyectos function
    section.className = 'section-proyectos';
    
    return section;
}

// Function to create individual project items
function item(texto, githubPage){
    let div = document.createElement('div');
    div.className = "div-item";

    let a = document.createElement('a');
    a.className = "link-github";
    a.href = githubPage;
    a.innerText = githubPage; // Displaying the actual github page link
    div.appendChild(a);

    let stack = document.createElement('div');
    stack.innerText = "[js, css, html]"; // Tech stack for the project
    div.appendChild(stack);

    return div;
}

// Function to create the list of projects
function listaProyectos(){
    let div = document.createElement('div');
    div.className = "lista-proyectos";
   
    dataProyectos.forEach(proyecto => {
        div.appendChild(item(proyecto.nombre, proyecto.githubPage));
    });
    
    return div;
}

export { proyectos };