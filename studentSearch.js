/*setting the global variables that are going to be used in this page so that
they can be accessed from anywhere throughout this code*/

//global variables for each grade
var studentGrade9;
var studentGrade10;
var studentGrade11;
var studentGrade12;
var studentGradeAll;

//global variables for each gender
var studentGenderFemale;
var studentGenderMale;
var studentGenderAll;
var studentGenderOther;

//global variables for  club
var studentClub;

/*this is the function that will be called which is set on the button in the
HTML page for student result when it is clicked*/
function getStudentData() {
    /*when the specific grade checkboxes are chosen, the global variables are
    declared to get the elements by their ids, and the keys, which are custom
    named to the specific variable, will set the item to store the values in the
    local storage which will be accessed when needed*/
    studentGrade9 = document.getElementById("htmlSGrade9").checked;
    localStorage.setItem("studentGrade9Key", studentGrade9);
    studentGrade10 = document.getElementById("htmlSGrade10").checked;
    localStorage.setItem("studentGrade10Key", studentGrade10);
    studentGrade11 = document.getElementById("htmlSGrade11").checked;
    localStorage.setItem("studentGrade11Key", studentGrade11);
    studentGrade12 = document.getElementById("htmlSGrade12").checked;
    localStorage.setItem("studentGrade12Key", studentGrade12);
    studentGradeAll = document.getElementById("htmlSAllGrades").checked;
    localStorage.setItem("studentGradeAllKey", studentGradeAll);

    /*when the specific gender checkboxes are chosen, the global variables are
    declared to get the elements by their ids, and the keys, which are custom named
    to the specific variable, will set the item to store the values in the local
    storage which will be accessed when needed*/
    studentGenderFemale = document.getElementById("htmlSFemale").checked;
    localStorage.setItem("studentGenderFemaleKey", studentGenderFemale);
    studentGenderMale = document.getElementById("htmlSMale").checked;
    localStorage.setItem("studentGenderMaleKey", studentGenderMale);
    studentGenderOther = document.getElementById("htmlSOther").checked;
    localStorage.setItem("studentGenderOtherKey", studentGenderOther);
    studentGenderAll = document.getElementById("htmlSAll").checked;
    localStorage.setItem("studentGenderAllKey", studentGenderAll);

    /*when a specific club is chosen from the dropdown list, the global variable
    will get the element by its id, and the kes, which is custom named to the
    variable, will set the item to store the specific value in the local storage*/
    studentClub = document.getElementById("htmlSClub").value;
    localStorage.setItem("studentClubKey", studentClub);
}

