export const Speed = 1000
export const serpentBody = [
    { x : 10, y : 10},
]


export function update(){
    for(let i = serpentBody.length - 2; i>=0;i--){
        serpentBody[i+1] = {...serpentBody[i]}
    }
    addEventListener('keydown', function(event) {
        const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
        if (key === "ArrowRight"){
            serpentBody[0].x += 1
            serpentBody[0].y += 0
        }else if (key === "ArrowLeft"){
            serpentBody[0].x -= 1
            serpentBody[0].y += 0
        }else if (key === "ArrowUp"){
            serpentBody[0].x += 0
            serpentBody[0].y -= 1
        }else if (key === "ArrowDown"){
            serpentBody[0].x += 0
            serpentBody[0].y += 1
        }
    });

    console.log(serpentBody)
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