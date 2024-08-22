function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteLast() {
    let display = document.getElementById('display').innerText;
    document.getElementById('display').innerText = display.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function calculate() {
    let display = document.getElementById('display').innerText;
    try {
        document.getElementById('display').innerText = eval(display);
    } catch (e) {
        document.getElementById('display').innerText = 'Error';
    }
}
