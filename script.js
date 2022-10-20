let lessonWrapper = document.querySelector('.lesson-wrapper');

function loadLesson()
{
    for (var key in words) {
        let word = words[key];
        console.log(word);
        console.log(word.title);
    
        let button = document.createElement("button");
    
        button.setAttribute("data-audio", word.audio);
        button.addEventListener('click', function() {
            playAudio(word.audio);
        });
        button.setAttribute("class", "btn");
        button.textContent = word.title;
    
        lessonWrapper.append(button);
    }
}

loadLesson();

function playAudio(url)
{
	let sound = new Audio(ABAI_BASE_URL + url);
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