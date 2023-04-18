function getFormvalue() {
    // var firstName = document.forms["form1"]["fname"].value;
    // var lastName = document.forms["form1"]["lname"].value;
  
    // // Display the full name using alert()
    // alert('First Name: ' + firstName + 'Last Name: ' + lastName);
    
    // // Prevent form submission
    // return false;

        var firstName = document.forms["form1"]["fname"].value;
        var lastName = document.forms["form1"]["lname"].value;
        var middleName = document.forms["form1"]["mname"].value; // Add middle name
    
        // Display the full name using alert()
        var fullName = 'First Name: ' + firstName;
        if (middleName) {
            fullName += ' Middle Name: ' + middleName; // Include middle name if provided
        }
        fullName += ' Last Name: ' + lastName;
        alert(fullName);
    
        // Prevent form submission
        return false;
    }
    
