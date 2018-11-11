$(document).ready(function() {
    $(document).on("submit", "#addburger", function() {
        event.preventDefault();
        var burger = $(this).val();
        console.log(burger);
    });

});