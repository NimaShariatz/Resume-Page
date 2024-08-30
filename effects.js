var options = document.getElementsByClassName("option_svg");
options[0].classList.add("chosen_option");//so education starts as white

var nodes = document.getElementsByClassName("node");

var timeline_sections = document.getElementsByClassName("timeline_sect");




var delay = 200;
for (i = 0; i < nodes.length; i++) {
    nodes[i].style.outline = "var(--border_thickness) solid var(--color4)";
    timeline_sections[i].style.opacity = "1";
    timeline_sections[i].style.transitionDelay = delay.toString() + "ms";
    nodes[i].style.transitionDelay = delay.toString() + "ms";

    delay = delay + 100;
}


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
