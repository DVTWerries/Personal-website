function DisplayAboutMe() {
    var aboutMe = document.getElementById("one").classList;
    RemoveOtherStyle();
    aboutMe.remove("bio");
    aboutMe.add("display-element");
}

function DisplaySkills() {
    var skill = document.getElementById("two").classList;
    RemoveOtherStyle();
    skill.add("display-element");
}

function DisplayInterest() {
    var interest = document.getElementById("three").classList;
    RemoveOtherStyle();
    interest.add("display-element");
}

function DisplayWhatILove() {
    var whatILove = document.getElementById("forth").classList;
    RemoveOtherStyle();

    whatILove.add("display-element");
}

function RemoveOtherStyle() {
    var aboutMe = document.getElementById("one").classList;
    var skill = document.getElementById("two").classList;
    var interest = document.getElementById("three").classList;
    var whatILove = document.getElementById("forth").classList;
    if(aboutMe.contains("display-element")) {
        aboutMe.remove("display-element");
        aboutMe.add("remove-element");
    }
    else if(skill.contains("display-element")) {
        skill.remove("display-element");
        skill.add("remove-element");
    }
    else if(interest.contains("display-element")) {
        interest.remove("display-element");
        interest.add("remove-element");
    }
    else if(whatILove.contains("display-element")) {
        whatILove.remove("display-element");
        whatILove.add("remove-element");
    }
    else{

    }
}