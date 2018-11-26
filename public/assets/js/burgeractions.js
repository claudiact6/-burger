$(document).ready(function () {
    $("#add").on("click", addBurger);
    $("#burgertype").on("keyup", function(event) {
        var key = event.which;
        if(key === 13) {
            addBurger();
        };
    });
    $(document).on("click", ".burger", editBurger);
    $(document).on("keyup", ".burger", sendEdit);
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
};

function editBurger() {
    var currentBurger = $(this).text();
    console.log(currentBurger);
    $(this).children().hide();
    $(this).children("input.edit").val(currentBurger);
    $(this).children("input.edit").show();
    $(this).children("input.edit").focus();
};

function sendEdit(event) {
    console.log($(this).attr("id"))
    var updatedBurger = {
        id: parseInt($(this).attr("id")),
        colToUpdate: "burger_name",
        value: $(this).children("input.edit").val()
    };
    console.log(updatedBurger);
    if (event.which === 13) {
        $(this).blur();
        updateBurger(updatedBurger);
      };
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

