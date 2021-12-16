function checkCreds() {
  console.log("checkCreds() function started");
  var firstName = document.getElementById("fName").value;
  var lastName = document.getElementById("lName").value;
  var badgeNum = document.getElementById("badgeID").value;
  var fullName = firstName + " " + lastName;
  // alert("Hello, " + fullName);

  if (fullName.length > 20 || fullName.length < 2) {
    document.getElementById("loginStatus").innerHTML =
      "Invalid full name! Please try again...";
  } else if (badgeNum > 999 || badgeNum < 0) {
    document.getElementById("loginStatus").innerHTML =
      "Invalid Badge Number! Please Try Agin...";
  } else {
    alert("Welcome, " + fullName);
    location.replace("UATSpacePage.html");
  }
}
