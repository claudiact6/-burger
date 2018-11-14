$(document).ready(function () {
    $("#add").on("click", function () {
        event.preventDefault();
        console.log("clicked");
        var burger = $("#burgertype").val();
        $.ajax("/api/burgers", {
            type: "POST",
            data: {
                burger_name: burger
            }
        }).then(function () {
            location.reload();
        });
    });

    $(document).on("click", ".burger", editBurger);
    $(document).on("blur", ".burger", cancelEdit);

});

function editBurger() {
    console.log("burger clicked");
    var currentBurger = $(this).text();
    console.log(currentBurger);
    $(this).children().hide();
    $(this).children("input.edit").val(currentBurger.text);
    $(this).children("input.edit").show();
    $(this).children("input.edit").focus();
};

function cancelEdit() {
    var currentBurger = $(this).text();
    console.log("canceling edit", currentBurger);
    if (currentBurger) {
      $(this).children().hide();
      $(this).children("input.edit").val(currentBurger.text);
      $(this).children("span").show();
    }
};