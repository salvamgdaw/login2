const form = document.querySelector('form'),
eField = form.querySelector('.email'),
eInput = form.querySelector('input'),
pField = form.querySelector('.password'),
pInput = pField.querySelector('input');

form.onsubmit = (e) =>{
    e.preventDefault();
    if(eInput.value == ''){
        eField.classList.add('shake','error');
    }else{
        checkEmail();
    }
    if(pInput.value == ''){
        pField.classList.add('shake','error');
    }

    setTimeout(()=>{
        eField.classList.remove('shake');
        pField.classList.remove('shake');

    }, 500);

    eInput.onkeyup = ()=>{
        checkEmail();
    }
    pInput.onkeyup = ()=>{
        if(pInput.value == ''){
            pField.classList.add('error');
        }else{
            pField.classList.remove('error');
        }
    }
    if(!eField.classList.contains('error') && !pField.classList.contains('error')){
        window.location.href = "#";
    }
}

function checkEmail(){
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!eInput.value.match(pattern)){
        eField.classList.add('error');
        let errorTxt = eField.querySelector('.error-txt');
        (eInput.value != '') ? errorTxt.innerHTML = 'Enter a valid Email address' : errorTxt.innerHTML = "Email can't be blank";
    }else{
        eField.classList.remove('error');
    }
}