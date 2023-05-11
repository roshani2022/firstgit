// query selector
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px black'

//var input = document.querySelector('input');
//input.value = 'Hello Word';

//var submit = document.querySelector('input[type="submit"]');
//submit.value = "send";

//var item = document.querySelector('.list-group-item');
//item.style.color = 'red'

//var lastitem = document.querySelector('.list-group-item:last-child');
//lastitem.style.color = 'blue'

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor = 'green'

var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.visibility = "hidden";

//query selector all

//var titles = document.querySelectorAll('.title');

//console.log(titles);
//titles[0].textContent='Hello';

var list = document.querySelectorAll('.list-group-item');
list[1].style.color='green'

var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
 odd[i].style.backgroundColor = 'green'
   // even[i].style.backgroundColor = 'red'
}


