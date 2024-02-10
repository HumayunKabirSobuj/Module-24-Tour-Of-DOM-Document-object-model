// add new new value on list item
//1 where to add
const fruitList = document.getElementById("Fruits-list");
//2 what to be added
const li = document.createElement("li");
li.innerText = 'lemon';
//3 add the child
fruitList.appendChild(li);

//add new section under main section

//1 where to add

const mainContainer = document.getElementById("main-container");

//2 what to be added

const section=document.createElement("section");
const h1=document.createElement("h1");
h1.innerText="my food list";
section.appendChild(h1);
const ul=document.createElement('ul');
const li1=document.createElement("li");
li1.innerText='biriyani';
ul.appendChild(li1);

const li2=document.createElement("li");
li2.innerText='Polao';
ul.appendChild(li2);

const li3=document.createElement("li");
li3.innerText='Semai';
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);

// set innerHTML directly

const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
<h1> My dress section</h1>
<ul>
<li>T shirt</li>
<li>Lungi</li>
<li> sando genji </li>

</ul>
`
mainContainer.appendChild(sectionDress);