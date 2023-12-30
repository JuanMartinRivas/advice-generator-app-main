const idNumber = document.querySelector('.id-number');
const adviceText = document.querySelector('.text');
const diceBtn = document.querySelector('.dice-btn');

diceBtn.addEventListener('click', handleClick);

function handleClick() {
    fetch('https://api.adviceslip.com/advice', { cache: "no-cache" }, {mode: "cors"})
        .then(response => {
            return response.json();
        })
        .then(response => {
            idNumber.textContent = `${response.slip.id}`;
            adviceText.textContent = `${response.slip.advice}`;
        })
        .catch(err => {
            console.error(err)
        })
}