let navBarDiv = document.createElement('div');
navBarDiv.className = "JS";

let imgLogo = document.createElement('img');
imgLogo.src = "https://static.wixstatic.com/media/d1b317_4fe70cb66f9447c3991ad4cb8d7294d3~mv2.png/v1/fit/w_2500,h_1330,al_c/d1b317_4fe70cb66f9447c3991ad4cb8d7294d3~mv2.png";
imgLogo.className = "imagen";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('p');
h2.innerText = "examen final";
navBarDiv.appendChild(h2);


export { navBarDiv };