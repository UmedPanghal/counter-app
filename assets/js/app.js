var count = 0;
var displayCount = document.getElementById("count");

var incrementElement = document.getElementById("add-one");
var decrementElement = document.getElementById("less-one");

incrementElement.addEventListener('click', function () {
    if (count < "1") {
        count++;
        displayCount.innerHTML = count;
    } else {
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

