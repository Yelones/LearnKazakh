let menuWrapper = document.querySelector(".menu-wrapper");

let levelMenuWrapper = document.createElement("div");
levelMenuWrapper.setAttribute("class", "level-menu-wrapper");

menuWrapper.append(levelMenuWrapper);

let levelMenu = document.createElement("ul");
levelMenu.setAttribute("class", "level-menu");

levelMenuWrapper.append(levelMenu);

for (let levelKey in LESSONS) {
    let level = LESSONS[levelKey];
    let levelMenuItem = document.createElement("li");
    levelMenuItem.setAttribute("class", "level-menu-item");
    levelMenuItem.textContent = levelKey;

    levelMenu.append(levelMenuItem);

    let lessonMenuWrapper = document.createElement("div");
    lessonMenuWrapper.setAttribute("class", "lesson-menu-wrapper");

    menuWrapper.append(lessonMenuWrapper);
    
    let lessonMenu = document.createElement("ul");
    lessonMenu.setAttribute("class", "lesson-menu");

    lessonMenuWrapper.append(lessonMenu);

    for (let lessonKey in level) {
        let lesson = level[lessonKey];
        
        let lessonMenuItem = document.createElement("li");
        lessonMenuItem.setAttribute("class", "lesson-menu-item");
        lessonMenuItem.setAttribute("href", "#");
        lessonMenuItem.addEventListener("click", () => startLesson(lessonKey));
        lessonMenuItem.textContent = lesson;

        lessonMenu.append(lessonMenuItem);
    }
}

setFirstActiveLevel();
