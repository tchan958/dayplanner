$(document).ready(function() {

    //this is for save button, below is jquery.click event so it knows what to do
    $(".btn-save").on("click", function(event){
        var eventDescription = $(this).closest('tr').find('textarea').val(); 
        var time = $(this).closest('tr').find('.hour').val(); 
        console.log("success", eventDescription, time)

        //Set Localstorage 
        localStorage.setItem(time, eventDescription)
    })

});