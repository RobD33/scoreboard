import { defaultMaxListeners } from "stream";

export default interface DisplaySettings {
    totalScores: boolean
    individualScores: boolean,
    theme: string,
    fontFamily: string,
    colors: { 
        [index: string]:  string,
        mainColor: string,
        playerOneColor: string,
        playerTwoColor: string,
        playerThreeColor: string,
        playerFourColor: string,
        playerFiveColor: string,
        playerSixColor: string,
    }
}