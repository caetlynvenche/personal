//check if string has same amount of x's and o's

function XO(str) {
    //code here
    let x = 0
    let o = 0
    
    let myStr = str.toLowerCase().split("")
    
    for(let i = 0; i < myStr.length; i++) {
      if(myStr[i] === "x") {
        x += 1
      }
      if(myStr[i] === "o") {
        o += 1
      }
    }
    
    if (x === o) {
      return true
    } else {
      return false
    }
}

//4 or 6 length valid pin

function validatePIN (pin) {
  //return true or false
  let myPin = pin.split("")
  let myNewPin = myPin.map(ind => {
    let isNum
  
    if(ind === "0") {
      return "0"
    } else if (ind === " ") {
      return NaN
    } else {
      return Number(ind)
      
    }
  })
  
  return myNewPin
  
  if (myNewPin.includes(NaN)) {
      return false
  } else if (myNewPin.length === 4 || myNewPin.length === 6) {
      return true
  } else {
      return false
  }
  
}

//DNA return companion half of given string

function DNAStrand(dna){
  //your code here
  const theDNA = dna.split("")
  const mappedDNA = theDNA.map(ind => {
    if(ind === "A") {
      return "T"
    } else if(ind === "T") {
      return "A"
    } else if(ind === "C") {
      return "G"
    } else if(ind === "G") {
      return "C"
    }
  })
  return mappedDNA.join("")
}

//take string and return ex. "abc" => "A-Bb-Ccc"

function accum(s) {
	let str = s.split("")
  const newArr = []
  for(let i = 0; i < str.length; i++) {
    let upperCase = str[i].toUpperCase()
    let lowerCase = []
    for(let j = 0; j < i; j++) {
      lowerCase.push(str[i].toLowerCase())
    }
    lowerCase = lowerCase.join("")
    let result = upperCase.concat(lowerCase)
    newArr.push(result)
  }
  return newArr.join("-")
}

//change string to camelCase

function toCamelCase(str){
  let arr

  if(str.includes("-")) {
    arr = str.split("-")
  } else if (str.includes("_")) {
    arr = str.split("_")
  } else {
    arr = str.split(" ")
  }
  
  let first = arr[0]
  arr.shift()
  //return arr
  const newArr = []
  
  for(let i = 0; i < arr.length; i++) {
    let word = arr[i].split("")
    word[0] = word[0].toUpperCase()
    word = word.join("")
    newArr.push(word)
  }
  //return newArr
  
  newArr.unshift(first)
  
  let result = newArr.join("")
  
  return result
  
}

//array of numbers to phone number

function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}


//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0
  let validSmiles = [':)', ':-)', ':~)', ';)', ';-)', ';~)',':D', ':-D', ':~D', ';D', ';-D', ';~D']
  
  for (let i = 0; i < arr.length; i++) {
    if(validSmiles.includes(arr[i])) {
      count++
    }
  }
  return count
}

//reverse words in string longer than 5 letters

function spinWords(str){
  let arr = str.split(" ")
  
  const mappedArr = arr.map(ind => {
    if (ind.length >= 5) {
      let newInd = ind.split("").reverse().join("")
      return newInd
    } else {
      return ind
    }
  })
  return mappedArr.join(" ")
}

//who likes this post

function spinWords(str){
  let arr = str.split(" ")
  
  const mappedArr = arr.map(ind => {
    if (ind.length >= 5) {
      let newInd = ind.split("").reverse().join("")
      return newInd
    } else {
      return ind
    }
  })
  return mappedArr.join(" ")
}

//uppercase every even letter in every word. lower rest. return again as string

function toWeirdCase(string){
  let arr = string.split(" ")
  let newArr = []
  
  for(let i = 0; i < arr.length; i++) {
    let count = 0
    let wordArr = arr[i].split("")
    let newWordArr = []
    
    for (let j = 0; j < wordArr.length; j++) {
        if(count % 2 === 0) {
          newWordArr.push(wordArr[j].toUpperCase())
          count++
        } else {
          newWordArr.push(wordArr[j].toLowerCase())
          count++
        }
    }
    newArr.push(newWordArr.join(""))
  }
  
  
  let result = newArr.join(" ")
  return result
}

//return main part of a url

function domainName(url){
  //your code here
  let arr = url.split("/")
  let innerArr
  if(arr[0] === 'http:' || arr[0] === 'https:') {
    innerArr = arr[2]
  } else {
    innerArr = arr[0]
  }
  innerArr = innerArr.split(".")
  
  if(innerArr[0] === 'www') {
    return innerArr[1]
  } else {
    return innerArr[0]
  }
}

//UpperCase first letter of every word in string, except any words from excluded word list

function titleCase(title, minorWords) {
  if(title === '') {
    return ''
  }
  
  let arr = title.split(" ")
  let otherWordsArr
  if (minorWords) {
    otherWordsArr = minorWords.split(" ")
  } else {
    otherWordsArr = []
  }
  
  let finalArr = []
  
  let mappedArr = arr.map((word) => {
    let theWord = word.toLowerCase()
    let wordArr = theWord.split("")
    wordArr[0] = wordArr[0].toUpperCase()
    let wordResult = wordArr.join("")
    return wordResult
  })
  
  if (minorWords === undefined) {
    return mappedArr.join(" ")
  }
  
  let mappedOtherWords = otherWordsArr.map((word) => {
    return word.toLowerCase()
  })
  
  for(let i = 0; i < mappedArr.length; i++) {
    if(i === 0) {
      finalArr.push(mappedArr[0])
    } else {
      //for loop to check word against each of other words
      let toggle = false
      
      for(let j = 0; j < mappedOtherWords.length; j++) {
        let lowercaseWord = mappedArr[i].toLowerCase()
        if(lowercaseWord === mappedOtherWords[j]) {
          finalArr.push(mappedOtherWords[j])
          toggle = true
          break
        }
      }
      
      if (toggle === false) {
        finalArr.push(mappedArr[i])
        toggle = true
      }
      
    }
  }
  
  return finalArr.join(" ")
}

//Hashtag generator

function generateHashtag (str) {
  const strArr = str.split("")
  const arr = []
  let newWord = true
  
    for (let i = 0; i < str.length; i++) {
      if (strArr[i] !== " ") {
        if (newWord === true) {
          arr.push(strArr[i].toUpperCase())
          newWord = false
        } else {
          arr.push(strArr[i])
        }
      } else if(strArr[i] === " ") {
        newWord = true
      }
    }
    
    if (arr.length >= 140 || arr.length === 0) {
      return false
    } else {
      arr.unshift("#")
      return arr.join("")
    }
  }

  /*
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
    */

//Observed numbers on pin might have been an ajacent number. Find all potential pins
  function getPINs(observed) {
    let observedString = observed.toString()
    const split = observedString.split("")

    console.log("starting keys", split)

    const keyKey = {
      "0": {
        length: 1,
        alts: ["8"]},
      "1": {
        length: 2,
        alts: ["2", "4"]},
      "2": {
        length: 3,
        alts: ["1", "3", "5"]},
      "3": {
        length: 2,
        alts: ["2", "6"]},
      "4": {
        length: 2,
        alts: ["1", "5"]},
      "5": {
        length: 4,
        alts: ["4", "2", "6", "8"]},
      "6": {
        length: 3,
        alts: ["3", "5", "9"]},
      "7": {
        length: 2,
        alts: ["4", "8"]},
      "8": {
        length: 2,
        alts: ["5", "7", "9", "0"]},
      "9": {
        length: 2,
        alts: ["6", "8"]}
    }

    const runSet = () => {
      //
    }
    
    const potentials = [observed] // hold potential codes 

    for (let i = 0; i < observed.length; i++) {
      //for loop where it goes through each potential change. Need more nested for loops?
      //for each of origional slots
    }
  }

  console.log(getPINs(345))
  console.log(getPINs(82))
  console.log(getPINs(9974))