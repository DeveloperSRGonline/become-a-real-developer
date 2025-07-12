// 16 discussion questions 

// what is dom? how does it represent the htmo 
// - basically ye tree jaisa structure hota hai , html mein likhi gai saari chije - jo saari chije jo hum html mein banate hai vo notes hote hai - aur ye basically tay karta hai ki konsa element kaha par hai
// - as a tree - and everything is node
// Name the types of nodes in the Dom tree.


// what is difference between element node and text node 
// maan lo ki aap ne p tag banaya - use ham bolenge element node and uske andar aap ne kuchh likha toh use ham text node ya uska child node bolenge 
// element node - actual html tag hota hai and text node uske andar ka content hota hai
// aisa ho sakta hai ki element node ka children node ho let say b tag
// lekin text node ka koi bhi children node nahi ho sakta 


// Inspect the following html and in the browser and identify each node 
// div 
// Hello span World 
// yaha div - ye element node hai - Hello - ye text node hai - span ye element node hai - and World ye ek element node hai


// what is the difference  between queryselector and getElemntById 
// getElementById - sirf id se select karta hai 
// querySelector - multipurpose hai - ya bol sakte ho ki universal hai 
// document.getElementById('apple') - ismein #nahi lagana padta 
// document.querySelector('#apple') - ismein id jab select karte ho tab # laganaa padta hai - yane pe batana padta hai ki app kya select kar rahe ho 

// what does getElementByClassName return?Is it an array?   
// not an array but a similar looking structure like an array 
// it always returns a htmlCollection


// use querySelectorAll to select all buttons with class ".buy-now"
// let buynow = document.querySelectorAll('.buy-now')
// console.log(buynow);


// select the heading of of page by id and change its text to "Welcome to sheryians!"
// 1:07
// let heading = document.querySelector("#heading");
// console.dir(heading);
// heading.textContent = "Welcome to Sheryians!";

//select all li element and print their text using loop
// one way  
// let all_li = document.querySelectorAll('li')
// all_li.forEach(function(val){
//     console.log(val.textContent);
// })

// another way
// let all_li = document.querySelectorAll('li')
// for(let i =  0;i<all_li.length;i++){
//     console.log(all_li[i].textContent);
// }

// what's the difference between innerText,textContent,and innerHtml?
// innerText: Returns the visible text of an element, considering CSS styles.
// textContent: Returns the entire text content, including hidden elements, without HTML tags.
// innerHTML: Returns or sets the HTML markup (tags + text) inside an element.


// when should you use textContent instead of innerText?
// textContent is faster than innerText?
// textContent - hidden ho ya na ho sab ko la kar dega 
// innerText - ye vo content hi nikalega jo visible hai 
// it is recommended to use textContent instead of innetText 


// select a paragraph and replace its  content with :
{/* <b>updated</b> by javascript */}
// let para = document.querySelector('p')
// para.innerHTML = '<i>updated</i> by javascript'


// how do you get src of an image 
// let img = document.querySelector('img')
// let img_src = img.getAttribute('src')
// console.log(img_src);


// what does setAttribut do?
// document.querySelector('img').setAttribute('src','https://images.unsplash.com/photo-1751076547687-a7f17a14cd38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D')


// select a link and update its href
// let a = document.querySelector('a')
// a.href = 'http://www.sheryians.com'

// add a title attribute to a div dynamically.
// let div = document.querySelector('div')
// div.setAttribute('title','This is title using setAttribute')
// div.title = 'This is title from js'


// remove the disabled attribute form the button
// let btn = document.querySelector('button')
// btn.removeAttribute('disabled')


// remove disabled attribute of a button 
// let btn = document.querySelector('button')
// btn.removeAttribute('disabled')


// what does createElement do? and what it does?
// let h1 = document.createElement('h1')
// console.log(h1);
// ek html node return karke deta hai


// what's a difference between appendChild() and prepend()
// append - hamesha last mein element ko add karta hai 
// prepend - hamesha suruvat mein element ko add karta hai
// agar aap ke pass 4 element hai and aap ne append use kiya hai toh element 4 element ke baad add karega and agar ,  aap ne prepend use kiya toh un 4 element ke pahele us element ka add karega and 4 element ek ek order aage khisak jayenge

// can you remove an element using removeChild()
// document.querySelector('div').removeChild(elementNode)


// create an list item <li> New Task<li> and add it to the end of ul

// let ul = document.querySelector('ul')
// let li = document.createElement('li')
// li.textContent = 'New Task'
// ul.appendChild(li)


// create a new image element wiht placeholder source and add it at the top of a div.
// let img = document.createElement('img');
// img.setAttribute('src','https://tse2.mm.bing.net/th/id/OIP.BD9cf1eaFBIVQLMXThVtLgHaE6?pid=Api&P=0&h=180')

// img.classList.add('Placeholder')

// let div = document.querySelector('div')
// div.prepend(img)

// select the first item in the list and delete it using the document object model
// let ul = document.querySelector('ul')
// let li = document.querySelector('li')
// ul.removeChild(li)

// how do we change background color of an element?
// element.style.backgroundColor = "colorNameHere"


//what is the difference between .classList.add() and  .classList.toggle()?
// .classList.add() - ye class add karta hai agar already add hogi toh koi farak nahi padega 
// .classList.toggle() - ye invert kar deta hai agar class add hai to remove and agar class nahi hai toh add kar dega 


// add a highlight class to every even item of a list 
// let li = document.querySelectorAll('ul li:nth-child(2n)')
// console.dir(li);
// li.forEach(function(elem){
//     elem.classList.add('highlight')
// })

// toggle a class active on a button when clicked (Hint:use.classList.toggle)
// we see this after some time 


//set the font size of all <p> elements to 18px using .style
// let p = document.querySelectorAll('p')
// console.dir(p);
// p.forEach(function(elem){
//     elem.style.fontSize = '18px'
// })