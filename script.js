function RandomPin(){
    const pin = Math.random()*10000
    const result = (pin + '').split('.')[0]
    if(result.length == 4){
        return result
    }else{
        RandomPin();
    }
}

document.getElementById('pin-Generate').addEventListener('click', function () {
    let randomNumber = RandomPin()
    document.getElementById('pin-Generate-Input').value = randomNumber;
})


// document.getElementById('pin-Generate').addEventListener('click', function () {
//     let randomNumber = Math.ceil(Math.random() * 10000);
//     document.getElementById('pin-Generate-Input').value = randomNumber;
// })


//notification are by Default Hide Access by Array
var notify = document.getElementsByClassName('notify');
notify[0].style.display = 'none'
notify[1].style.display = 'none'

document.getElementById('digit-container').addEventListener('click', function (event) {
    document.getElementById('backSpace').innerText = 'B'
    const digit = event.target.innerText
    if (isNaN(digit)) {
        if(digit == 'C'){
            document.getElementById('backSpace').innerText = ''
            document.getElementById('pin-Input').value = ''
        }if(digit == 'B'){
            document.getElementById('backSpace').innerText = ''
            console.log("B");
        }
    } else {
        document.getElementById('backSpace').innerText = ''
        const pinInput = document.getElementById('pin-Input');
        pinInput.value = pinInput.value + digit;
    }
    document.getElementById('backSpace').innerText = ''
})
function pinMatch(){
    let generatePin = document.getElementById('pin-Generate-Input').value;
    let generatePinNumber = parseInt(generatePin)
    let pin = document.getElementById('pin-Input').value;
    let pinNumber = parseInt(pin)

    if(generatePinNumber === pinNumber){
        notify[0].style.display = 'none'
        notify[1].style.display = 'block'
    }else{
        notify[1].style.display = 'none'
        notify[0].style.display = 'block'
    }
}