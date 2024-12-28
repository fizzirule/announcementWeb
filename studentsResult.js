//all of the global variables for the checking of if statements to determince a match

/*teacher global variables for each grade in empty arrays so they can store more than
one boolean for multiple announcements*/
var teacherGrade9 = [];
var teacherGrade10 = [];
var teacherGrade11 = [];
var teacherGrade12 = [];
var teacherGradeAll = [];

/*teacher global variables for each gender in empty arrays so they can store more than
one boolean for multiple announcements*/
var teacherGenderFemale = [];
var teacherGenderMale = [];
var teacherGenderOther = [];
var teacherGenderAll = [];

/*teacher global variables for each club in an empty array so it can store more than one
option for multiple announcements*/
var teacherClub = [];

//student global variables for each grade
var studentGrade9;
var studentGrade10;
var studentGrade11;
var studentGrade12;
var studentGradeAll;

//student global variables for each gender
var studentGenderFemale;
var studentGenderMale;
var studentGenderAll;
var studentGenderOther;

/*global student variable for club and teacher details which is an empty array that stores
multiple announcements' details*/
var studentClub;
var teacherDetails = [];

/*variable that stores all of the announcements that need to be displayed on the result page
that are selected from the if statement*/
var announcementHolder = "";

function displayResults() {
    /*variables are declared again from the global variables above where the information in the
    local storage is accessed through the get item property with the specific key for both
    student and teacher*/

    /*JSON.parse() converts the key's contents that is retreived with the getItem property
    back to an array for easier programming*/
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

    /*JSON.parse() is also used with student variables although it is not needed because they are
    already not saved as strings to stay on the safe side of preventing the risks of errors*/
    studentGrade9 = JSON.parse(localStorage.getItem("studentGrade9Key"));
    studentGrade10 = JSON.parse(localStorage.getItem("studentGrade10Key"));
    studentGrade11 = JSON.parse(localStorage.getItem("studentGrade11Key"));
    studentGrade12 = JSON.parse(localStorage.getItem("studentGrade12Key"));
    studentGradeAll = JSON.parse(localStorage.getItem("studentGradeAllKey"));

    studentGenderFemale = JSON.parse(localStorage.getItem("studentGenderFemaleKey"));
    studentGenderMale = JSON.parse(localStorage.getItem("studentGenderMaleKey"));
    studentGenderOther = JSON.parse(localStorage.getItem("studentGenderOtherKey"));
    studentGenderAll = JSON.parse(localStorage.getItem("studentGenderAllKey"));
    studentClub = localStorage.getItem("studentClubKey");

    /*for statement has the condition of declaring i as a counter for the indexes in the arrays and
    to check them until the if statements complete their functionality
    but for loop has to stay inside the amount limit of how many indexes the teacherGenderAll array has*/
    for (let i = 0; i < teacherGenderAll.length; i++) {
        /*if statement individually checks for the checkbox values of each of the same type of variables
        to be the same while also checking for those values to not be null*/

        /*for dropdown lists, it checks that the variables' values are the same and lets the
        condition work even if either student or teacher dropdown has the value of "All" when being evaluated*/
        if ((teacherClub[i] == studentClub || teacherClub[i] == "All" || studentClub == "All") &&
            ((studentGrade9 != null && teacherGrade9[i] != null) && (studentGrade9 == true && teacherGrade9[i] == true) ||
                (studentGrade10 != null && teacherGrade10[i] != null) && (studentGrade10 == true && teacherGrade10[i] == true) ||
                (studentGrade11 != null && teacherGrade11[i] != null) && (studentGrade11 == true && teacherGrade11[i] == true) ||
                (studentGrade12 != null && teacherGrade12[i] != null) && (studentGrade12 == true && teacherGrade12[i] == true) ||
                (studentGradeAll != null && teacherGradeAll[i] != null) && (studentGradeAll == true || teacherGradeAll[i] == true)) &&
            ((studentGenderFemale != null && teacherGenderFemale[i] != null) && (studentGenderFemale == true && teacherGenderFemale[i] == true) ||
                (studentGenderMale != null && teacherGenderMale[i] != null) && (studentGenderMale == true && teacherGenderMale[i] == true) ||
                (studentGenderOther != null && teacherGenderOther[i] != null) && (studentGenderOther == true && teacherGenderOther[i] == true) ||
                (studentGenderAll != null && teacherGenderAll[i] != null) && (studentGenderAll == true || teacherGenderAll[i] == true))) {
            /*the specific announcements that are stored in the teacher details array and follow the if statement conditions are
            commanded to be stored into the empty announcement holder variable*/
            announcementHolder += teacherDetails[i];
            announcementHolder += "<br>";
            announcementHolder += "<br>";
        }
    }
    document.getElementById("htmlSAnnouncementDetail").innerHTML = announcementHolder;
    /*this if statement is almost like an else statement for the if statement above where it says that if nothing
    is entered into the announcement holder variable, it should display the nothing text*/
    if (announcementHolder == "") {
        document.getElementById("htmlSAnnouncementDetail").innerHTML = "Sorry, no applicable results were found.";
    }
}



            /*announcementHolder += teacherDetails[i];
            var sep = document.createElement("p");
            sep.setAttribute("id", "each");
            var node = document.createTextNode(announcementHolder);
            sep.appendChild(node);
            var element = document.getElementById("htmlSAnnouncementDetail");
            element.appendChild(sep);
            announcementHolder = announcementHolder.slice(0,1);*/