export function tennisGame(player1Score, player2Score){
    const scoreDiff = player1Score - player2Score
    let resultMessage = ''
    if(player1Score >= 4 && scoreDiff >= 2){
        resultMessage = "Win for player 1"
    } else if(player2Score >= 4 && scoreDiff <= -2){
        resultMessage =  "Win for player 2"
    }
    return resultMessage
}