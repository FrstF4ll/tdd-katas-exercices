class TennisGame1 {
    scorePlayer1 = 0;
    scorePlayer2 = 0;

    constructor(namePlayer1, namePlayer2) {
        this.namePlayer1 = namePlayer1;
        this.namePlayer2 = namePlayer2;
    };

    wonPoint(playerName) {
        if (playerName === this.namePlayer1)
            this.scorePlayer1 += 1;
        else
            this.scorePlayer2 += 1;
    };

    getScoreLabel(currentScore){
        let scoreLabel = ""
        switch (currentScore) {
            case 0:
                scoreLabel += "Love";
                break;
            case 1:
                scoreLabel += "Fifteen";
                break;
            case 2:
                scoreLabel += "Thirty";
                break;
            case 3:
                scoreLabel += "Forty"
                break;
        }
        return scoreLabel
    }

    getScore() {
        const scoreLabel1 = this.getScoreLabel(this.scorePlayer1);
        const scoreLabel2 = this.getScoreLabel(this.scorePlayer2);
        let fullScoreLabel = `${scoreLabel1}-${scoreLabel2}`

        if (this.scorePlayer1 === this.scorePlayer2) {
            if (this.scorePlayer1 >= 3) {
                fullScoreLabel = "Deuce"
            } else {
            fullScoreLabel = `${scoreLabel1}-All`
            }
        } else if (this.scorePlayer1 >= 4 || this.scorePlayer2 >= 4) {
        const scoreDiff = Math.abs(this.scorePlayer1 - this.scorePlayer2);
        const leader = this.scorePlayer1 > this.scorePlayer2 ? this.namePlayer1 : this.namePlayer2;
        fullScoreLabel = scoreDiff === 1 ? `Advantage ${leader}` : `Win for ${leader}`;
        }

        return fullScoreLabel;
    };
}
if (typeof window === "undefined") {
    module.exports = TennisGame1;
}