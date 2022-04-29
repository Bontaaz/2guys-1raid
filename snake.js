import {getInputDir} from './input.js'


export let speed = 10
let CorpsSerpent = 0
export const serpentBody = [
     getRandomPosition(),
]


export function update(){
    addCorps()
    const inputD = getInputDir()
    for(let i = serpentBody.length - 2; i>=0;i--){
        serpentBody[i+1] = {...serpentBody[i]}
    }
    

    if ((serpentBody[0].x +inputD.x) > 30) {
        serpentBody[0].x = 1
        
    } else if((serpentBody[0].x +inputD.x) <= 0) {
        serpentBody[0].x = 30
        
    } else {
        serpentBody[0].x +=inputD.x
       
    }
    
    if (serpentBody[0].y +inputD.y > 30) {
        serpentBody[0].y = 1
        
    } else if(serpentBody[0].y +inputD.y <= 0) {
        serpentBody[0].y = 30
       
    } else {
        serpentBody[0].y +=inputD.y
       
    }
    
    
}

export function display(plateau){
    serpentBody.forEach((segment,index) => {
        if(index==0){
            const snakePart = document.createElement('div')
            const head = document.createElement('img')
            head.setAttribute("src", "static/shrek.png")
            snakePart.style.gridRowStart = segment.y
            snakePart.style.gridColumnStart = segment.x
            snakePart.setAttribute("id","head")
            snakePart.appendChild(head)
            plateau.appendChild(snakePart)
            
            }else{
                const snakePart = document.createElement('div')
                snakePart.style.gridRowStart = segment.y
                snakePart.style.gridColumnStart = segment.x
                snakePart.classList.add('snake')
                plateau.appendChild(snakePart)
            }


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

function getRandomPosition(){
    return ({ x:Math.ceil(Math.random() * 30),y:Math.ceil(Math.random() * 30)})
}