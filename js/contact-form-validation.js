const form = $("form");
const modal = $("#validation-modal");
const closeModal = $("button.close");
const firstName = $("#insightly_firstName");
const lastName = $("#insightly_lastName");
const email = $("insightly_Email");
const phone = $("insightly_Phone");

form.submit( function (event) {
    if (
        $.trim(firstName.val()) == '' ||
        $.trim(lastName.val()) == '' ||
            (
            $.trim(email.val()) == '' &&
            $.trim(phone.val()) == ''
            )
       ) {
        modal.css("left", "0");
        event.preventDefault();
    }
});

closeModal.click( function() {
    modal.css("left", "-1000px");
});



