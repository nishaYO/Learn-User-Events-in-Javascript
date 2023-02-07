// add and remove hidden class in the message box as soon as started typing in the text box. and show the last key pressed in the message box.
let keys = document.getElementById('msg');
document.getElementById('text').addEventListener('keydown', function(e){
   keys.classList.remove('hidden');
   keys.innerText = `${keys.innerText}${e.key}`;
});