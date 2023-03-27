function validateForm() {

    var errormsg = "";



    //Validation 
    if (document.getElementById("name").value == "") {
        errormsg += "Please fill the Full Name field.\n";

    }

    if (document.getElementById("email").value == "") {
        errormsg += "Please fill the E-mail field.\n";

    }


    if (document.getElementById("type_sub").value == "none") {
        errormsg += "Please select the Query Subject field.\n";

    }

    if (document.getElementById("note").value == "") {
        errormsg += "Please fill the Query details.";

    }

    if (errormsg != "") {
        alert(errormsg);
        return false;
    }

    if (errormsg == "") {



        document.getElementById("enquery").style.display = "none";
        document.getElementById("data").style.display = "block";
        document.getElementById("special").style.display = "block";

        document.getElementById('name_input').innerHTML =
            document.getElementById("name").value;
        document.getElementById('email_input').innerHTML =
            document.getElementById("email").value;
        document.getElementById('sub_input').innerHTML =
            document.getElementById("type_sub").value;
        document.getElementById('detail_input').innerHTML =
            document.getElementById("note").value;

    }

}


function editForm() {

    document.getElementById("enquery").style.display = "block";
    document.getElementById("data").style.display = "none";
    document.getElementById("special").style.display = "none";

}





function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}