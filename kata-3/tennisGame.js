function winningPlayer(player1Score, player2Score){
    const scoreDiff = player1Score - player2Score
    if(player1Score >= 4 && scoreDiff >= 2){
        return "Win for player 1"
    } else if(player2Score >= 4 && scoreDiff <= -2){
        return "Win for player 2"
    }
}
const advantagedPlayer = (player1Score, player2Score) => player1Score > player2Score ? "Advantage for player 1" : "Advantage for player 2"


export function tennisGame(player1Score, player2Score){
    const isPlayerWinning = winningPlayer(player1Score, player2Score)
    return isPlayerWinning ? winningPlayer(player1Score, player2Score) : advantagedPlayer(player1Score, player2Score)

}