// Selecting Queries and storing them in variables
const btnEl = document.querySelector('button')
const body = document.querySelector('body')

// setting a default background colour
body.style.backgroundColor = 'white'

// creating an array of colours
const colourList = [
  'purple',
  'blue',
  'red',
  'green',
  'orange',
  'yellow',
]

// function to randomly select a colour from the array and change the background colour
const buttonClick = () => {
  let choice = colourList[Math.floor(Math.random() * colourList.length)];
  body.style.backgroundColor = choice;
}

// adding an event listener
btnEl.addEventListener('click', buttonClick)

