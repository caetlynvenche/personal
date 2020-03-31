const pLocal = document.getElementById("paragraphLocal")

const myObject = {
    fName: "Caetlyn"
}

//adding
const add = () => {
    localStorage.setItem("test", JSON.stringify(myObject))
}

//removing
const remove = () => {
    localStorage.removeItem("test")
}

//accessing
const access = () => {
    const testVar = JSON.parse(localStorage.getItem("test")) || "not applicable"

    pLocal.textContent = testVar.fName
}

//clearing
// const clear = () => {
//     localStorage.clear()
// }

