$(document).ready(function () {
    $(".hidden p").hide();
    $("#design").click(function () {
        $("#design p").toggle();
        $("#design show img").toggle();
    })
    $("#development").click(function () {
        $("#development p").toggle();
        $("#development show img").toggle();
    })
    $("#management").click(function () {
        $("#management p").toggle();
        $("#management show img").toggle();

    })
    $("#contact").submit(function (e) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        if (name == "" || email == "") {
            alert("Cannot submit without name and email");
        } else {
            alert("thank you " + name + " \n message submitted successfully")
        }
    });
    $(".padd").hover(function() {
        $(this).children(".card-1").fadeToggle(1000, "linear");
        
       });

   
});
