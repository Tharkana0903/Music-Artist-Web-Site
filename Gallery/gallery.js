//Select background
function backgroundDrop() {
	var slctdColor = document.getElementById("drp1").value;

	switch (slctdColor) {
        case "white":
			document.body.style.backgroundColor = "white";
			break;
		case "red":
			document.body.style.backgroundColor = "red";
			break;
		case "yellow":
			document.body.style.backgroundColor = "yellow";
			break;
		case "blue":
			document.body.style.backgroundColor = "blue";
			break;
		case "orange":
			document.body.style.backgroundColor = "orange";
			break;
        case "green":
			document.body.style.backgroundColor = "green";
			break;
		default:
			document.body.style.backgroundColor = 'black';
	}
}

//Select Text 
function backgroundDrop2() {
	var selectedtxtColor = document.getElementById("drp2").value;

	if (selectedtxtColor == "red") {
		document.body.style.color = selectedtxtColor;
		var elm = document.getElementsByTagName("p");
		for (var i = 0; i < elm.length; i++) {
			elm[i].style.color = "red";
		}
		removeProperty();
	} else if (selectedtxtColor == "black") {
		document.body.style.color = selectedtxtColor;
		var elm = document.getElementsByTagName("p");
		for (var i = 0; i < elm.length; i++) {
			elm[i].style.color = "black";
		}
        removeProperty();
	} else if (selectedtxtColor == "yellow") {
		document.body.style.color = selectedtxtColor;
		var elm = document.getElementsByTagName("p");
		for (var i = 0; i < elm.length; i++) {
			elm[i].style.color = "yellow";
		}
		removeProperty();
	} else if (selectedtxtColor == "blue") {
		document.body.style.color = selectedtxtColor;
		var elm = document.getElementsByTagName("p");
		for (var i = 0; i < elm.length; i++) {
			elm[i].style.color = "blue";
		}
		removeProperty();
	} else if (selectedtxtColor == "purple") {
		document.body.style.color = selectedtxtColor;
		var elm = document.getElementsByTagName("p");
		for (var i = 0; i < elm.length; i++) {
			elm[i].style.color = "purple";
		}
		removeProperty();
	} else if (selectedtxtColor == "green") {
		document.body.style.color = selectedtxtColor;
		var elm = document.getElementsByTagName("p");
		for (var i = 0; i < elm.length; i++) {
			elm[i].style.color = "green";
		}
		removeProperty();
	} else {
		document.body.style.color = "aliceblue" ;
		var elm = document.getElementsByTagName("p");
		for (var i = 0; i < elm.length; i++) {
			elm[i].style.color = "aliceblue";
			;
		}
		removeProperty();
	}
}