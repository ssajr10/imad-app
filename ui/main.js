console.log('Loaded!');
var element=document.getElementById('main-text');

element.innerHTML='New value';


var img=document.getElementById('img');
img.onClick=function () {
    img.style.marginLeft='100px';
};