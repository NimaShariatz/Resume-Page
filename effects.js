"use strict"
var options = document.getElementsByClassName("option_svg");

var nodes = document.getElementsByClassName("node");

var timeline_sections = document.getElementsByClassName("timeline_sect");



var delay = 200;
for (var i,i = 0; i < nodes.length; i++) {
    timeline_sections[i].style.transitionDelay = delay.toString() + "ms";
    nodes[i].style.transitionDelay = delay.toString() + "ms";
    nodes[i].style.outline = "var(--border_thickness) solid var(--color4)";
    timeline_sections[i].style.opacity = "1";

    delay = delay + 100;
}


const sections = [document.getElementById("Education_section"), document.getElementById("Projects_section"), 
    document.getElementById("Professional_section"),
    document.getElementById("Aboutme_section")
];

options[0].classList.add("chosen_option");//the starting set
sections[0].classList.add("appear");//the starting set
sections[0].style.visibility="visible";//the starting set
sections[0].style.opacity="1";//the starting set

var currentSection = 0;
var previousSection = 0;


function display_new(current){
    sections[current].classList.remove("appear")
    sections[previousSection].classList.remove("appear")
    sections[current].classList.remove("dissappear")
    sections[previousSection].classList.remove("dissappear")


    sections[current].classList.add("appear");
    sections[current].style.visibility = "visible";
    sections[current].style.opacity = "1";


    sections[previousSection].classList.add("dissappear");
    sections[previousSection].style.visibility = "hidden";
    sections[previousSection].style.opacity = "0";


    options[current].classList.add("chosen_option");

    options[previousSection].classList.remove("chosen_option");
}




options[0].addEventListener("click", function(){
    previousSection = currentSection;
    if(currentSection!=0){
        currentSection=0;
        display_new(currentSection, previousSection);
    }

    var marginTop = 40;
    for (var i,i = 0; i < timeline_sections.length; i++){
        timeline_sections[i].style.opacity="1";
        timeline_sections[i].style.marginTop = marginTop.toString() + "px";
        marginTop = marginTop + 60;
    }

    



});



options[1].addEventListener("click", function(){
    previousSection = currentSection;
    if(currentSection!=1){
        currentSection=1;
        display_new(currentSection, previousSection);
    }
    var marginTop = 40;
    for (var i,i = 0; i < timeline_sections.length; i++){
        if((i!==0) && (i!==5) && (i!==6) && (i!==7) && (i!==8) && (i!==9) && (i!==10) && (i!==11) && (i!==12)){
            timeline_sections[i].style.opacity="0";
        }

        if((i==0) || (i==5) || (i==6) || (i==7) || (i==8) || (i==9) || (i==10) || (i==11) || (i==12)){
            timeline_sections[i].style.marginTop = marginTop.toString() + "px";
            marginTop = marginTop + 80;
        }

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





function hover_out_projects(icons_to_change){
    var icons = document.getElementsByClassName('node_icon');

    

    
    for (var i,i = 0; i < icons_to_change.length; i++){
        if(icons_to_change[i] != 12){//to account for Figma, which is stroke not fill.
            icons[icons_to_change[i]].style.fill = "var(--color2)";
        }else{
            icons[icons_to_change[i]].style.stroke = "var(--color2)";
        }
    }



}





function hover_over_projects(icons_to_change){
    var icons = document.getElementsByClassName('node_icon');

    
    

    for (var i,i = 0; i < icons_to_change.length; i++){
        if(icons_to_change[i] != 12){//to account for Figma, which is stroke not fill.
            icons[icons_to_change[i]].style.fill = "var(--green)";
        }else{
            icons[icons_to_change[i]].style.stroke = "var(--green)";
            console.log(icons[icons_to_change[i]])
        }
    }
    


}
