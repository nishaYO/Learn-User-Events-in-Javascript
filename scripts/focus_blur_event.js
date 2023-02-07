const btn = document.getElementById("focus-msg");
const msg = document.getElementById("output");

// creating event handler for focus
function focusHandler(){
   msg.innerText = "Focus on the button detected!";
}

// registering the event focus
btn.addEventListener('focus', focusHandler);

// creating event handler for blur(focus out)
function blurHandler(){
    msg.innerText = '';
    btn.removeEventListener('focus', focusHandler);
}

// registering the event blur
btn.addEventListener('blur', blurHandler);