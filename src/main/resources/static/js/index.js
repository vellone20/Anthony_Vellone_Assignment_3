$(function(){
    $.getJSON("api/contacts", displayContactTable);
});

function displayContactTable(data) {
    console.log(data);

    let contacts = data["_embedded"].contacts;

    if(contacts.length > 0){
        $("#no_data_message").hide();

        let tbody$ = $("#data_table tbody");

        tbody$.html("");
        contacts.forEach(function(contact, index){

            let link = contact["_links"].self.href;

            tbody$.append(
                `<tr>
                    <th scope="row" class="align-middle">${index + 1}</th>
                    <td class="align-middle">${contact.fullName}</td>
                    <td class="align-middle">${contact.contactType}</td>
                    <td>
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link" href="contactDetails.html" data-link="${link}"> 
                                <i class="material-icons">info</i>&nbsp;Info</a>
                            </li>
                        </ul>
                    </td>
                </tr>`);
        });
        $("#data_table a").click(function(){
            localStorage["contact-data-link"] = $(this).data("link");
        });
    }
    else {
        $("#data_table").hide();
    }
}