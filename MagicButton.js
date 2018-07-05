
let count = 0;

let click = document.querySelector("#click");
let h3 = document.querySelector("h3");


let timer = setInterval(hide,1500);

function hide() {
    count +=1;
    h3.textContent = count;

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





