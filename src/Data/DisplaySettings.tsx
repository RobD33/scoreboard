export default interface DisplaySettings {
    [index: string]:  string|boolean|{},
    totalScores: boolean
    individualScores: boolean,
    eightballClears: boolean,
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