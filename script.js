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
