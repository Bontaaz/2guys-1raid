import {update as updateSnake , display as displaySnake, Speed} from "./snake.js"
const plateauJeu = document.getElementById('plateau')
let lastRenderTime = 0

export function main(temps){
    const secondsSinceLastRender = (temps - lastRenderTime) /1000
    window.requestAnimationFrame(main)
    lastRenderTime = temps
    if(secondsSinceLastRender <1/Speed) return
    console.log(secondsSinceLastRender)
    update()
    display()

}
main()
function update(){
    updateSnake()
}
function display(){
    plateauJeu.innerHTML = ''
    displaySnake(plateauJeu)
}