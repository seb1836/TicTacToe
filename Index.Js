const players = [
  {
    playersign: 'o',
    turn: true,
    name: 'player2'
  },
  {
    playersign: 'x',
    turn: false,
    name: 'player1'
  }
]

const winningCoordinates = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [6, 4, 2]]

function areCoordinatesMatchingPlayerSign(tablesData, coordinates, sign) {
  let matches = 0
  for (let i = 0; i < coordinates.length; i++) {
    if (tablesData[coordinates[i]].innerHTML === sign) {
      matches++
    }
  }
  return matches === coordinates.length
}

function isWinner(sign) {
  const tablesData = document.getElementsByTagName('td')

  for (let i = 0; i < winningCoordinates.length; i++) {
    if (areCoordinatesMatchingPlayerSign(tablesData, winningCoordinates[i], sign)) {
      return true
    }
  }
  return false
}

function playerTurn() {
  players.forEach(p => {
    p.turn = !p.turn
  })
}

function removeEventListeners() {
  const monarray = document.getElementsByTagName('td')
  for (let i = 0; i < monarray.length; i++) {
    monarray[i].removeEventListener('click', handleClick)
  }
}

function handleClick(event) {
  if (event.target.innerHTML === '') {
    playerTurn()
    const currentPlayer = players.find(p => p.turn)
    const sign = currentPlayer.playersign
    event.target.innerHTML = sign
    if (isWinner(sign)) {
      setTimeout(() => {
        alert(`${currentPlayer.name} is Winner`)
      }, 0)
      removeEventListeners()
    }
  }
}

function setEventListeners() {
  const monarray = document.getElementsByTagName('td')
  for (let i = 0; i < monarray.length; i++) {
    monarray[i].addEventListener('click', handleClick)
  }
}

setEventListeners()
