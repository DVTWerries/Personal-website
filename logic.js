function DisplayAboutMe() {
    var aboutMe = document.getElementById("one").classList;
    RemoveOtherStyle();
    aboutMe.add("display");
}

function DisplaySkills() {
    var skill = document.getElementById("two").classList;
    RemoveOtherStyle();
    skill.add("display");
}

function DisplayInterest() {
    var interest = document.getElementById("three").classList;
    RemoveOtherStyle();
    interest.add("display");
}

function DisplayWhatILove() {
    var whatILove = document.getElementById("forth").classList;
    RemoveOtherStyle();
    whatILove.add("display");
}

function RemoveOtherStyle() {
    var aboutMe = document.getElementById("one").classList;
    var skill = document.getElementById("two").classList;
    var interest = document.getElementById("three").classList;
    var whatILove = document.getElementById("forth").classList;
    if(aboutMe.contains("display")) {
        aboutMe.remove("display");
        aboutMe.add("remove");
    }
    else if(skill.contains("display")) {
        skill.remove("display");
        skill.add("remove");
    }
    else if(interest.contains("display")) {
        interest.remove("display");
        interest.add("remove");
    }
    else if(whatILove.contains("display")) {
        whatILove.remove("display");
        whatILove.add("remove");
    }
    else{

    }
}