const idNumber = document.querySelector('.id-number');
const adviceText = document.querySelector('.text');
const diceBtn = document.querySelector('.dice-btn');

fetch('https://api.adviceslip.com/advice', { mode: 'cors' })
    .then(function (response) {
        return response.json();
    })
    .then(function(response){
        console.log(response.slip.advice)
    })

diceBtn.addEventListener('click', handleClick);

function handleClick() {
    idNumber.textContent = '115';
    adviceText.textContent = 'Oranges are orange';
}