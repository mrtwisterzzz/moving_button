
let count = 0;
let timercount = 0;

let click = document.querySelector(".click");
let h3 = document.querySelector("h3");

let timer = setInterval(function() {
    timercount +=1;
},3000);

// $(document).ready(function() {
//     $("h1").click(
//         function() {
//             count == 15 ? count=0 : count+=1;
//             $("#mycount").text(count);
//             $(this).toggleClass("JToggle");
//         }
//     );
// }) 


timercount > 5 ? click.classList.add("hideelement") : timercount;

timer;
h3.textContent = timercount;
hide();


