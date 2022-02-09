console.log('jahangir alam joy');
 const student = {name: 'jahangir alam',age : 23, height : '5.7inc'}
 console.log(document.body);

 // gerElementById add

 const blogTitle = document.getElementsByTagName('h3');
 for (const h3 of blogTitle) {
    console.log(h3.innerText);
 }

const blogDetails = document.getElementsByTagName('p');
for (const p of blogDetails){
    console.log(p);
}

const nameTitle = document.getElementById('names')
names.style.textAlign = 'center'; 

const blog = document.getElementById('blogs')
blogs.innerText = 'md jahangir alam';
blogs.style.backgroundColor ='red'
blogs.style.padding = '10px'



// openChild open and style

//create the new element 
const li = document.createElement('li');
li.innerText = 'blog-5';  // akhon koi add korbo seite add korbo
const ul = document.getElementById('blog-list');
ul.appendChild(li);// new child add infomation


// js diye blog and contant add 
const article = document.createElement('article'); 
article.classList.add('border');
const h3 = document.createElement('h3');
h3.innerText = 'my test blog-5';
const p = document.createElement('p');
p.innerText = 'Iste quia ut sint perferendis atque rem molestias nulla explicabo, amet illum nesciunt ad. Natus error, vero porro odit eaque excepturi mollitia officiis nihil ab sint blanditiis aliquid magnam quaerat.';
article.appendChild(h3);
article.appendChild(p);
const blogSection = document.getElementById('menubar');
blogSection.appendChild(article);


// getElementsById add
const borders = document.getElementsByClassName('border');
for(const border of borders){
    console.log(border);
    border.style.border = '3px solid red'
    border.style.borderRadius = '10px'
    border.style.margin = '10px'
    border.style.padding = '10px'
}