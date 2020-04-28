$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        console.log($(this));
        var newdevoured = $(this).data("newdevoured");
        var newdevouredState = {
            devoured: newdevoured
        };
        console.log(newdevoured)
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newdevouredState
        }).then(
            function () {
                console.log("Changed devoured to", newdevoured);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#bu").val().trim(),
            devoured: $("[name=devoured]:checked").val()
        };
        console.log(newBurger)
        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });
});