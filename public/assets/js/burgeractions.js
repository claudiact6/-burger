$(document).ready(function () {
    $("#add").on("click", addBurger);
    $(document).on("click", ".burger", editBurger);
    $(document).on("blur", ".burger", cancelEdit);
    $(document).on("click",".eat", markEaten);

});

function addBurger() {
    var burger = $("#burgertype").val();
    $.ajax("/api/burgers", {
        type: "POST",
        data: {
            burger_name: burger
        }
    }).then(function() {
        location.reload();
    });
};

function updateBurger(burger) {
    $.ajax("/api/burgers", {
        type: "PUT",
        data: burger
    }).then(function() {
        location.reload();
    });
};

function markEaten() {
    var burger = {
        id: parseInt($(this).parent().attr("id")),
        colToUpdate: "devoured",
        value: 1
    };
    console.log(burger);
    updateBurger(burger);
}

function editBurger() {
    var currentBurger = $(this).text();
    console.log(currentBurger);
    $(this).children().hide();
    $(this).children("input.edit").val(currentBurger);
    $(this).children("input.edit").show();
    $(this).children("input.edit").focus();
};

function sendEdit() {

};

function cancelEdit() {
    var currentBurger = $(this).text();
    console.log("canceling edit", currentBurger);
    if (currentBurger) {
      $(this).children().hide();
      $(this).children("input.edit").val(currentBurger.text);
      $(this).children("span").show();
      $(this).children("button").show();
    }
};

