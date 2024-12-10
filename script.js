'use strict'

const board = document.querySelector('#board')
const colors = ['#e74c3c', '#8e44ad', '#3498db', 'e67e22', '#2eec71']
/* const colors = ['#859737', '#d0db9d', '#085436', '#a6ac5a', '#b4b46c', '#356c57'] */
const squaresNumber = 500
let color = ''


const setColor = (element) => {
    color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = (element) => {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}

for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })
    board.append(square)
}


