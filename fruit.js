import {OnSerpentHead,ExpandSerpent} from "./snake.js"

export let fruit = getRandomFoodPosition()
const AJOUT_CORPS = 2

export function UpdateFruit(){
    if (OnSerpentHead(fruit)) {
        ExpandSerpent(AJOUT_CORPS)
    fruit = getRandomFoodPosition()
    }  
}

export function draw(plateau){
        const fruits = document.createElement('div')
        const ane = document.createElement('img')
        ane.setAttribute("src", "static/ane.png")
        fruits.style.gridRowStart = fruit.y
        fruits.style.gridColumnStart = fruit.x
        fruits.classList.add('food')
        fruits.setAttribute("id","food")
        fruits.appendChild(ane)
        plateau.appendChild(fruits)
}

function getRandomFoodPosition(){
    return ({ x:Math.ceil(Math.random() * 30),y:Math.ceil(Math.random() * 30)})
}