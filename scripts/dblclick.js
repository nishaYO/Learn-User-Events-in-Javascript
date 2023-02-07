document.getElementById('dbl-click').addEventListener('dblclick', function(){
     document.querySelectorAll('button').forEach(function(button){
        button.style.backgroundColor = 'yellow';
     });
});