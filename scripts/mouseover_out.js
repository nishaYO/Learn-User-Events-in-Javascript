document.querySelector('pre').addEventListener('mouseover', function(){
       document.querySelector('pre').classList.add('style');
});

document.querySelector('pre').addEventListener('mouseout', function(){
    document.querySelector('pre').classList.remove('style');
});