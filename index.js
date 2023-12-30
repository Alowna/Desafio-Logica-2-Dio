let playerVictories = 45
let playerDefeats = 30
let saldoPlayer = saldoGet(playerVictories, playerDefeats)
let playerRank = rankGet(playerVictories)

console.log(`\"O Herói tem de saldo de {${saldoPlayer}} está no nível de {${playerRank}}\"`)


function saldoGet (Victory, Defeat){
    return Victory - Defeat
}

function rankGet (Victory){

    let rank

    if(Victory<10){
        rank = "Ferro"
    }else if(Victory >= 11 && Victory <= 20){
        rank = "Bronze"
    }else if(Victory >= 21 && Victory <= 50){
        rank = "Prata"
    }else if(Victory >= 51 && Victory <= 80){
        rank = "Ouro"
    }else if(Victory >= 81 && Victory <= 90){
        rank = "Diamante"
    }else if(Victory >= 91 && Victory <= 100){
        rank = "Lendário"
    }else if(Victory >= 101){
        rank = "Imortal"
    }

    return rank
}