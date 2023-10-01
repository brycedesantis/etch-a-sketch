const container = document.querySelector('#container')

const center = document.createElement('div')

for (let i = 0; i < 256; i++){
    const square = document.createElement('div')
    square.classList.add('grid')
    square.addEventListener('mouseover', (elem) => {
        elem.target.style.backgroundColor = 'black'
    })
    container.appendChild(square)
}

function removeAllChildNodes(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

const resizeBtn = document.querySelector('#resize')

resizeBtn.addEventListener('click', () => {
    let val = parseInt(prompt('How many squares per side would you like?', "16"))
    if (val > 100) {
        val = 100
        alert("Value too large. Setting value to 100.")
    }
    removeAllChildNodes(container)
    container.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr)`)
    for (let i = 0; i < val*val; i++){
        const square = document.createElement('div')
        square.classList.add('grid')
        square.addEventListener('mouseover', (elem) => {
            elem.target.style.backgroundColor = 'black'
        })
        container.appendChild(square)
    }
})

const clear = document.querySelector("#clear")

clear.addEventListener('click', () => {
    let squares = document.querySelectorAll('.grid')
    squares.forEach(square => {
        square.style.backgroundColor = 'white'
    })
})

function randomColor() {
    return Math.floor(Math.random() * 255)
}

const rgb = document.querySelector('#rgb')

rgb.addEventListener('click', () => {
    let squares = document.querySelectorAll('.grid')
    squares.forEach(square => {
        square.addEventListener('mouseover', (elem) => {
            elem.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
        })
    })
})

const blackBtn = document.querySelector("#black")

blackBtn.addEventListener('click', () => {
    let squares = document.querySelectorAll('.grid')
    squares.forEach(square => {
        square.addEventListener('mouseover', (elem) => {
            elem.target.style.backgroundColor = `black`
        })
    })
})