function getActiveLevelName() {
    return "A1";
    return document.querySelector(".level-menu .level-menu-item.active").innerHTML;
}

function getActiveLessonName() {
    let lesson = window.location.hash.substring(1);

    if (!lesson || lesson == "") {
        lesson = Object.keys(LESSONS[getActiveLevelName()])[0];
    }

    return lesson;
}

function setFirstActiveLevel() {
    return document.querySelector(".level-menu-item").classList.add("active");
}