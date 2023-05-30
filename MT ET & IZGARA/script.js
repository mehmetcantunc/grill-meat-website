// let left = document.getElementsByClassName("bi-caret-left-fill");
// let right = document.getElementsByClassName("bi-caret-right-fill");
// let cards = document.getElementsByClassName("cards")[0];

// left.addEventListener('click', ()=> {
//     cards.scrollLeft -= 140;
// });
// right.addEventListener('click', ()=> {
//     cards.scrollLeft += 140;
// });

// let poster = document.getElementById('poster');
// let title = document.getElementById('title');
// let price = document.getElementById('price');

// Array.from(document.getElementsByClassName('card')).forEach(ele.addEventListener)('click,'()=>{
//     poster.src = ele.getElementsByTagName('img')[0].src
// })

let left = document.getElementsByClassName("bi-caret-left-fill")[0];
let right = document.getElementsByClassName("bi-caret-right-fill")[0];
let cards = document.getElementsByClassName("cards")[0];

left.addEventListener('click', ()=> {
    cards.scrollLeft -= 140;
});
right.addEventListener('click', ()=> {
    cards.scrollLeft += 140;
});

let poster = document.getElementById('poster');
let title = document.getElementById('title');
let price = document.getElementById('price');

Array.from(document.getElementsByClassName('card')).forEach(ele => 
  ele.addEventListener('click', () => {
    poster.src = ele.getElementsByTagName('img')[0].src
  })
)
