// cache (cache basically means remember/store )the element
// if u want to access something often store it in a variable

const titleElement = document.querySelector("#main-title");
console.dir(titleElement);

const paragraphElement = document.querySelector(".cool");
console.dir(paragraphElement);
console.dir(paragraphElement.textContent);

//textContent sets/accesses all of the text in an element

// paragraphElement.textContent = "The placeholder text is  gone";

console.dir(paragraphElement);

//innerText accesses the visible text of the element. meaning style = "display: none;""

const footerElement = document.querySelector(".hidden");

console.dir(footerElement.innerText);

// innerHTML sets/accesses the content which can contain HTML (as a string)

footerElement.innerHTML = "AMEN";
console.dir(footerElement.innerHTML);

// paragraphElement.innerHTML = "STRONG"

// console.dir(paragraphElement.innerHTML);

titleElement.style.textAlign = "center";
paragraphElement.style.color = "blue";

const bodyElement = document.querySelector("body");
// when selecting a element dont use . or #

console.dir(bodyElement);

const h2Element = document.createElement("h2");
console.dir(h2Element);

h2Element.textContent = "Comments section";

bodyElement.appendChild(h2Element);
console.dir(h2Element);

// use querySelectorAll to select multiple elements
// qsa returns a node list which is similar to an array

const commentElements = document.querySelectorAll("li");

console.dir(commentElements);

commentElements.forEach((commentElement) => {
  console.log(commentElement.textContent);
  commentElement.style.fontSize = "30px";
  commentElement.style.color = "purple";
});

// if you dont want to access the selected element again

document.querySelector("button").removeAttribute("disabled");

const buttonElement = document.querySelector("button");


console.dir(buttonElement);

buttonElement.setAttribute('id', 'submit');

buttonElement.classList.add("btn");
buttonElement.classList.replace("btn", "action-button");

// wrong document.buttonElement.setAttribute("button", "#submit");
