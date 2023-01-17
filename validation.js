function validatePassword(e){
    if(passwordField.value == passwordConfirmation.value){
        if(e.target.value.length !== 0){
        passwordField.classList.remove('error')
        passwordConfirmation.classList.remove('error')
        passwordMatchStatus.classList.add('password-matches')
        }else{
            passwordField.classList.add('error')
        passwordConfirmation.classList.add('error')
        passwordMatchStatus.classList.remove('password-matches')
        }
    }else{
        passwordField.classList.add('error')
        passwordConfirmation.classList.add('error')
        passwordMatchStatus.classList.remove('password-matches')
    }
}

