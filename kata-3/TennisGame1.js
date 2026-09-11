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



    getScore() {
        let scoreLabel = "";
        let currentScore = 0;
        if (this.scorePlayer1 === this.scorePlayer2) {
            switch (this.scorePlayer1) {
                case 0:
                    scoreLabel = "Love-All";
                    break;
                case 1:
                    scoreLabel = "Fifteen-All";
                    break;
                case 2:
                    scoreLabel = "Thirty-All";
                    break;
                default:
                    scoreLabel = "Deuce";
                    break;
            }
        } else if (this.scorePlayer1 >= 4 || this.scorePlayer2 >= 4) {
        const scoreDiff = Math.abs(this.scorePlayer1 - this.scorePlayer2);
        const leader = this.scorePlayer1 > this.scorePlayer2 ? this.namePlayer1 : this.namePlayer2;
        scoreLabel = scoreDiff === 1 ? `Advantage ${leader}` : `Win for ${leader}`;
        } else {
            for (let i = 1; i < 3; i++) {
                if (i === 1) currentScore = this.scorePlayer1;
                else {
                    scoreLabel += "-";
                    currentScore = this.scorePlayer2;
                }
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
                        scoreLabel += "Forty";
                        break;
                }
            }
        }
        return scoreLabel;
    };
}
if (typeof window === "undefined") {
    module.exports = TennisGame1;
}