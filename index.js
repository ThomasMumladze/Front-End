const darkMode = document.querySelector('.darkMode button')
const textP = document.querySelectorAll('.title')
const inputs = document.querySelectorAll('body input')
darkMode.addEventListener('click' , () => {
    let darkTheme = document.body
    darkTheme.classList.toggle("dark-mode")
    let theme ;
    if(darkTheme.classList.contains("dark-mode")){
        darkMode.style.color = '#FFF'
        theme = "DARK"
        darkMode.textContent = 'LIGHT'
        textP.forEach(item => item.style.color = '#FFF')
        inputs.forEach(item =>  item.classList.add('body-input_border'))
    }else{
        darkMode.style.color = '#222'
        theme = "LIGHT"
        darkMode.textContent = "DARK"
        textP.forEach(item => item.style.color = '#222')
        inputs.forEach(item =>  item.classList.remove('body-input_border'))
    }
    localStorage.setItem("DARK-THEME" , JSON.stringify(theme))
})
        
const getTheme = JSON.parse(localStorage.getItem("DARK-THEME"))

if(getTheme === 'DARK'){
    darkMode.style.color = '#FFF'
    darkMode.textContent = 'LIGHT'
    document.body.classList.add('dark-mode')
    textP.forEach(item => item.style.color = '#FFF')
    inputs.forEach(item =>  item.classList.add('body-input_border'))
}


const cardHolderName = document.getElementById('cardHolderName'),
cardNumber = document.getElementById('cardNumber'),
DD = document.getElementById('DD'),
YY = document.getElementById('YY'),
CVV = document.getElementById('CVV')

const ownerName = document.getElementById('ownerName'),
cardNumberText = document.getElementById('cardNumber-Text'),
DAYText = document.getElementById('DAY'),
YEARText = document.getElementById('YEAR'),
CVVText = document.getElementById('CVVText')

const errorName = document.getElementById('errorName'),
errorNumber = document.getElementById('errorNumber'),
errorYY_DD = document.getElementById('errorYY_DD'),
errorCVV = document.getElementById('errorCVV')

// REGEX
let letter = /[a-zA-Z]/
let number = /[0-9]/
let specialCharacter = /[!@#$%^&*()_+=<>?/{}|/t]/
let errorMessage = document.querySelectorAll('.errorMessage')
const setCardName = (e) => {
    const messages = []
    if(e.target.value === '' || e.value === null){
        messages.push('Name Require')
        cardHolderName.style.border = 'solid 1px #d22'
        ownerName.textContent = 'owner name'
    }else if(e.target.value.match(number)){
        messages.push('Numbers Not Allowed')
        cardHolderName.style.border = 'solid 1px #d22'

            if(e.target.value.match(specialCharacter)){
                messages.push("special Characters Not Allowed")
                cardHolderName.style.border = 'solid 1px #d22'
            }
    }else if(e.target.value.match(specialCharacter)){
        messages.push("special Characters Not Allowed")
        cardHolderName.style.border = 'solid 1px #d22'
    }
    else{
        cardHolderName.style.border = 'solid 1px green'
        ownerName.textContent = e.target.value
    }





    if( messages.length > 0){
        errorMessage[0].classList.add('errorMessageShow')
        errorName.textContent = messages.join(' , ')
    }else{
        errorMessage[0].classList.remove('errorMessageShow')
    }
    
} 
cardHolderName.addEventListener('keyup' , setCardName)

const setCardNumber = (e) => {
    let message = []
    if(e.target.value === '' || e.target.value === null){
        message.push("Card Number Require")
        cardNumber.style.border = 'solid 1px #d22'
        cardNumberText.textContent = '0000000000000000'.match(/.{1,4}/g).join(' ')

    }else if(e.target.value.match(letter)){
        message.push('Only Number Are Allowed')
        cardNumber.style.border = 'solid 1px #d22'

        if(e.target.value.match(specialCharacter)){
            message.push("special Characters Not Allowed")
            cardNumber.style.border = 'solid 1px #d22'

        }
    }else if(e.target.value.match(specialCharacter)){
        message.push("special Characters Not Allowed")
        cardNumber.style.border = 'solid 1px #d22'
    }else{
        cardNumberText.textContent = e.target.value.match(/.{1,4}/g).join(' ')
        if(e.target.value.length === 16){
            cardNumber.style.border = 'solid 1px green'
        }else{
            cardNumber.style.border = 'solid 1px #d22'
        }
    }

    if(message.length > 0){
        errorMessage[1].classList.add('errorMessageShow')
        errorNumber.textContent = message.join(' , ')
    }else{
        errorMessage[1].classList.remove('errorMessageShow')
    }
}
cardNumber.addEventListener('keyup' , setCardNumber)

const setCardDay = (e) => {
    let message = []
    if(e.target.value === '' || e.target.value === null){
        message.push("Card Number Require")
        DD.style.border = 'solid 1px #d22'
        DAYText.textContent = '00'
        
    }else if(e.target.value.match(letter)){
        message.push('Only Number Are Allowed')
        DD.style.border = 'solid 1px #d22'

        if(e.target.value.match(specialCharacter)){
            message.push("special Characters Not Allowed")
            DD.style.border = 'solid 1px #d22'

        }
    }else if(e.target.value.match(specialCharacter)){
        message.push("special Characters Not Allowed")
        DD.style.border = 'solid 1px #d22'
    }else if(DD.value > 31){
            message.push('Wrong DD')
            DD.style.border = 'solid 1px #d22'
    }
    else{
        DD.style.border = 'solid 1px green'
        DAYText.textContent = e.target.value
    }

    if(message.length > 0){
        errorMessage[2].classList.add('errorMessageShow')
        errorMessage[2].style.position = 'absolute'
        errorMessage[2].style.margin = '0px'
        errorMessage[2].style.width = '205px'
        errorYY_DD.textContent = message.join(' , ')
    }else{
        errorMessage[2].classList.remove('errorMessageShow')
    }
    
}
DD.addEventListener('keyup' , setCardDay)

const setYear = (e) => {
    let message = []
    if(e.target.value === '' || e.target.value === null){
        message.push("Card Number Require")
        YY.style.border = 'solid 1px #d22'
        YEAR.textContent = '00'
        
    }else if(e.target.value.match(letter)){
        message.push('Only Number Are Allowed')
        YY.style.border = 'solid 1px #d22'

        if(e.target.value.match(specialCharacter)){
            message.push("special Characters Not Allowed")
            YY.style.border = 'solid 1px #d22'

        }
    }else if(e.target.value.match(specialCharacter)){
        message.push("special Characters Not Allowed")
        YY.style.border = 'solid 1px #d22'
    }else if(YY.value > 22){
        message.push("Wrong YY")
        YY.style.border = 'solid 1px #d22'
    }
    else{
        YY.style.border = 'solid 1px green'
        YEAR.textContent = e.target.value
    }

    if(message.length > 0){
        errorMessage[2].classList.add('errorMessageShow')
        errorMessage[2].style.position = 'absolute'
        errorMessage[2].style.margin = '0'
        errorMessage[2].style.width = '205px'
        errorYY_DD.textContent = message.join(' , ')
    }else{
        errorMessage[2].classList.remove('errorMessageShow')
    }
}
YY.addEventListener('keyup' , setYear)

const setCardCvv = (e) => {
    let message = []
    if(e.target.value === '' || e.target.value === null){
        message.push("Card Number Require")
        CVV.style.border = 'solid 1px #d22'
        CVVText.textContent = '000'
    }else if(e.target.value.match(letter)){
        message.push('Only Number Are Allowed')
        CVV.style.border = 'solid 1px #d22'

        if(e.target.value.match(specialCharacter)){
            message.push("special Characters Not Allowed")
            CVV.style.border = 'solid 1px #d22'
        }
    }else if(e.target.value.match(specialCharacter)){
        message.push("special Characters Not Allowed")
        CVV.style.border = 'solid 1px #d22'
    }else{
        // CVV.style.border = 'solid 1px green'
        if(e.target.value.length > 2){
            CVV.style.border = 'solid 1px green'
        }else{
            CVV.style.border = 'solid 1px #d22'
        }
        CVVText.textContent = e.target.value
    }

    if(message.length > 0){
        errorMessage[3].classList.add('errorMessageShow')
        errorMessage[3].style.position = 'absolute'
        errorMessage[3].style.margin = '0'
        errorMessage[3].style.width = '205px'
        errorCVV.textContent = message.join(' , ')
    }else{
        errorMessage[3].classList.remove('errorMessageShow')
    }
}
CVV.addEventListener('keyup' , setCardCvv)

const form = document.getElementById('form')
let inputS = document.querySelectorAll('.inputS')
const completed = document.getElementById('completed')
const myForm = document.querySelector('.myForm')
form.addEventListener('submit' , (e) => {
    e.preventDefault()
    if(cardHolderName.value.match(number) || cardHolderName.value.match(specialCharacter)){
        form.style.display = 'block'
    }else if(cardNumber.value.match(letter) || cardNumber.value.match(specialCharacter)){
        form.style.display = 'block'
    }else if(DD.value.match(letter) || DD.value.match(specialCharacter)){
        form.style.display = 'block'
    }else if(YY.value.match(letter) || YY.value.match(specialCharacter)){
        form.style.display = 'block'
    }else if(CVV.value.match(letter) || CVV.value.match(specialCharacter)){
        form.style.display = 'block'
    }else if(cardHolderName.value === '' || cardNumber.value === '' || DD.value === '' || YY.value === null || CVV.value === ''){
        form.style.display = 'block'
        inputS.forEach((item , index) => {
            switch(index){
                case 0:
                    if(item.value === ''){
                        item.style.border = 'solid 1px #d22'
                        errorName.textContent = 'Name Require'
                        errorMessage[0].classList.add('errorMessageShow')
                    }
                break;
                case 1:
                    if(item.value === ''){
                        item.style.border = 'solid 1px #d22'
                        errorNumber.textContent = 'Number Require'
                        errorMessage[1].classList.add('errorMessageShow')
                    }
                break
                case 2:
                    if(item.value === ''){
                        item.style.border = 'solid 1px #d22'
                        errorYY_DD.textContent = 'DD / DD Require'
                        errorMessage[2].classList.add('errorMessageShow')
                    }
                break;
                case 3:
                    if(item.value === ''){
                        item.style.border = 'solid 1px #d22'
                        errorYY_DD.textContent = 'DD / YY Require'
                        errorMessage[2].classList.add('errorMessageShow')
                    }
                break;
                case 4:
                    if(item.value === ''){
                        item.style.border = 'solid 1px #d22'
                        errorCVV.textContent = 'CVV Require'
                        errorMessage[3].classList.add('errorMessageShow')
                    }
                break;
            }
        })
    }else if(cardHolderName.value.length < 8 || cardNumber.value.length < 16 || DD.value.length < 2 || YY.value.length < 2 || CVV.value.length < 3){
        form.style.display = 'block'
    }else if(DD.value > 31){
        form.style.display = 'block'
    }else if(YY.value > 22){
        form.style.display = 'block'
    }
    else{
        form.classList.add('removeForm')
        completed.classList.add('completedOpen')
        }
}) 

const toCart = document.querySelector('.toCart')
toCart.addEventListener('click' , () => {
    form.classList.remove('removeForm')
    completed.classList.remove('completedOpen')
    cardHolderName.value = ''
    cardHolderName.style.border = 'solid 1px #222'
    cardNumber.value = ''
    cardNumber.style.border = 'solid 1px #222'
    DD.value = ''
    DD.style.border = 'solid 1px #222'
    YY.value = ''
    YY.style.border = 'solid 1px #222'
    CVV.value = ''
    CVV.style.border = 'solid 1px #222'
    ownerName.textContent = 'owner name'
    cardNumberText.textContent = '0000000000000000'.match(/.{1,4}/g).join(' ')
    DAYText.textContent = '00'
    YEARText.textContent = '00'
    CVVText.textContent = '000'
})


const date = new Date()
let year = date.getFullYear()
console.log(year);
