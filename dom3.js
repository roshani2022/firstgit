//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
document.title = 123; ;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
//console.log(document.forms)
//console.log(document.links)
//console.log(document.images)
//console.log(document.header);
//console.log(document.getElementById('header-title'))
var headerTitle =  document.getElementById('header-title')
//console.log(headerTitle);
headerTitle.textContent='Hello'
//headerTitle.innerText='GoodBye'
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Hello</h3>'
var header = document.getElementById('main-header')
header.style.borderBottom ="solid 3px #000";
//var items = document.getElementsByClassName('list-group');
//console.log(items)
var additem = document.getElementsByTagName('Add')
var  title = document.getElementsByClassName('title');
title[0].style.color = 'green';
title[0].style.fontWeight= 'bold';
