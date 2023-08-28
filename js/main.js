'strict';

  // create header section with classtlist header
  let header = document.createElement("header");
  header.classList.add("main_header");
  document.body.append(header);

  let img = document.createElement("img");
  img.classList.add("logo");
  img.setAttribute("src", "image/logo.jpg");
  img.setAttribute("width", "150");
  header.appendChild(img);


  //create another div with classlist navHeader
  let nav = document.createElement("nav");
  nav.classList.add("nav_box");
  header.appendChild(nav);


  //loop to array and append to ul
  let linkToNav = ["About Me", "My Portfolio", "Contact Me"];  

  //create ul
  let ul = document.createElement("ul");
    ul.classList.add("nav_ul");
    nav.appendChild(ul);

//     linkToNav.forEach(a => nav.innerHTML += `<a href="#">${a}</a>`);

  for (let i = 0; i <= linkToNav.length - 1; i++) {

    let li = document.createElement("li");
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
