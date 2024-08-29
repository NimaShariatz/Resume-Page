var options = document.getElementsByClassName("option_svg");

options[0].classList.add("chosen_option");





const sections = [document.getElementById("Education_section"), document.getElementById("Projects_section"), 
    document.getElementById("Professional_section"),
    document.getElementById("Aboutme_section")
];

var currentSection = 0;
var previousSection = 0;


function display_new(current){
    sections[current].style.display = "block"
    sections[previousSection].style.display = "none"

    options[current].classList.add("chosen_option");

    options[previousSection].classList.remove("chosen_option");
}




options[0].addEventListener("click", function(){
    previousSection = currentSection;
    if(currentSection!=0){
        currentSection=0;
        display_new(currentSection, previousSection);
    }




});



options[1].addEventListener("click", function(){
    previousSection = currentSection;
    if(currentSection!=1){
        currentSection=1;
        display_new(currentSection, previousSection);
    }


});


options[2].addEventListener("click", function(){
    previousSection = currentSection;
    if(currentSection!=2){
        currentSection=2;
        display_new(currentSection, previousSection);
    }
    


});


options[3].addEventListener("click", function(){
    previousSection = currentSection;
    if(currentSection!=3){
        currentSection=3;
        display_new(currentSection, previousSection);
    }


});
