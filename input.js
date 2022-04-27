let inputDirection  = {x: 0,y: 0}
let lastinputDirection  = {x: 0,y: 0}

window.addEventListener('keydown', event => {
    switch(event.key){ // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    case "ArrowRight" :
        if (lastinputDirection.x !== 0) {
            break
        }
        inputDirection = {x: 1,y: 0}
        break
    case  "ArrowLeft" :
        if (lastinputDirection.x !== 0) {
            break
        }
        inputDirection = {x: -1,y: 0}
        break
    case  "ArrowUp" :
        if (lastinputDirection.y !== 0) {
            break
        }
        inputDirection = {x: 0,y: -1}
        break
    case "ArrowDown" :
        if (lastinputDirection.y !== 0) {
            break
        }
        inputDirection = {x: 0,y: 1}
        break
    }
}
)

export function getInputDir(){
    lastinputDirection = inputDirection
    return inputDirection
}