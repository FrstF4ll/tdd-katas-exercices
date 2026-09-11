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
        let score = "";
        let tempScore = 0;
        if (this.m_score1 === this.m_score2) {
            switch (this.m_score1) {
                case 0:
                    score = "Love-All";
                    break;
                case 1:
                    score = "Fifteen-All";
                    break;
                case 2:
                    score = "Thirty-All";
                    break;
                default:
                    score = "Deuce";
                    break;
            }
        } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        const scoreDiff = Math.abs(this.m_score1 - this.m_score2);
        const leader = this.m_score1 > this.m_score2 ? this.player1Name : this.player2Name;
        score = scoreDiff === 1 ? `Advantage ${leader}` : `Win for ${leader}`;
        } else {
            for (let i = 1; i < 3; i++) {
                if (i === 1) tempScore = this.m_score1;
                else {
                    score += "-";
                    tempScore = this.m_score2;
                }
                switch (tempScore) {
                    case 0:
                        score += "Love";
                        break;
                    case 1:
                        score += "Fifteen";
                        break;
                    case 2:
                        score += "Thirty";
                        break;
                    case 3:
                        score += "Forty";
                        break;
                }
            }
        }
        return score;
    };
}
if (typeof window === "undefined") {
    module.exports = TennisGame1;
}