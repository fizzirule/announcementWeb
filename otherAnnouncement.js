var teacherDetails = [];

function gettingAnnouncements() {
    teacherDetails = JSON.parse(localStorage.getItem("teacherDetailsKey"));
    document.getElementById("announcements").innerHTML = teacherDetails.join("<br> <br>");
}