
const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border='2px solid green';
    section.style.marginBottom='5px';
    section.style.borderRadius='15px';
    section.style.backgroundColor='lightgray';
}

// const fruitsContainer=document.getElementById('Fruits-container');
// fruitsContainer.classList.add('custom-css');
// fruitsContainer.classList.remove('custom-css');
/*
Dynamically list value added

const fruitsContainer=document.querySelector('#Fruits-container ul');
const fruitsContainer=document.querySelector('#Fruits-container ul');
const li=document.createElement('li')
li.innerText='dynamic li'
fruitsContainer.appendChild(li)

*/