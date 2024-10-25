//  counter-app 
var count = 0;
var displayCount = document.getElementById("count");

var incrementElement = document.getElementById("add-one-increase");
var decrementElement = document.getElementById("less-one");

incrementElement.addEventListener('click', function () {
    if (count < "1") {
        count++;
        displayCount.innerHTML = count;
    }
    else {
        count++;
        displayCount.innerHTML = count;
    }
});
decrementElement.addEventListener('click', function () {
    if (count != "0") {
        count--;
        displayCount.innerHTML = count;
    }
});



// advanced counter
let currentValue = 0;
let previousValues = [];

function addOne() {
    currentValue++;
    document.getElementById("currentValue").textContent = currentValue;
}

function save() {
    if (currentValue !== 0) {
        previousValues.push(currentValue);
        document.getElementById("previousValues").textContent = previousValues.join(", ");
        currentValue = 0;
        document.getElementById("currentValue").textContent = currentValue;
    } else {
        alert("Current value must be greater than 0 to save.");
    }
}

// text-editior

const textArea = document.getElementById('text-area');
const colorSelect = document.getElementById('color');
const fontSizeSelect = document.getElementById('font-size');
const alignmentSelect = document.getElementById('alignment');
const fontFamilySelect = document.getElementById('font-family');
const textDecorationSelect = document.getElementById('text-decoration');
const fontWeightSelect = document.getElementById('font-weight');

colorSelect.addEventListener('change', () => {
    textArea.style.color = colorSelect.value;
});

fontSizeSelect.addEventListener('change', () => {
    textArea.style.fontSize = fontSizeSelect.value + 'px';
});

alignmentSelect.addEventListener('change', () => {
    textArea.style.textAlign = alignmentSelect.value;
});

fontFamilySelect.addEventListener('change', () => {
    textArea.style.fontFamily = fontFamilySelect.value;
});

textDecorationSelect.addEventListener('change', () => {
    textArea.style.textDecoration = textDecorationSelect.value;
});

fontWeightSelect.addEventListener('change', () => {
    textArea.style.fontWeight = fontWeightSelect.value;
});
