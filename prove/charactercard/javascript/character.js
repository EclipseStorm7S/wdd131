const SlimeWizard = {
    name: "Toddriguez",
    class: "Slime Wizard",
    health: 20,
    maxhealth: 20,
    lvl: 1,
    image: "images/Toddyboy.png",
    imgalt: "Toddriguez the Slime Wizard",
    bgc: "white",
    txtc: "white"
}

const FireWolf = {
    name: "Philliam",
    class: "Fire Wolf",
    health: 70,
    maxhealth: 70,
    lvl: 3,
    image: "images/Phillma.png",
    imgalt: "Philliam the Fire Wolf",
    bgc: "white",
    txtc: "white"
}

const EvilSkeleton = {
    name: "Death",
    class: "Fear and Destruction Incarnate",
    health: 9999999,
    maxhealth: 9999999,
    lvl: 100,
    image: "images/Spooky.png",
    imgalt: "THERE IS NO ESCAPE",
    bgc: "black",
    txtc: "red"
}

const enemyList = [SlimeWizard, FireWolf, EvilSkeleton];
let enemyIndex = 0;

function attack(){
    let currentEnemy = enemyList[enemyIndex];
    currentEnemy.health -= 5;
    if (currentEnemy.health <= 0) {
        enemyIndex += 1;
        if (enemyIndex > enemyList.length) enemyIndex = 0;
        currentEnemy.health = currentEnemy.maxhealth;
        updateScreen(currentEnemy);
        alert(`You've defeated ${currentEnemy.name}! Next up is ${enemyList[enemyIndex].name}!`)
    }
    updateScreen(enemyList[enemyIndex]);
}
function levelUp(){
    let currentEnemy = enemyList[enemyIndex];
    currentEnemy.lvl += 1;
    updateScreen(enemyList[enemyIndex]);
}

function updateScreen(data) {
    document.querySelector("#characterImg").setAttribute('src', data.image);
    document.querySelector("#characterImg").setAttribute('alt', data.imgalt);
    document.querySelector("#characterName").innerHTML = data.name;
    document.querySelector("#class").innerHTML = "<strong>Class: </strong>" + data.class;
    document.querySelector("#hp").innerHTML = "<strong>Health: </strong>" + data.health;
    document.querySelector("#level").innerHTML = "<strong>Level: </strong>" + data.lvl;
    document.querySelector("body").style.backgroundColor = data.bgc;
    document.querySelector("body").style.color = data.txtc;
}

updateScreen(enemyList[enemyIndex]);
document.querySelector("#attack").addEventListener("click", attack);
document.querySelector("#lvlUp").addEventListener("click", levelUp);