let randomNumber1 = Math.floor(6 * Math.random() + 1);
let randomNumber2 = Math.floor(6 * Math.random() + 1);


const setNumber1 = randomNumber1 => {
    return document.querySelector('.img1').setAttribute('src', `images/dice${randomNumber1}.png`);
}
setNumber1(randomNumber1);

const setNumber2 = randomNumber2 => {
    return document.querySelector('.img2').setAttribute('src', `images/dice${randomNumber2}.png`);
}
setNumber2(randomNumber2);

const setWinner = (randomNumber1, randomNumber2) => {
    if (randomNumber1 > randomNumber2) {
        return document.querySelector('h1').textContent = 'Player 1 Wins!';
    } else if (randomNumber1 < randomNumber2) {
            return document.querySelector('h1').textContent = 'Player 2 Wins';
        } else {
            return document.querySelector('h1').textContent = 'Draw!';
        }
    }
setWinner(randomNumber1, randomNumber2); 