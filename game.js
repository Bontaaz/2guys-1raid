import {update as UpdateSnake , display as displaySnake, Speed,serpentBody, OnSerpent} from "./snake.js"
import { UpdateFruit , draw as drawFood,fruit } from "./fruit.js"
const plateauJeu = document.getElementById('plateau')
let Time = 0
let fruitO = false
let gameOver
export function main(temps){
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.location = '/'
          }
          return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (temps - Time) / 1000
    

    if(secondsSinceLastRender < 1/5){
        
    }else{
       
        Time = temps
        update()
        display()
        
    }
}
window.requestAnimationFrame(main)

function update(){
    UpdateFruit()
    UpdateSnake()
    gameOver = deathOutGrid() || deathOnSerpent()
    console.log(gameOver)
}
function display(){
    plateauJeu.innerHTML = ''
    displaySnake(plateauJeu)
    drawFood(plateauJeu)
}

function deathOutGrid(){
        return (
            serpentBody[0].x < 1 || serpentBody[0].x >= 30 ||
            serpentBody[0].y < 1 || serpentBody[0].y >= 30
          )
}

function deathOnSerpent(){
    return OnSerpent(serpentBody[0],{ignoreTete: true})
}