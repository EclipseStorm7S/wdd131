let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#333'
        document.body.style.color = '#fff'
        document.querySelector('#subtitle').style.color = '#68b5ff'
        logo.setAttribute("src","images/byui-logo-white.png")
    } else {
        document.body.style.backgroundColor = '#fff'
        document.body.style.color = '#000'
        document.querySelector('#subtitle').style.color = '#0855ac'
        logo.setAttribute("src","images/byui-logo-blue.webp")
    }
}           
                    