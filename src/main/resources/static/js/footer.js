$(function () {
    // insert the page footer with the formatted current date
    let date = new Date();
    let year = date.getFullYear();
    const months
        = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let month = months[date.getMonth()];
    let day = date.getDate();
    $("body").append("<footer><div id='sheridan' class='container'></div></footer>");
    $("#sheridan")
        .html("Sheridan College, ")
        .append(`${month} ${day}, ${year}`)
        .append(", Anthony Vellone");
});