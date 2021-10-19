var coorA;
var coorB;
var btn = document.getElementsByTagName("button");
var lastMouseX;
var lastMouseY;
console.log(btn);
window.onload = function() {
        for( i = 0; i<300; i++){
            btn.style.top = btn.offsetTop + i;
            btn.style.left = btn.offsetLeft + i;
        }
  };
