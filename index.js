/*Se vitórias for menor do que 10 = Ferro<br>
Se vitórias for entre 11 e 20 = Bronze<br>
Se vitórias for entre 21 e 50 = Prata<br>
Se vitórias for entre 51 e 80 = Ouro<br>
Se vitórias for entre 81 e 90 = Diamante<br>
Se vitórias for entre 91 e 100 = Lendário<br>
Se vitórias for maior ou igual a 101 = Imortal<br>
(vitorias - derrotas)
*/

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