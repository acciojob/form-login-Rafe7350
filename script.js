function getFormvalue() {
    var firstName = document.forms["form1"]["fname"].value;
    var lastName = document.forms["form1"]["lname"].value;
  
    // Display the full name using alert()
    alert('First Name: ' + firstName + '\nLast Name: ' + lastName);
    
    // Prevent form submission
    return false;
}
