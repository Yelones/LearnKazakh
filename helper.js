function getActiveLevelName() {
    return "A1";
    return document.querySelector(".level-menu .level-menu-item.active").innerHTML;
}

function setFirstActiveLevel() {
    return document.querySelector(".level-menu-item").classList.add("active");
}