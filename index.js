let playerId = "Gabas"

let playerXP = 1000

let playerRank;

if (playerXP < 1000) {
    playerRank = "Ferro";
} else if (playerXP <= 2000) {
    playerRank = "Bronze";
} else if (playerXP <= 5000) {
    playerRank = "Prata"; 
} else if (playerXP <= 7000) {
    playerRank = "Ouro";
} else if (playerXP <= 8000) {
    playerRank = "Platina";
} else if (playerXP <= 9000) {
    playerRank = "Ascendente";
} else if (playerXP <= 10000) {
    playerRank = "Imortal";
} else if (playerXP > 10001) {
    playerRank = "Radiante";
}

console.log(`O herói de nome ${playerId} está no nível de ${playerRank}.`)