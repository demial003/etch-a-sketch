const btns = document.querySelector('#buttons')
let grid = false
let color;

const colorwheel = document.getElementById('colorwheel')
colorwheel.addEventListener('input', () => {
    color = colorwheel.value
})

const btn1 = document.createElement('button')
btn1.classList.add('settings')
btn1.textContent = "Change Size"
btns.appendChild(btn1)
let size;
btn1.addEventListener('click', () => {
    size = Number(prompt('enter a size: (max 100)'))
    if(size > 100) size = 100
    if(grid){
        removeGrid()
    }
    createGrid(size)
    console.log(`${size} x ${size}`)
    console.log(grid)
})


const btn2 = document.createElement('button')
btn2.classList.add('settings')
btn2.textContent = "Color Mode"
btns.appendChild(btn2)

btn2.addEventListener('click', () => {
    draw(color)
})

const btn4 = document.createElement('button')
btn4.classList.add('settings')
btn4.textContent = "Rainbow Mode"
btns.appendChild(btn4)

btn4.addEventListener('click', () => {
    drawRainbow()
})

const btn3 = document.createElement('button')
btn3.classList.add('settings')
btn3.textContent = "Eraser Mode"
btns.appendChild(btn3)

btn3.addEventListener('click', () => {
    erase()
})



const btn5 = document.createElement('button')
btn5.classList.add('settings')
btn5.textContent = "Clear"
btns.appendChild(btn5)

btn5.addEventListener('click', () => {
    const boxes = document.querySelectorAll('div.boxes')
    boxes.forEach(box => {
        box.style.backgroundColor = 'black'
    })
})



function createGrid(size){
    const container = document.querySelector('#container')
    for(let i = 0; i < size; i++){
        let col = document.createElement('div')
        col.className = 'col'
        for(let j = 0; j < size; j++){
            let gridbox = document.createElement('div')
            gridbox.className = 'boxes'
            col.appendChild(gridbox)
        }
        container.appendChild(col)
    }
    grid = true
}


function removeGrid(){
    const cols = document.querySelectorAll('div.col')
    const boxes = document.querySelectorAll('div.boxes')
    boxes.forEach(box => box.remove())
    cols.forEach(col => col.remove())
}

function draw(color){
    const boxes = document.querySelectorAll('div.boxes')
    boxes.forEach(box => {
    box.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = color
    })
});
}

function drawRainbow(){
    const boxes = document.querySelectorAll('div.boxes')
    boxes.forEach(box => {
    box.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = randomColor()
    })
});
}

function randomColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let newColor = `rgb(${r}, ${g}, ${b})`
    return newColor
    
}



function erase(){
    const boxes = document.querySelectorAll('div.boxes')
    boxes.forEach(box => {
    box.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = 'black'
    })
});
}


