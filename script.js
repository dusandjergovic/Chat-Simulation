// document.querySelector("#btn").addEventListener('click', function() {
//     let dugme = document.querySelector("#userInputedText");
//     console.log(dugme);
// })

$(document).ready(function() {

    let isMessArived = false;

    $("#btn").click(function() {

        let userInputText = $("#userInputedText").val();

        if(isMessArived) {
            let textMessLeft = $("<p>");
            textMessLeft.text(userInputText)
            $("#chatLeft").append(textMessLeft)
            isMessArived = false
        } else {
            let textMessRight = $("<p>");
            textMessRight.text(userInputText)
            $("#chatRight").append(textMessRight)
            isMessArived = true
        }

        $("#userInputedText").val('');
        
    })


})