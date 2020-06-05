/*
••••••••••••••••••••••••••••••••••••••••••••••••
Copyright (C) 2015 Codesse. All rights reserved.
••••••••••••••••••••••••••••••••••••••••••••••••
*/


WordGame = function() {
	const highScoreList = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'] 
	
	let characterString = '';
	const characters = 'abcdefghijklmnopqrstuvwxyz';
	let charactersLength = characters.length;
	for ( let i = 0; i < charactersLength; i++ ) {
      characterString += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	console.log(characterString)
/*
Submit a word on behalf of a player. A word is accepted if its letters are contained in the base string used to construct the game AND if it is in the word list provided: wordlist.txt.
	
If the word is accepted and its score is high enough, the submission should be added to the high score list. If there are multiple submissions with the same score, all are accepted, BUT the first submission with that score should rank higher.
	
A word can only appear ONCE in the high score list. If the word is already present in the high score list the submission should be rejected.
	
@parameter word. The player's submission to the game. All submissions may be assumed to be lowercase and contain no whitespace or special characters.
*/	
	this.submitWord = function (word) {
		//bring in words on list <<<<<<<<<<<<<<<

		//check against wordlist here <<<<<<<<<<<<<<<

		//check against initial string
		let checkCharString = characterString.split("")
		let wordArr = word.split("")

		for (let i = 0; i < wordArr.length; i++) {
			let letterIndex = checkCharString.findIndex((letter) => letter === wordArr[i])
			if (letterIndex === -1) {
				return
			}
			checkCharString.splice(letterIndex, 1)
		}

		//if checks through
		for (let i = 0; i < highScoreList.length; i++) {
			if (highScoreList[i].word === word) {
				return "Invalid Word"
			}
		}

		const score = word.length
		if (score > highScoreList[9].score || highScoreList[9] === 'null') {
			for(let i = 0; i < highScoreList.length; i++) {
				if (score > highScoreList[i].score || highScoreList[i] === 'null') {
					highScoreList.splice(i, 0, {username: 'Purple', score: score, word: word})
					highScoreList.length = 10
					return
				}
			}
		}
	};

	submitWord("testagain")
	submitWord("andagain")
	submitWord("oncemore")
	submitWord("hi")
	submitWord("there")
	submitWord("pineapple")
	submitWord("pie")
	submitWord("cry")
	submitWord("lies")
	submitWord("kitty")
	submitWord("testagain")
	submitWord("dog")
	console.log(highScoreList)

/*
Return word entry at given position in the high score list, 0 being the highest (best score) and 9 the lowest. You may assume that this method will never be called with position > 9.

@parameter position Index position in high score list
@return the word entry at the given position in the high score list, or null if there is no entry at the position requested
*/
	this.getWordEntryAtPosition = function (position) {
		if (highScoreList[position] === 'null') {
			console.log('null word')
			return null
		}

		console.log(highScoreList[position].word)
		return highScoreList[position].word
	};
	

	getWordEntryAtPosition(5)

/*
Return the score at the given position in the high score list, 0 being the highest (best score) and 9 the lowest. You may assume that this method will never be called with position > 9.

What is your favourite color? Please put your answer in your submission (this is for testing if you have read the comments).

@parameter position Index position in high score list
@return the score at the given position in the high score list, or null if there is no entry at the position requested
*/
	this.getScoreAtPosition = function (position) {
		if (highScoreList[position] === 'null') {
			console.log("null score")
			return null
		}
		console.log(highScoreList[position].score)
		return highScoreList[position].score
	};
	getScoreAtPosition(5)

};

WordGame()

