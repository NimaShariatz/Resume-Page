var options = document.getElementsByClassName("option_svg");

var education_option  = options[0];
var projects_option  = options[1];
var professional_option  = options[2];
var aboutme_option = options[3];





const sections = [document.getElementById("Education_section"), document.getElementById("Projects_section"), 
    document.getElementById("Professional_section"),
    document.getElementById("Aboutme_section")
];

var currentSection = 0;
var previousSection = 0;


function clear_current(current){
    sections[current].style.display = "block"
    sections[previousSection].style.display = "none"


}




education_option.addEventListener("click", function(){
    console.log("ed is clicked");
    previousSection = currentSection;
    if(currentSection!=0){
        currentSection=0;
        clear_current(currentSection, previousSection);
    }
    


});



projects_option.addEventListener("click", function(){
    console.log("proj is clicked");
    previousSection = currentSection;
    if(currentSection!=1){
        currentSection=1;
        clear_current(currentSection, previousSection);
    }


});


professional_option.addEventListener("click", function(){
    console.log("prof is clicked");
    previousSection = currentSection;
    if(currentSection!=2){
        currentSection=2;
        clear_current(currentSection, previousSection);
    }
    


});


aboutme_option.addEventListener("click", function(){
    console.log("about is clicked");
    previousSection = currentSection;
    if(currentSection!=3){
        currentSection=3;
        clear_current(currentSection, previousSection);
    }


});
