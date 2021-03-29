let link = localStorage["contact-data-link"];

$(function(){
    $.getJSON(link, displayContactData);
});

function displayContactData(contact) {
    console.log(contact);
    $("#fullName").text(contact.fullName);
    $("#contactType").text(contact.contactType?'Staff':'Customer');
    $("#email").text(contact.email);
    $("#phoneNumber").text(contact.phoneNumber);
    $("#address").text(contact.address);

}
