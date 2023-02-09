// const div = document.getElementById("bubbling");
// div.addEventListener('click', (e)=>e.currentTarget.classList.toggle('cyan'));

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

const eventoutput = document.getElementById('eventoutput');

const eventhandler = (e)=>{
    eventoutput.textContent += ` This click affected ${e.currentTarget.id}.`;
};
box1.addEventListener('click', eventhandler);
box2.addEventListener('click', eventhandler);
box3.addEventListener('click', eventhandler);
