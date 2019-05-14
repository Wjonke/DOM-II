// Your code goes here

let stopNav = document.getElementById('nav1')

stopNav.addEventListener("mousedown", function(event) {
    document.body.style.backgroundColor = "purple"
    document.body.style.color = "white"
 });
 stopNav.addEventListener("mouseup", function(event) {
    document.body.style.backgroundColor = "green"
    document.body.style.color = "white"
 });
 stopNav.addEventListener("mouseover", function(event) {
    document.body.style.backgroundColor = "orange"
    document.body.style.color = "white"
 });

 let resetColor = document.getElementById('mainContent')
 resetColor.addEventListener("click", function(event) {
    document.body.style.backgroundColor = ""
    document.body.style.color = ""
 });


//////////////////////////////////////////////////////////////
let theWholeShebang = document
theWholeShebang.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('No cheating, get your own content!!!')
  })

theWholeShebang.addEventListener('dblclick', function(event) {
    event.preventDefault();
    alert('Nope!!!')
  })






 // This will put the site into a deathspin!!! it works...but dont use lol.

//   theWholeShebang.addEventListener('drag', function(event) {
//     event.preventDefault();
//     alert('No cheating, get your own content!!!')
//   }) 

////////////////////////////////////////////////////////////////////
const funInTheSun = document.querySelector('.sunny')
//console.log(funInTheSun)
funInTheSun.addEventListener('click', function(event) {
  console.log('Bring sun screen!!!')
})
funInTheSun.addEventListener(`dblclick`, function(event) {
    alert('This is 2019, no double clicking websites Gramps...')
  })
  let sunClick = document.querySelector(".sunny");
    sunClick.addEventListener("click", event => {
        document.body.style.backgroundColor = "yellow";
    })
////////////////////////////////////////////////////////////////////

const mountainExcursion = document.querySelector('.mountain')
//console.log(mountainExcursion)
mountainExcursion.addEventListener('click', function(event) {
    console.log("If you hear banjo's, run!!!!!!")
  })
  mountainExcursion.addEventListener(`dblclick`, function(event) {
    alert('This is 2019, no double clicking websites Gramps...')
  })
  let mountainClick = document.querySelector(".mountain");
  mountainClick.addEventListener("click", event => {
      document.body.style.backgroundColor = "forestgreen";
  })


////////////////////////////////////////////////////////////////////

const islandGetaway = document.querySelector('.island')
//console.log(islandGetaway)
islandGetaway.addEventListener('click', function(event) {
    console.log("Don't forget Wilson!!!")
  })
  islandGetaway.addEventListener(`dblclick`, function(event) {
    alert('This is 2019, no double clicking websites Gramps...')
  })
  let islandClick = document.querySelector(".island");
  islandClick.addEventListener("click", event => {
      document.body.style.backgroundColor = "skyblue";
  })