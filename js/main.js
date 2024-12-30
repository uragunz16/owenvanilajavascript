'strict';

// create container

let container = document.createElement('div');// create div element
container.classList.add("container");// add class name into created div 
document.body.appendChild(container);// append container into body

// create header section with classtlist header
let header = document.createElement("header");// create header
header.classList.add("main_header");// add class in header
container.appendChild(header);// append header div into container

let img = document.createElement("img");//create element image
img.classList.add("logo");// add class name in element img
img.setAttribute("src", "image/logo.jpg");// link file folder of img
img.setAttribute("width", "150");// set width for img
header.appendChild(img);// appendChild img inside header tag

//create another div with classlist navHeader
let nav = document.createElement("nav");//create element div nav
nav.classList.add("nav_box");//add class name for nav
header.appendChild(nav);//appendChild inside header called nav

//loop to array and append to ul
let linkToNav = ["About Me", "My Portfolio", "Contact Me"]; 
//create ul
let ul = document.createElement("ul");
ul.classList.add("nav_ul");
nav.appendChild(ul);

//     linkToNav.forEach(a => nav.innerHTML += `<a href="#">${a}</a>`);
for (let i = 0; i <= linkToNav.length -1; i++) {
  li = document.createElement("li");
  li.classList.add("nav_items");  
  li.innerHTML = `<a href="#">${linkToNav[i]}</a>`;
  ul.append(li);
};
  
// creating first section element
let section = document.createElement("section");
section.classList.add("hero_section");
document.body.appendChild(section);

let div1 = document.createElement("div");
div1.classList.add("hero_box");
section.appendChild(div1);

let heroSectionTitle = document.createElement("h1");
heroSectionTitle.classList.add("hero_title");
heroSectionTitle.innerHTML = "Hi! I'm Mark Owen Policarpio"
div1.append(heroSectionTitle);

let heroText = document.createElement("p");
heroText.classList.add("hero_text");
heroText.innerHTML = "Expert in HTML5, CSS3 and Javascript, manipulating the DOM is my strongest understanding along the Hyper Text Markup Language and Cascading. And now i'm learning React-js and deep diving into the Back-End MongoDB.";
div1.appendChild(heroText);

let div2 = document.createElement("div");
div2.classList.add("hero_box_image");
section.append(div2);

let imgHero = document.createElement("img");
imgHero.classList.add("hero_image")
imgHero.setAttribute("src", "image/owen.jpg");
imgHero.setAttribute("width", 500);
div2.appendChild(imgHero);
