
let count = -1;

let click = document.querySelector("#click");
let span = document.querySelector("span");


let timer = setInterval(hide,1500);

function hide() {
    count +=1;
    span.textContent = 5-count;

    $("#click").click(function() {
        clearInterval(1);
        $(this).css({"color" : "red"});        
    }) 

    if(count==5) 
    {
        click.classList.add("hideelement");
        clearInterval(1);
    }
}

timer;





