var about = 'My name is Denis Plashchik. I am frontend developer.';
var mySkills = 'Html5, CSS3, JavaScript';
var main = document.querySelector('.main');
var txtput = function(elButton){
    var buttonClicked = elButton.getAttribute('data-button');
        if (buttonClicked == 1) {
            main.innerHTML = about;
        } else if (buttonClicked == 2) {
            main.innerHTML = mySkills;
        } else if (buttonClicked == 3) {
            console.log('3');
        } else if (buttonClicked == 4) {
            console.log('4');
        } else {
            console.log('5');
        }
}

var 
    canv = document.getElementById('canvas'),
    ctx = canv.getContext('2d');

canv.width = 200px;
canv.height = 200px;
ctx.fillStyle = 'magenta';
ctx.fillRect(300, 300, 300, 300);