document.getElementById('dbl-click').addEventListener('dblclick', function(){
     document.querySelectorAll('button').forEach(function(button){
        button.classList.toggle('yellow');
     });
});

