var name;
var password;

function logging() {
let name = document.getElementById("htmlTName").value;
let password = document.getElementById("htmlTPassword").value;

if (name == "fizzah" && password == "123") {
    window.location.href = "teacherCreatorPage.html";
}

if (name !== "fizzah" && password == "123") {
    alert("Invalid Name Entry");
}

if (name == "fizzah" && password !== "123") {
    alert("Invalid Password Entry");
}

if (name !== "fizzah" && password !== "123") {
    alert("Invalid Password and Name Entry");
}
}

