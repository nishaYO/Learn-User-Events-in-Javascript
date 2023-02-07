const change = document.getElementById("change-color");

// generating random color
function random(number){
    return Math.floor(Math.random()*(number+1));
}

change.addEventListener('click', function () {
    document.body.style.backgroundColor = `rgb(${random(255)},${random(255)},${random(255)})`;
});