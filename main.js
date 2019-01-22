const randomNumberGenerator = document.querySelector('button');
const userNumbersValue = document.getElementById('userNumbers');
const addNumbers = document.getElementById('pushNumbers');
const drawnNumbers = document.querySelector('.lotek');
const removeNumbers = document.getElementById('removeNumbers');
let lottoNumbers = [];
for (let i = 1; i < 50; i++) {
    lottoNumbers.push(i);
}
let userNumbers = [];
addNumbers.addEventListener('click', function () {
    userNumbers.push(parseInt(userNumbersValue.value));
});
removeNumbers.addEventListener('click', function () {
    clearNumbers = confirm("Czy na pewno chcesz wyczyścić swoje typy?");
    if (clearNumbers == true) {
        userNumbers = [];
    };
});
let randomNumbers = [];
randomNumberGenerator.addEventListener('click', function () {
    for (let i = 0; i < 6; i++) {
        let number = Math.round(Math.random() * (lottoNumbers.length - 1));
        randomNumbers.push(number);
        const div = document.createElement('div');
        div.textContent = number;
        drawnNumbers.appendChild(div);
    };
    let hits = 0;
    randomNumbers.forEach((element) => {
        if (userNumbers.indexOf(element) !== -1) {
            hits++;
        };
    });
    console.log(hits);
});