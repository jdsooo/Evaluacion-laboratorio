import { navBarDiv } from "./componente/componente_1/componente_1.js";

let DOM = document.querySelector("#root");

let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar);



