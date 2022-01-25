// external Java script is made for the form validation
function validatefrom() {
    var fname = document.forms["contactForm"]["firstname"].value;
    var mail = document.forms["contactForm"]["email"].value;
    var gender = document.forms["contactForm"]["gender"].value;
    var message = document.forms["contactForm"]["message"].value;
    var lname = document.forms["contactForm"]["lastname"].value;

    // if-else statement 
    if (fname == "" || mail == "" || message == "" || lname == "") {
        alert("The field is empty. Please fill the form.");
    } else {
        alert("Thank you for the message.");
    }


}