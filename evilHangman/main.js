let wordLength = 4
let guessesLeft = 0
let wordsLeft = []
let lettersGuessed = new Set()
let wordSoFar = []
let guessedLettersUL = document.getElementById('guessed-letters')

//START NEW CODE ///////

const winOrLoseDisplay = document.getElementById('win-or-lose')

//END NEW CODE /////////

async function startGame() {
    guessesLeft = 7
    wordsLeft = await getWords(wordLength)
    lettersGuessed = new Set()
    wordSoFar = new Array(wordLength).fill('_')
    console.log(wordsLeft)

    //START NEW CODE ////////////// removes any children in guessed letters displaying
    
    document.getElementById('guesses-left').textContent = `${guessesLeft}`

    while (guessedLettersUL.lastElementChild) {
        guessedLettersUL.removeChild(guessedLettersUL.lastElementChild)
    }

    winOrLoseDisplay.textContent = ''

    //END NEW CODE ////////////////
}
startGame()

async function getWords(wordLength) {
    return ['echo', 'heal', 'best', 'lazy', 'yeet'].filter(word => word.length === wordLength) 
}

function guessWord(e) {
    e.preventDefault()
    if (guessesLeft <= 0) {
        alert('No guesses left')
        return
    }
    const letter = document.getElementById('guess').value.trim().toLowerCase()
    console.log(letter)
    if (letter.length > 1) {
        alert('only letters allowed')
        return
    }
    if (lettersGuessed.has(letter) || !letter) {
        alert('letter already guessed')
        return
    }
    lettersGuessed.add(letter)
    const partitions = getPartitions(letter)
    let longestKey = 'None'
    for (const key of Object.keys(partitions)) {
        if (partitions[key].length > partitions[longestKey].length) {
            longestKey = key
        }
    }

    wordsLeft = partitions[longestKey]
    if (longestKey !== 'None') {
        for (let i of longestKey.split('_')) {
            wordSoFar[Number(i)] = letter
        }
    } else {
        guessesLeft -= 1
        document.getElementById('guesses-left').textContent = `${guessesLeft}`
        if (guessesLeft <= 0) {
            alert('you lose')

            //START NEW CODE //////////

            winOrLoseDisplay.textContent = `You Lose!!`

            //END NEW CODE ///////////

            return
        }
    }

    console.log('PARTS: ', partitions)
    console.log('LONGEST: ', partitions[longestKey])
    console.log('LEFT: ', wordsLeft)
    console.log('WORD SO FAR: ', wordSoFar, '\n\n')

    let newLi = document.createElement('li')
    newLi.appendChild(document.createTextNode(letter))
    guessedLettersUL.appendChild(newLi)

    const word = wordSoFar.join('')

    if (word.replace('_', '').length === wordLength) {
        //START NEW CODE //////////

        winOrLoseDisplay.textContent = `You Win!! The word was ${wordSoFar.join('')}.`

        //END NEW CODE ///////////


        alert('you win')
        lettersGuessed = 0
    }
}

function getPartitions(letter) {
    const result = { None: [] }
    for (const word of wordsLeft) {
        const key = findMatchSig(word, letter)
        if (!result[key]) {
            result[key] = []
        }
        result[key].push(word)
    }
    return result
}

function findMatchSig(word, letter) {
    let result = ''
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            result += `${i}_`
        }
    }
    if (result) {
        result = result.substr(0, result.length - 1)
    }
    return result || 'None'
}
