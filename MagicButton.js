
let count = 0;

$(document).ready(function() { 
    let count = 0;
    $("h1").click(function() {
        $(this).click(function() {
            count++;
        })
    })
}) 

document.getElementById("mycount").innerHTML = count;