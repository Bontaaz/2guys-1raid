import {COOP,modify,modify2} from './game.js'



let inputDirection  = {x: 0,y: 0}
let lastinputDirection  = {x: 0,y: 0}
let inputReceive = []
export let index = 0
export let gameStart = false


    window.addEventListener('keydown', event => {
       if (gameStart) {
        switch(event.key){ // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
            case inputReceive[3] || "ArrowRight" :
                if (lastinputDirection.x !== 0) {
                    break
                }
                inputDirection = {x: 1,y: 0}
                break
            case  inputReceive[2] ||"ArrowLeft" :
                if (lastinputDirection.x !== 0) {
                    break
                }
                inputDirection = {x: -1,y: 0}
                break
            case  inputReceive[0] ||"ArrowUp" :
                if (lastinputDirection.y !== 0) {
                    break
                }
                inputDirection = {x: 0,y: -1}
                break
            case inputReceive[1] ||"ArrowDown" :
                if (lastinputDirection.y !== 0) {
                    break
                }
                inputDirection = {x: 0,y: 1}
                break
            }
        }
       }
        
    )



export function getInputDir(){
    lastinputDirection = inputDirection
    return inputDirection
}


let inputDirection2  = {x: 0,y: 0}
let lastinputDirection2  = {x: 0,y: 0}
export let inputReceive2 = []


window.addEventListener('keydown', event => {

    if (gameStart && COOP) {
        switch(event.key){ // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
            case inputReceive2[3] ||"d" :
                if (lastinputDirection2.x !== 0) {
                    break
                }
                inputDirection2 = {x: 1,y: 0}
                break
            case inputReceive2[2] || "a" :
                if (lastinputDirection2.x !== 0) {
                    break
                }
                inputDirection2 = {x: -1,y: 0}
                break
            case  inputReceive2[0] ||"w" :
                if (lastinputDirection2.y !== 0) {
                    break
                }
                inputDirection2 = {x: 0,y: -1}
                break
            case inputReceive2[1] ||"s" :
                if (lastinputDirection2.y !== 0) {
                    break
                }
                inputDirection2 = {x: 0,y: 1}
                break
            }
        }
    }
    
)

window.addEventListener('keydown' , event =>{
    if (modify) {
        inputReceive[index] = event.key
        console.log(inputReceive[index])
        index++
        if(index === 4){
            index = 0
        }
    }
})

window.addEventListener('keydown' , event =>{
    if (modify2) {
        inputReceive2[index] = event.key
        console.log(inputReceive2[index])
        index++
        if(index === 4){
            index = 0
        }
    }
})

export function getInputDir2(){
    lastinputDirection2 = inputDirection2
    return inputDirection2
}


export function setGameStart(value){
    gameStart = value
}