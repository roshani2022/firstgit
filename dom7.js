// Manipulate the dom

//parent node
var itemlist = document.querySelector('#items');
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor="green";
//console.log( itemlist.parentNode.parentNode.parentNode)

//parent element
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor="green";
console.log( itemlist.parentNode.parentNode.parentNode)

//child node
//console.log(itemlist.childNodes)
console.log(itemlist.children)
console.log(itemlist.children[1])
itemlist.children[1].style.backgroundColor="yellow";

//firstchild
console.log(itemlist.firstChild)
//firsrelementchild
console.log(itemlist.firstElementChild)
itemlist.firstElementChild.textContent='Hello 1'

//lastchild
console.log(itemlist.lastChild)
//lastelementchild
console.log(itemlist.lastElementChild)
itemlist.lastElementChild.textContent='Hello 1'

//nextsibling
console.log(itemlist.nextSibling)
//nextelementsibling
console.log(itemlist.nextElementSibling)

//previousSibling
console.log(itemlist.previousSibling)
//previousElementSibling
console.log(itemlist.previousElementSibling)
itemlist.previousElementSibling.style.backgroundColor='green'

// create element
var newDiv = document.createElement('div')
//console.log(newDiv)

// add class
newDiv.className="Hello";

//add id
newDiv.id="Hello1";

//add atr
newDiv.setAttribute('title' , 'hello div')

//console.log(newDiv)

// create a text node
var newDivText = document.createTextNode('Hello Word')

// text to div
newDiv.appendChild(newDivText)

//var container = document.querySelector('header.container');
//var h1 = document.querySelector('header h1')
//console.log(newDiv)

//newDiv.style.fontSize='30px';
//container.insertBefore(newDiv,h1);

var parentNode = document.getElementById('header-title');
parentNode.innerHTML='HEllo world ' + parentNode.innerHTML;

var parentNode1 = document.getElementById('items');
parentNode1.innerHTML='<li>HEllo world</li> ' + parentNode1.innerHTML;


