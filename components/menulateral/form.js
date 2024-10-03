// Crear el contenedor del formulario
let contendorform = document.createElement('div');
contendorform.className = "contendorform";

// Crear el título del formulario
let titulodeform = document.createElement('h2');
titulodeform.className = "tituloform";
titulodeform.innerText = "Contactanos";

// Crear los divs del formulario
let div1 = document.createElement('div');
div1.className = "div1";

let div2 = document.createElement('div');
div2.className = "div2";

let comentario = document.createElement('div');
comentario.className = "comentario";

// Crear el botón del formulario
let btn = document.createElement('button');
btn.className = "btn";

// Crear el texto dentro del botón
let h3 = document.createElement('h2');
h3.className = "textobtn";
h3.innerText = "Enviar"; // Agregar el texto del botón

// Añadir el texto al botón
btn.appendChild(h3);

// Añadir los elementos al contendorform uno por uno
contendorform.appendChild(titulodeform);
contendorform.appendChild(div1);
contendorform.appendChild(div2);
contendorform.appendChild(comentario);
contendorform.appendChild(btn);

// Exportar el contenedor del formulario
export { contendorform };
