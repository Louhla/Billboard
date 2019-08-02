$(document).ready(function () {
    $("#plus").click(function () {
        $("#input-form").css("display", "block");
        $("#input-form-buttons").css("display", "block");
        $("#plus").css("display", "none");
        $("#no-posts").css("display", "none");
    });

    $("#close").click(function (e) {
        event.preventDefault();
        $("#input-form-buttons").css("display", "none");
        $("#input-form").css("display", "none");
        $("#plus").css("display", "block");
    });

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + ', ' + dd + ', ' + yyyy + '.';
    
    $("#date").text(today)
})
