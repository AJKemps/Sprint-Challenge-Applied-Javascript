/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselMaker() {
  const carousel = document.createElement('div')
    carousel.classList.add('carousel')

  const leftBtn = document.createElement('div')
    leftBtn.classList.add('left-button')

  const imgOne = document.createElement('img')
    imgOne.src = ""


  const imgTwo = document.createElement('img')
    imgTwo.src = "./assets/carousel/computer.jpeg"

  const imgThree = document.createElement('img')
    imgThree.src = "./assets/carousel/trees.jpeg"

  const imgFour = document.createElement('img')
    imgFour.src = "./assets/carousel/turntable.jpeg"

  const rightBtn = document.createElement('div')
    rightBtn.classList.add('right-button')

  carousel.append(leftBtn, imgOne, imgTwo, imgThree, imgFour, rightBtn)
  
  console.log(carousel)

  return carousel
}

const carouselContainer = document.querySelector('.carousel-container')

console.log(carouselContainer)

carouselContainer.append(carouselMaker())

