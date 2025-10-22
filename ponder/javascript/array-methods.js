const steps = ['one', 'two', 'three', 'four']

steps.forEach(function(i){
    console.log(i);
});

let myList = document.querySelector('#mylist');

const stepsHtml = steps.map(listTemplate);

function listTemplate(item){
    return `<li>${item}</li>`
}

let grades = ['A', 'B', 'C'];
let points;
let gpaPoints = grades.map(convert);

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

console.log(gpaPoints);

let totalPoints = gpaPoints.reduce(function(total,item){
    return total + item;
});
console.log(totalPoints);

let gpaAverage = totalPoints / gpaPoints.length;

console.log(gpaAverage);



const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter(function(word){
    return word.length < 6;
});

console.log(shortWords)


const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
let container = document.querySelector('#studentContainer')
students.forEach(function(item){
    let name = document.createElement('div');

    let html = `
    <span>${item.first}</span>
    <span>${item.last}</span>
    `;
    name.innerHTML = html;

    container.append(name);
});