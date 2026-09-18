function winningPlayer(player1Score, player2Score){
    const scoreDiff = Math.abs(player1Score - player2Score)
    if(scoreDiff >= 2){
        return player1Score > player2Score ? "Win for player 1" : "Win for player 2"
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

    if(Math.max(player1Score, player2Score) < 4){
        const players = [player1Score, player2Score]
        return players.map((player) => getScoreLabel(player)).join('-')
    } else {
        if(player1Score === player2Score){
            return "Deuce"
        }
        return isPlayerWinning ? winningPlayer(player1Score, player2Score) : advantagedPlayer(player1Score, player2Score)
    }
}