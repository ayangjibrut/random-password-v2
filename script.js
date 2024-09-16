const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let passwordLength = 13

let generateEl = document.querySelector("#generate-el")
let passwordOne = document.querySelector("#password-one")
let passwordTwo = document.querySelector("#password-two")

let copyText = document.querySelector(".password").innerHTML

generateEl.addEventListener("click", function() {
    function getRandomCharacter() {
        let generateCharacter = Math.floor(Math.random() * characters.length)
        return characters[generateCharacter]
    }

    function generateRandomPassword() {
        let randomPassword = ""
        for (let i = 0; i < passwordLength; i++) {
            randomPassword += getRandomCharacter()
        }
        return randomPassword
    }

    const generatePasswordOne = generateRandomPassword()
    const generatePasswordTwo = generateRandomPassword()

    passwordOne.textContent = generatePasswordOne
    passwordTwo.textContent = generatePasswordTwo
    
})

const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(copyText)
        console.log('Content copied to clipboard')
    } catch (err) {
        console.error('Failed to copy: ', err)
    }
}