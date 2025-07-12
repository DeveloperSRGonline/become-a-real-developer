// most important section
// Events and events handling
// browser pe koi bhi harkat karo even raise ho gaya
// kuchh screen par ho and aap ko reaction dena ho toh us waqt aap event handle karna aana chahiye

// event matlab koi action huva
// event listner matlab hai aap koi action ka reaction diya

// let p = document.querySelector('p') // select the paragraph first

//relise what will happen to paragraph click , doubleclick or anything else

// p.addEventListener('click',function(){
//     p.style.color = 'greenYellow'
// })
// paragraph pe click karne par paragraph ka css mein color change kar do green

// function dblclick(){
//     p.style.color = 'brown'
// }
// p.addEventListener('dblclick',dblclick)

// syntax of this
// element.addEventListner('event name',function(){})
// p.removeEventListener('dblclick',dblclick)

// let p = document.querySelector('p')
// p.addEventListener('click',function(){
//     p.style.color = 'orange'
// })

// let input = document.querySelector('input')
// input.addEventListener('input',function(data){
//      console.log(data.target.value);
// })

// let input = document.querySelector('input')
// input.addEventListener('input',function(dets){// here dets means details
//     if(dets.data !== null){
//         console.log(dets.data);
//     }
// })

// type karne par data jo hai vo milta hai and jab backspace karte hai tab null milta hai

//   let input = document.querySelector('input')
//   input.addEventListener('input',function(dets){
//     if(dets.data !== null){
//         console.log(dets.data);
//     }
//   })

// change event tab chalta hai koi input ,select , ye textarea mein koi changes karta hai

// let h3 = document.querySelector('h3')
// let sel = document.querySelector('select')
// sel.addEventListener('change',function(dets){
//     h3.textContent = `${dets.target.value} is selected`
// })

// practice by own
// let h3 = document.querySelector('h3')
// let  sel = document.querySelector('select')
// sel.addEventListener('change',function(dets){
//     h3.textContent = `${dets.target.value} device selected`
// })

// ab hame ye chahiya ki jo hum type kare vo screen par dikh jaye
// approch

// let h1 = document.querySelector('h1')

// window.addEventListener('keydown',function(dets){
//     if(dets.key === ' '){
//         h1.textContent = 'SPC'
//     }else{
//         h1.textContent = `${dets.key}`
//     }
// h1.textContent = `${dets.key}`
// })

// let file = document.querySelector("#file");

// let btn = document.querySelector("#btn");
// btn.addEventListener("click", function () {
//   file.click();
// });

// file.addEventListener("change", function (dets) {
//   // console.log(dets.target.files[0].name);
//   if (dets.target.files) {
//     const file = dets.target.files[0]
//     if(file){
//         btn.textContent = file.name
//     }

//   }
// });

// forms se start karna ok
