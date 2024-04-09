
$(document).ready(function() {

    let isMessArived = false;

    $("#btn").click(function() {

        let userInputText = $("#userInputedText").val();

        if(isMessArived) {
            let textMessLeft = $("<p>");
            let containerForMessLeft = $("<div>")
            containerForMessLeft.addClass("chatLeft")
            textMessLeft.text(userInputText)
            containerForMessLeft.append(textMessLeft)
            $("#containerChatLeft").append(containerForMessLeft)
            isMessArived = false
        } else {
            let textMessRight = $("<p>");
            let containerForMessRight = $("<div>")
            containerForMessRight.addClass("chatRight")
            textMessRight.text(userInputText);
            containerForMessRight.append(textMessRight)
            $("#containerChatRight").append(containerForMessRight)
            isMessArived = true
        }

        $("#userInputedText").val('');
        
    })


})