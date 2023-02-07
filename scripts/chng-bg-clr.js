const change_btn = document.getElementById("change-color");

// generating random color
function random(number){
    return Math.floor(Math.random()*(number+1));
}

// creating event handler
function clickhandler(){
    random_color = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor = random_color;
}

// creating event listener
change_btn.addEventListener('click', clickhandler);