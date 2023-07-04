const btn = document.querySelector('#button');
const wrapper = document.querySelector('#wrapper');
const hexcolor = document.querySelector('#hexcode');

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function randomHexValue() {
    let hexColor = "#";
    for (let i=1; i<=6; i++){
        let randomIndex = Math.floor(Math.random()*16);
        hexColor += hex[randomIndex]
    }
    wrapper.style.backgroundColor = hexColor;
    hexcolor.innerHTML = hexColor; 
}

btn.addEventListener('click', randomHexValue);