function winningPlayer(player1Score, player2Score){
    const scoreDiff = player1Score - player2Score
    if(player1Score >= 4 && scoreDiff >= 2){
        return "Win for player 1"
    } else if(player2Score >= 4 && scoreDiff <= -2){
        return "Win for player 2"
    }
}
const advantagedPlayer = (player1Score, player2Score) => player1Score > player2Score ? "Advantage for player 1" : "Advantage for player 2"

export function getScoreLabel(score) {
    let label = ""
    switch(score){
        case 0:
            label = "Love"
            break;
        case 1:
            label = "Fifteen"
            break;
        case 2:
            label = "Thirty"
            break;
        case 3:
            label = "Forty"
            break;

        default:
            break;
    }
    return label
}

export function tennisGame(player1Score, player2Score){
    const isPlayerWinning = winningPlayer(player1Score, player2Score)
    if(player1Score < 4 && player2Score < 4){
        const player1Label = getScoreLabel(player1Score)
        const player2Label = getScoreLabel(player2Score)
        return `${player1Label}-${player2Label}`
    } else {
        return isPlayerWinning ? winningPlayer(player1Score, player2Score) : advantagedPlayer(player1Score, player2Score)
    }
}