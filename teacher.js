/*setting the global variables that are going to be used in this page so that they
can be accessed from anywhere throughout this code*/
var counter = 0;

/*global variables for each grade in empty arrays so they can store more than one
boolean for multiple announcements*/
var teacherGrade9 = [];
var teacherGrade10 = [];
var teacherGrade11 = [];
var teacherGrade12 = [];
var teacherGradeAll = [];

/*global variables for each gender in empty arrays so they can store more than one
boolean for multiple announcements*/
var teacherGenderFemale = [];
var teacherGenderMale = [];
var teacherGenderOther = [];
var teacherGenderAll = [];

/*global variables for each club and teacher announcement detail textarea in an empty
array so it can store more than one option for multiple announcements*/
var teacherClub = [];
var teacherDetails = [];

/*this is the function that will be called which is on the button in the HTML page
for teacher creator page when it is clicked*/
function getTeacherInput() {
    /*when the specific grade checkboxes are chosen, the global variables are declared
    to get the elements by their ids, and the keys, which are custom named to the
    specific variable, will set the item to store the values in the local storage which
    will be accessed when needed.*/
    teacherGrade9[counter] = document.getElementById("htmlTGrade9").checked;
    localStorage.setItem("teacherGrade9Key", JSON.stringify(teacherGrade9));
    teacherGrade10[counter] = document.getElementById("htmlTGrade10").checked;
    localStorage.setItem("teacherGrade10Key", JSON.stringify(teacherGrade10));
    teacherGrade11[counter] = document.getElementById("htmlTGrade11").checked;
    localStorage.setItem("teacherGrade11Key", JSON.stringify(teacherGrade11));
    teacherGrade12[counter] = document.getElementById("htmlTGrade12").checked;
    localStorage.setItem("teacherGrade12Key", JSON.stringify(teacherGrade12));
    teacherGradeAll[counter] = document.getElementById("htmlTAllGrades").checked;
    localStorage.setItem("teacherGradeAllKey", JSON.stringify(teacherGradeAll));

    /*when the specific gender checkboxes are chosen, the global variables are declared
    toget the elements by their ids and the keys, which are custom named to the specific
    variable,will set the item to store the values in the local storage which will be
    accessed when needed.*/
    teacherGenderFemale[counter] = document.getElementById("htmlTFemale").checked;
    localStorage.setItem("teacherGenderFemaleKey", JSON.stringify(teacherGenderFemale));
    teacherGenderMale[counter] = document.getElementById("htmlTMale").checked;
    localStorage.setItem("teacherGenderMaleKey", JSON.stringify(teacherGenderMale));
    teacherGenderOther[counter] = document.getElementById("htmlTOther").checked;
    localStorage.setItem("teacherGenderOtherKey", JSON.stringify(teacherGenderOther));
    teacherGenderAll[counter] = document.getElementById("htmlTAll").checked;
    localStorage.setItem("teacherGenderAllKey", JSON.stringify(teacherGenderAll));

    /*when a specific club is chosen from the dropdown list, the global variable will get
    the element by its id, and the kes, which is custom named to the variable, will set
    the item to store the specific value in the local storage.*/
    teacherClub[counter] = document.getElementById("htmlTClub").value;
    localStorage.setItem("teacherClubKey", JSON.stringify(teacherClub));

    /*when the announcement is written in the text area and the submit button is pressed,
    the message will be saved into the local storage with a key and value for storage.*/
    teacherDetails[counter] = document.getElementById("htmlTAnnouncementDetail").value;
    localStorage.setItem("teacherDetailsKey", JSON.stringify(teacherDetails));

    /*this keeps the counter in each teacher variable array to be increasing by the
    interval of one everytime that this function runs*/
    counter++;
}

/*this function allows the announcement local storage values to stay in their place in
the local storage even after the browser tab is closed*/
function getExistingAnnouncements() {
    /*this if statement commands that when the mentioned teacher variable array does not
    have a null value, it should make the counter of the arrays for every index to be the
    same length as one of the teacher variable array because all of them increase at the
    same time by the same number*/
    if (JSON.parse(localStorage.getItem("teacherGrade9Key")) != null) {
        teacherGrade9 = JSON.parse(localStorage.getItem("teacherGrade9Key"));
        teacherGrade10 = JSON.parse(localStorage.getItem("teacherGrade10Key"));
        teacherGrade11 = JSON.parse(localStorage.getItem("teacherGrade11Key"));
        teacherGrade12 = JSON.parse(localStorage.getItem("teacherGrade12Key"));
        teacherGradeAll = JSON.parse(localStorage.getItem("teacherGradeAllKey"));

        teacherGenderFemale = JSON.parse(localStorage.getItem("teacherGenderFemaleKey"));
        teacherGenderMale = JSON.parse(localStorage.getItem("teacherGenderMaleKey"));
        teacherGenderOther = JSON.parse(localStorage.getItem("teacherGenderOtherKey"));
        teacherGenderAll = JSON.parse(localStorage.getItem("teacherGenderAllKey"));
        teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));
        teacherDetails = JSON.parse(localStorage.getItem("teacherDetailsKey"));
        counter = teacherGrade9.length;
    }
}

