const sessionPlayers = ['Rob', 'Jamie', 'Frankie', 'Bails', 'Brett', 'JP']

const matches = sessionPlayers.reduce((acc, playerOne) => [...acc, ...sessionPlayers.map(playerTwo => ({ playerOne, playerTwo }))], [])

console.log(matches)