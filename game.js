import {update as UpdateSnake , display as displaySnake, speed,serpentBody, OnSerpent, update2, display2} from "./snake.js"
import { gameStart,setGameStart,index } from "./input.js"
import { UpdateFruit ,score, draw as drawFood,fruit } from "./fruit.js"
const plateauJeu = document.getElementById('plateau')
let Time = 0
export let COOP = false
export let modify = false
export let modify2 = false
let phrase 
let phraseType = [false,false,false,false]
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
    
    modifyCom()
    modifyCom2()

    
    if(secondsSinceLastRender < 1/speed){
        
    }else{
       
        Time = temps
        update()
        display()

        
    }
}
let onePlayer = document.getElementById("onePlayer")
onePlayer.onclick = function() { 
    setGameStart(true)
    menu.style.display='none'
    menu2.style.display='none'}

let twoPlayers = document.getElementById("twoPlayers")
twoPlayers.onclick = function() { 
    setGameStart(true)
    COOP = true
    menu.style.display='none'
    menu2.style.display='none'}

let touches = document.getElementById("touches")
touches.onclick = function() { 
    twoPlayers.style.display = 'none'
    onePlayer.style.display = 'none'
    touches.style.display = 'none'
    touches2.style.display = 'none'
    menu.style.display = 'none'
    modify = true
    
    }

    let touches2 = document.getElementById("touches2")
touches2.onclick = function() { 
    twoPlayers.style.display = 'none'
    onePlayer.style.display = 'none'
    touches.style.display = 'none'
    touches2.style.display = 'none'
    menu.style.display = 'none'
    modify2 = true
    
    }

window.requestAnimationFrame(main)
audio.play()


function update(){
    
    UpdateFruit()
    UpdateSnake()
    update2()
    gameOver = deathOnSerpent()
    
}
function display(){
    plateauJeu.innerHTML = ''
    document.getElementById("score").innerHTML= score
    if (COOP) {
        display2(plateauJeu)
    }
    displaySnake(plateauJeu)
    drawFood(plateauJeu)
}



function deathOnSerpent(){
    return OnSerpent(serpentBody[0],{ignoreTete: true})
}

function modifyCom(){
    if (!gameStart  && modify) {
        
        if (phraseType[0] ===false) {
            phrase = 'Entrer Haut'
            if (index === 1) {
                phraseType[0] = true
            }
        }else if (phraseType[1] ===false) {
            phrase = 'Entrer Bas'
            if (index === 2) {
                phraseType[1] = true
            }
        }else if (phraseType[2] ===false) {
            phrase = 'Entrer Gauche'
            if (index === 3) {
                phraseType[2] = true
            }
        }else if (phraseType[3] ===false) {
            phrase = 'Entrer Droite'
            if (index === 0) {
                phraseType[0] = false
                phraseType[1] = false
                phraseType[2] = false
                modify = false
                menu.style.display = 'flex'
                twoPlayers.style.display = 'flex'
                onePlayer.style.display = 'flex'
                touches.style.display = 'flex'
                touches2.style.display = 'flex'
                
            }
        }
        document.getElementById("phrase").innerHTML = phrase

    }
}

function modifyCom2(){
    if (!gameStart  && modify2) {
        
        if (phraseType[0] ===false) {
            phrase = 'Entrer Haut'
            if (index === 1) {
                phraseType[0] = true
            }
        }else if (phraseType[1] ===false) {
            phrase = 'Entrer Bas'
            if (index === 2) {
                phraseType[1] = true
            }
        }else if (phraseType[2] ===false) {
            phrase = 'Entrer Gauche'
            if (index === 3) {
                phraseType[2] = true
            }
        }else if (phraseType[3] ===false) {
            phrase = 'Entrer Droite'
            if (index === 0) {
                
                phraseType[0] = false
                phraseType[1] = false
                phraseType[2] = false
                modify2 = false
                twoPlayers.style.display = 'flex'
                onePlayer.style.display = 'flex'
                touches.style.display = 'flex'
                touches2.style.display = 'flex'
                menu.style.display = 'flex'
               
            }
        }
        document.getElementById("phrase").innerHTML = phrase

    }
}