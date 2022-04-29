import {update as UpdateSnake , display as displaySnake, Speed,serpentBody, OnSerpent} from "./snake.js"

import { UpdateFruit , draw as drawFood,fruit } from "./fruit.js"
const plateauJeu = document.getElementById('plateau')
let Time = 0
let fruitO = false
let gameOver
let audio = new Audio("./static/ShrekMusic.mp3")
export function main(temps){
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.location = '/'
          }
          return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (temps - Time) / 1000
    

    if(secondsSinceLastRender < 1/Speed){
        
    }else{
       
        Time = temps
        update()
        display()

        
    }
}
let onePlayer = document.getElementById("onePlayer")
onePlayer.onclick = function() { menu.style.display='none'}

let twoPlayers = document.getElementById("twoPlayers")
twoPlayers.onclick = function() { 
    //ajouter le deuxieme serpent
    menu.style.display='none'}

window.requestAnimationFrame(main)
audio.play()


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