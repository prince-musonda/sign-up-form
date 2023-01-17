

const passwordField = document.querySelector('#password')
const passwordConfirmation = document.querySelector('#confirmation-password')
const passwordMatchStatus = document.querySelector('span')

passwordField.addEventListener('input',validatePassword)

passwordConfirmation.addEventListener('input',validatePassword)