let lessonWrapper = document.querySelector('.lesson-wrapper');
let activeWord;

if (!words) {
    console.log("Reloading, no words found");
    window.location.reload();
}

function loadLesson()
{
    let lessonButtons = document.querySelector(".lesson-buttons");

    for (var key in words) {
        let word = words[key];
    
        let button = document.createElement("button");
    
        button.addEventListener('click', function() {
            showLessonCard(word);
        });
        button.setAttribute("class", "btn");
        button.textContent = word.title;
    
        lessonButtons.append(button);
    }
}

loadLesson();

function showLessonCard(word)
{
    activeWord = word;
    
    emptyLessonCard(word);

    console.log(word.title);
    console.log(word);

    let lessonCard = document.querySelector(".lesson-card");
    lessonCard.classList.remove("hidden");

    playAudio();
    populateLessonCard(word);
}

function emptyLessonCard(word)
{
    let lessonCard = document.querySelector(".lesson-card");
    lessonCard.classList.add("hidden");
    
    lessonCard.querySelector(".title .play-again").removeEventListener("click", playAudio);
    lessonCard.querySelector(".title .word").innerHTML = "";
    lessonCard.querySelector(".title .transcription").innerHTML = "";
    lessonCard.querySelector(".translation").innerHTML = "";
    lessonCard.querySelector(".examples").innerHTML = "";
    lessonCard.querySelector(".variants").innerHTML = "";
}

function populateLessonCard(word)
{
    let lessonCard = document.querySelector(".lesson-card");

     lessonCard.querySelector(".title .play-again").addEventListener("click", playAudio);
    lessonCard.querySelector(".title .word").innerHTML = word.title;
    lessonCard.querySelector(".title .transcription").innerHTML = word.transcription;
    lessonCard.querySelector(".translation").innerHTML = word.translations.eng;
    
    let examplesHolder = lessonCard.querySelector(".examples");
    examplesHolder.classList.remove("hidden");

    let examplesTitle = document.createElement("span");
    examplesTitle.innerHTML = "Examples:";

    let examplesContent = document.createElement("div");
    examplesContent.classList.add("examples-content");
    
    let kazExample = document.createElement("div");
    kazExample.innerHTML = word.examples.kaz;
    
    let engExample = document.createElement("div");
    engExample.innerHTML = word.examples.eng;

    examplesHolder.append(examplesTitle);
    examplesHolder.append(examplesContent);

    examplesContent.append(kazExample);
    examplesContent.append(engExample);

    let variantsHolder = lessonCard.querySelector(".variants");
    variantsHolder.classList.remove("hidden");

    let variantsTitle = document.createElement("span");
    variantsTitle.innerHTML = "Variants:";

    let variantsContent = document.createElement("div");
    variantsContent.classList.add("variants-content");

    for (let i = 0; i < 2; i++) {
        let variantElement = document.createElement("div");
        variantElement.innerHTML = word.variants.kaz[i] + " (" + word.variants.eng[i] + ")";

        variantsContent.append(variantElement);
    }

    variantsHolder.append(variantsTitle);
    variantsHolder.append(variantsContent);
}

function playAudio()
{
	let sound = new Audio(ABAI_BASE_URL + activeWord.audio);
	sound.play();
}

function startLesson(lesson)
{
    updateHash(lesson);
    window.location.reload();
}

function updateHash(newHash)
{
    window.location.hash = "#" + newHash;
}