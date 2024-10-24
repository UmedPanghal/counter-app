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