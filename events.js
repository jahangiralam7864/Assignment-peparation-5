console.log('jahangir alam joy');
 const student = {name: 'jahangir alam',age : 23, height : '5.7inc'}
 console.log(document.body);

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
