const setError = (element, message) => {

    const errorDisplay = document.querySelector("#"+element.id+"_errorMessage");
    
    errorDisplay.innerText = message;
    errorDisplay.classList.add('form__error-message');
    errorDisplay.classList.remove('form__success-message');
}

const setSuccess = element => {
    const errorDisplay = document.querySelector("#"+element.id+"_errorMessage");

    errorDisplay.innerText = "";
    errorDisplay.classList.add('form__success-message');
    errorDisplay.classList.remove('form__error-message');
}

const isValidEmail = email => {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
}

const validationForm = () =>
{
    let noError= true;

    const familyName= document.getElementById('familyName');
    const firstName= document.getElementById('firstName');
    const email= document.getElementById('email')
    const review= document.getElementById('review');

    const familyNameValue= familyName.value;
    const firstNameValue= firstName.value;
    const emailValue= email.value;
    const reviewValue= review.value;

    if (familyNameValue === "")
    {
        setError(familyName, 'Le nom de famille est obligatoire.');
        noError = false;
    }
    else
    {
        setSuccess(familyName);
    }

    if (firstNameValue === "")
    {
        setError(firstName, 'Le prénom est obligatoire.');
        noError = false;
    }
    else if (firstNameValue.lenght < 2 )
    {
        setError(firstName, 'Le prénom dois contenire au moins 2 charactères.');
        noError = false;
    }
    else if (firstNameValue.lenght > 16 )
    {
        setError(firstName, 'Le prénom ne dois pas contenire plus de 16 charactères.');
        noError = false;
    }
    else
    {
        setSuccess(firstName);
    }

    if (emailValue === "")
    {
        setError(email, "L'adresse email est obligatoire.");
        noError = false;
    }
    else if (!isValidEmail(emailValue))
    {
        setError(email, "Donnez une adresse de messagerie valide.");
        noError = false;
    }
    else
    {
        setSuccess(email);
    }

    if (reviewValue === "")
    {
        setError(review, "Veillez entré un message.");
        noError = false;
    }
    else
    {
        setSuccess(review);
    }
    
    return noError;
}

