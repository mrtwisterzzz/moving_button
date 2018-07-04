
let count = 0;

$(document).ready(function() {
    $("h1").click(
        function() {
            count == 15 ? count=0 : count+=1;
            $("#mycount").text(count);
            $(this).toggleClass("JToggle");
        }
    );
})


