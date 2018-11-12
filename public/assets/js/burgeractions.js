$(document).ready(function() {
    $("#add").on("click", function() {
        event.preventDefault();
        console.log("clicked");
        var burger = $("#burgertype").val();
        $.ajax("/api/burgers", {
            type: "POST",
            data: {
                burger_name: burger
            }
        }).then(function() {
            location.reload();
        });
    });

});