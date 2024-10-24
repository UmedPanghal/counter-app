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

const currentValueElement = document.getElementById('current-value');
const addOneButton = document.getElementById('add-one');
const saveButton = document.getElementById('save');
const previousValuesElement = document.getElementById('previous-values');


let currentValue = 0;
const previousValues = [];


function updateCurrentValue() {
    currentValueElement.textContent = currentValue;
}


addOneButton.addEventListener('click', () => {
    currentValue++;
    updateCurrentValue();
});


saveButton.addEventListener("click", () => {
    if (currentValue > 0) {
        previousValues.push(currentValue);
        previousValuesElement.textContent = previousValues.join(", ");
    } else {
        alert("Current value must be greater than 0 to save.");
    }
});


function updatePreviousValues() {
    previousValuesElement.textContent = previousValues.join(', ');
}


updateCurrentValue();
updatePreviousValues();
function myfunction() {
    document.getElementById("save").innerHTML = "Saved"

}
