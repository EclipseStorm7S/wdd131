const PI = 3.14;
let radius = 3;

let area = radius * radius * PI;
console.log(area);

radius = 7;

area = radius * radius * PI;
console.log(area);

const one = 1;
const two = '2';

let result = one + two;
console.log(result);

result = one + Number(two);
console.log(result);


let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
//console.log(student); //does not work, can't access a block variable outside the block

/*
document.querySelector("#hi") is the same as document.getElementById("hi")
document.querySelector(".hi") is the same as document.getElementByClassName("hi")
document.querySelector("hi") is the same as document.getElementByTagName("hi")


element.innerHTML = "<p>New content muwahahaha</p>";
element.innerText = "New text content"; (includes hidden elements, like \n)
element.textContent = "New text content";
inputElement.value = "new input value"; (usually read rather than written)

element.style.color = "blue";
element.style.backgroundColor = "yellow";
element.style.fontSize = "20px";

element.className = "newClass";
element.classList.add("newClass");
element.classList.remove("newClass");
element.classList.toggle("newClass"); (add or remove)

const newPara = document.createElement("p");
newPara.textContent = "this is a new paragraph";
const container = document.getElementById("container");
container.appendChild(newPara);

element.setAttribute("src", "new-image.png");
element.getAttribute("src");
*/


let selectElem = document.getElementById('webdevlist');
let h2 = document.querySelectorAll('h2');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    h2.forEach(i => {
        i.style.color = 'black';
    });
    document.getElementById(codeValue).style.color = 'red';
})


const image = document.querySelector('img');
image.setAttribute('src', 'images/HJC.png');
image.setAttribute('alt', 'Cool logos 2.0!');

//document.body.className = 'blue';
document.body.style.backgroundColor = 'lightblue';