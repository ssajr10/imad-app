console.log('Loaded!');
var element=document.getElementById('main-text');

element.innerHTML='New value';


var img=document.getElementById('madi');
img.onClick=function () {
    img.style.marginRight='300px';
};