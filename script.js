const inputName=document.getElementById("input-name");
const inputNumber=document.getElementById("input-number");
const inputMonth=document.getElementById("input-month");
const inputYear=document.getElementById("input-year");
const inputCvc=document.getElementById("input-cvc");
const cardNumber=document.getElementById("number");
const cardName=document.getElementById("name");
const cardMonth=document.getElementById("month");
const cardYear=document.getElementById("year");
const cardCvc=document.getElementById("cvc");
const submitbtn=document.getElementById("submit-button");
const form=document.querySelector("form");
const done=document.querySelector(".thank-you");

function setCardNumber(e) {
    cardNumber.innerText=format(e.target.value);
}

function setCardName(e) {
    cardName.innerText =format(e.target.value);
}
function setCardMonth(e) {
    cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
    cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
    cardCvc.innerText = format(e.target.value);
}

// function formatNumber(s){
//     return s.tostring().replace(/\d{4}(?=.)/g,"$& ");
// }


function handleSubmit(e){
    e.preventDefault();
    // let isvalid=true;

    if(!inputName.value)
        {
            inputName.classList.add("error");
            inputName.parentElement.classList.add("error-message");
            // isvalid=false;
        }else{
            inputName.classList.remove("error");
            inputName.parentElement.classList.remove("error-message");
        }

    if(!inputNumber.value)
        {
            inputNumber.classList.add("error");
            inputNumber.parentElement.classList.add("error-message");
        }else if(inputNumber.value.length<16){
            inputNumber.classList.add("error");
        }else{
            inputNumber.classList.remove("error");
            inputNumber.parentElement.classList.remove("error-message");
        }

    if(!inputMonth.value)
        {
            inputMonth.classList.add("error");
            inputMonth.parentElement.classList.add("error-message");
            // isvalid=false;
        }else{
            inputMonth.classList.remove("error");
            inputMonth.parentElement.classList.remove("error-message");
        }
    
    if(!inputYear.value)
        {
            inputYear.classList.add("error");
            inputYear.parentElement.classList.remove("error-message");
            // isvalid=false;
        }
        else{
            inputYear.classList.remove("error");
            inputYear.parentElement.classList.remove("error-message");
        }
    
    if(!inputCvc.value){
        inputCvc.classList.add("error");
        inputCvc.parentElement.classList.add("error-message");
        // isvalid=false;
    }else{
        inputCvc.classList.remove("error");
        inputCvc.parentElement.classList.remove("error-message");
    }

    // if(isvalid)
    //     {
    //         done.classList.remove("hidden");
    //         form.classList.add("hidden");
    //     }

    if(
        inputName.value &&
        inputNumber.value &&
        inputMonth.value &&
        inputYear.value &&
        inputCvc.value &&
        inputNumber.value.length==16
    )
    {
        done.classList.remove("hidden");
        form.classList.add("hidden");
    }
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

inputNumber.addEventListener("keyup", setCardNumber);
inputMonth.addEventListener("keyup", setCardMonth);
inputYear.addEventListener("keyup", setCardYear);
inputCvc.addEventListener("keyup", setCardCvc);
inputName.addEventListener("keyup", setCardName);
submitbtn.addEventListener("click", handleSubmit);