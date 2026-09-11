class TennisGame1 {
    m_score1 = 0;
    m_score2 = 0;

    constructor(player1Name, player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    };

    wonPoint(playerName) {
        if (playerName === "player1")
            this.m_score1 += 1;
        else
            this.m_score2 += 1;
    };



    getScore() {
        let scoreLabel = "";
        let score = 0;
        if (this.m_score1 === this.m_score2) {
            switch (this.m_score1) {
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
        } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        const scoreDiff = Math.abs(this.m_score1 - this.m_score2);
        const leader = this.m_score1 > this.m_score2 ? this.player1Name : this.player2Name;
        scoreLabel = scoreDiff === 1 ? `Advantage ${leader}` : `Win for ${leader}`;
        } else {
            for (let i = 1; i < 3; i++) {
                if (i === 1) score = this.m_score1;
                else {
                    scoreLabel += "-";
                    score = this.m_score2;
                }
                switch (score) {
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