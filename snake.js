import {getInputDir} from './input.js'


export const Speed = 15
let CorpsSerpent = 0
export const serpentBody = [
    { x : 10, y : 10},
]


export function update(){
    addCorps()
    const inputD = getInputDir()
    for(let i = serpentBody.length - 2; i>=0;i--){
        serpentBody[i+1] = {...serpentBody[i]}
    }
    console.log(serpentBody[0].x)
    serpentBody[0].x +=inputD.x
    serpentBody[0].y +=inputD.y
    
}

export function display(plateau){
    serpentBody.forEach(segment => {
        const snakePart = document.createElement('div')
        snakePart.style.gridRowStart = segment.y
        snakePart.style.gridColumnStart = segment.x
        snakePart.classList.add('snake')
        plateau.appendChild(snakePart)

    })
}

export function OnSerpentHead(pos){
if (serpentBody[0].x == pos.x && serpentBody[0].y == pos.y) {
    return true
}
return false
}

export function OnSerpent(position, { ignoreTete = false } = {}) {
    return serpentBody.some((Corps, index) => {
      if (ignoreTete && index === 0) return false
      return PositionEgale(Corps, position)
    })
}


export function ExpandSerpent(amount){
    CorpsSerpent += amount
}

function addCorps(){
    for (let i = 0; i < CorpsSerpent; i++) {
        serpentBody.push({...serpentBody[serpentBody - 1]})
    }
    CorpsSerpent = 0
}

function PositionEgale(pos1,pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}