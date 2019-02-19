const randomNumberGenerator = document.querySelector('button');
const userNumbersValue = document.getElementById('userNumbers');
const addNumbers = document.getElementById('pushNumbers');
const drawnNumbers = document.querySelector('.lotek');
const removeNumbers = document.getElementById('removeNumbers');
const showUserNumbers = document.querySelector('.showUserNumbers');
const showUserNumbersInDiv = document.getElementById('showUserNumbersInDiv');
const hideUserNumbersInDiv = document.getElementById('hideUserNumbersInDiv');
const userHitsDiv = document.querySelector('.userHits');
// PRZYPISANIE DO TABLICY 49 LICZN
let lottoNumbers = [];
for (let i = 1; i < 50; i++) {
    lottoNumbers.push(i);
}
// PRZYPISANIE DO TABLICY USERA JEGO TYPOW
let userNumbers = [];
addNumbers.addEventListener('click', function () {
    userNumbers.push(parseInt(userNumbersValue.value));
});
// POKAZYWANIE TYPÓW USERA
showUserNumbersInDiv.addEventListener('click', function () {
    if (userNumbers.length == 0) {
        showUserNumbers.innerHTML = "Nic nie wytypowałeś";
    } else {
        showUserNumbers.innerHTML = userNumbers;
    }
});
// CHOWANIE TYPÓW USERA
hideUserNumbersInDiv.addEventListener('click', function () {
    showUserNumbers.innerHTML = "Schowane typy";
});
// USUNIĘCOE Z TABLICY USERA JEGO TYPOW
removeNumbers.addEventListener('click', function () {
    clearNumbers = confirm("Czy na pewno chcesz wyczyścić swoje typy?");
    if (clearNumbers == true) {
        userNumbers = [];
    };
});
// LOSOWANIE 6 RANDOMOWYCH LICZB Z TABLICY lottoNumbers
let randomNumbers = [];
randomNumberGenerator.addEventListener('click', function () {
    for (let i = 0; i < 6; i++) {
        while (randomNumbers.indexOf(number) != -1) {
            var number = Math.round(Math.random() * (lottoNumbers.length - 1));
        }
        randomNumbers.push(number);
        const div = document.createElement('div');
        div.textContent = number;
        drawnNumbers.appendChild(div);
    };
    // ZLICZANIE PUNKTOW USERA
    let hits = 0;
    randomNumbers.forEach((element) => {
        if (userNumbers.indexOf(element) !== -1) {
            hits++;
        };
    });
    // POKAZYWANIE PUNKTOW USERA W DIVIE
    const addUserHitsToP = document.createElement('p');
    userHitsDiv.textContent = hits;
    userHitsDiv.appendChild(addUserHitsToP);

});