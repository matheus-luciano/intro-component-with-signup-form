const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('pass');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get values from the inputs

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === ''){
        //add error class
        setErrorFor(firstName);
    }else{
        //add sucess class
        setSucessFor(firstName);
    }

    if(lastNameValue === ''){
        //add error class
        setErrorFor(lastName);
    }else{
        //add sucess class
        setSucessFor(lastName);
    }

    if(emailValue === ''){
        //add error class
        setErrorFor(email);
    }else if(!isEmail(emailValue)){
        setErrorFor(email);
    }else{
        setSucessFor(email);
    }
        

    if(passwordValue === ''){
        //add error class
        setErrorFor(password);
    }else{
        //add succes class
        setSucessFor(password);
    }
}

function setErrorFor(input){
    const inputGroup = input.parentElement;

    inputGroup.className = 'input-group error'; 
}

function setSucessFor(input){
    const inputGroup = input.parentElement;

    inputGroup.className = 'input-group sucess'; 
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}