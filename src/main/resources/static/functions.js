function checkjQuery() {
    if (typeof jQuery !== undefined) {
        $("#jQueryStatus").html("<p style='background-color: lightgreen'>jQuery is ready!</p>");
    }
}

function preventFormSubmitDefault(sendMessageForm) {
    sendMessageForm.submit(function(event) {
        event.preventDefault();
        sendMessage($("#message").val());
    })
}

function sendMessage(message) {
    let msg = {};
    msg["message"] = message;
    $.ajax({
        url: "/api/sendMessage",
        type: "POST",
        contentType: "application/JSON",
        data: JSON.stringify(msg),
        success: function(data) {
            $("#chatwindow").append("<p style='color: darkmagenta'> You say:  " + data + "</p>" +
                                    "<p> They say: " + "I don't know, man..." + "</p>");
        },
        error: function() {
            console.log("Error in AJAX request.")
        }
    })
}

function setText(textarea) {
    $("#solveme").val("x = x, 3y * x = 8, f(2) = 87, log(x) * n = O, 2 * 2(x * y) = 0.5")
}