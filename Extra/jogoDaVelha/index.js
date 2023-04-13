const currentPlayer = document.querySelector('.currentPlayer')

let player = 'X'
let jogadas = 0

let positions = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

function newMove(e) {
    jogadas++
    e.target.innerHTML = player
    e.target.removeEventListener('click', newMove)
    
    currentPlayer.innerHTML = `JOGADOR DA VEZ ${player}`
    player = player === 'X' ? 'O' : 'X'

    setTimeout(() => {
        positions.forEach(position => {
            let valor1 = document.querySelector(`[data-i="${position[0]}"]`).innerHTML
            let valor2 = document.querySelector(`[data-i="${position[1]}"]`).innerHTML 
            let valor3 = document.querySelector(`[data-i="${position[2]}"]`).innerHTML 
            if (valor1 == valor2 && valor2 === valor3 && valor1 === valor3 && valor1 !== '' && valor2 !== '' && valor3 !== '') {
                alert(`JOGADOR "${valor1}" GANHOU O JOGO`)
                init()
            }
        })
        if (jogadas === 9){
            alert(`EMPATOU DOG`)
            init()
        }
    },1)
}


function init() {
    select = []
    jogadas = 0
    currentPlayer.innerHTML = `JOGADOR DA VEZ ${player}`

    document.querySelectorAll('.game button').forEach(item => {
        item.innerHTML = ''
        item.addEventListener('click', newMove)
    })
}

init()