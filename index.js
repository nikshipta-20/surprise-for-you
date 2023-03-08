function changecontent(){
    $("h1").text("Will you come for a date with me tonight?🪄");
}

$("h1").on("mouseover", function() {
    if(document.querySelector("h1").textContent == "Actually, I want to say something to you.."){
        $("h1").fadeOut();
    }
    setTimeout(function() {
        changecontent();
        $("h1").fadeIn();
    }, 3000);
});

