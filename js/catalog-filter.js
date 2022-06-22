// let mains = [ ...document.querySelectorAll(".main") ];
// mains.forEach(main => {
//     let btn = main.querySelector(".but"),
//          text = main.querySelector(".text");
//      btn.addEventListener("click", () => text.classList.toggle("some-class"));
// });




// let links = document.querySelectorAll(".link");
// links.forEach(link => {
//     let btn = link.querySelector(".card__border");
//      btn.addEventListener("click", () => btn.classList.toggle("card__border--pink"));
// });

let cards =  document.querySelectorAll('.item')
console.log(cards)
cards.forEach(card=>{
  card.addEventListener('click', ()=> card.classList.toggle('card__border--active'))
})