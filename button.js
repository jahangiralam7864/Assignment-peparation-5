function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const blueButton = document.getElementById('make-blue');
blueButton.onclick = makeblue;
function makeblue() {
    document.body.style.backgroundColor = 'blue';
}

const grayButton = document.getElementById('make-gray-button');
grayButton.onclick = function () {
    document.body.style.backgroundColor = 'gray';
}

const goldenButton = document.getElementById('make-golden');
goldenButton.addEventListener('click',makeGoldenutton);
function makeGoldenutton() {
    document.body.style.backgroundColor = 'gold';
}
