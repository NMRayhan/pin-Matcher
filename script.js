document.getElementById('pin-Generate').addEventListener('click', function () {
    let randomNumber = Math.ceil(Math.random() * 10000);
    document.getElementById('pin-Generate-Input').value = randomNumber;
})
//notification are by Default Hide Access by Array
var notify = document.getElementsByClassName('notify');
notify[0].style.display = 'none'
notify[1].style.display = 'none'

document.getElementById('digit-container').addEventListener('click', function (event) {
    const digit = event.target.innerText
    if (isNaN(digit)) {

    } else {
        const pinInput = document.getElementById('pin-Input');
        pinInput.value = pinInput.value + digit;
    }
})
function pinMatch(){
    let generatePin = document.getElementById('pin-Generate-Input').value;
    let generatePinNumber = parseInt(generatePin)
    let pin = document.getElementById('pin-Input').value;
    let pinNumber = parseInt(pin)

    if(generatePinNumber === pinNumber){
        notify[1].style.display = 'block'
    }else{
        notify[0].style.display = 'block'
    }
}