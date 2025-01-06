const title = document.getElementsByiD("about");
console.log (title.textContent);

const items = document.getElementsByClassName("product");
console.log(items);
console.log(items[0]);
console.log(items[0].innerHTML);
console.log(items[0].innerText);
console.log(items[0].textContent);

const header = document.querySelector("h1");
const allProjects = document.querySelectorAll(".project");
console.log(header);
console.log(allProjects);

aboutSection.textContent = "Welcome to my portfolio!";

allProjects.textContent