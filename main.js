import { navBarDiv } from "./components/navBar/navBar.js";
import { proyectos } from "./components/proyect/proeyect.js";
import{contenedor}from "./components/navBar/herramientas.js";
/* Componentes de la página */
let DOM = document.querySelector("#root");

/* navBar */
let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
navBar.appendChild(contenedor);
DOM.appendChild(navBar);

/* proyect */
let proyect = document.createElement('section');
proyect.className = "proyect";
proyect.appendChild (proyectos()); //<------- componente
DOM.appendChild(proyect);
