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