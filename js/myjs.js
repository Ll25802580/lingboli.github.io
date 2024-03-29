console.log('hello world')

document.addEventListener('DOMContentLoaded', (event) => {
    const roles = ['Designer', 'Artist', 'Technologist', 'ENFJ'];
    let currentRole = 0;
    const element = document.getElementById('changing-text');

    function changeRole() {
        currentRole = (currentRole + 1) % roles.length;
        element.textContent = roles[currentRole];
    }

    setInterval(changeRole, 1500); // Change text every 3000 milliseconds (3 seconds)
});


function reveal() {
    let elements = document.querySelectorAll('.scroll-animation');

    for (let i = 0; i < elements.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = elements[i].getBoundingClientRect().top;
        let elementVisible = 100; // Adjust as needed

        if (elementTop < windowHeight - elementVisible) {
            elements[i].classList.add('visible');
        } else {
            elements[i].classList.remove('visible');
        }
    }
}

window.addEventListener('scroll', reveal);

function revealContentStatement() {
   let elements = document.querySelectorAll('.container.statement');

    for (let i = 0; i < elements.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = elements[i].getBoundingClientRect().top;
        let elementVisible = 150; // Adjust as needed

        if (elementTop < windowHeight - elementVisible) {
            elements[i].classList.add('visible');
        }else {
            elements[i].classList.remove('visible');
        }
    }
}

window.addEventListener('scroll', revealContentStatement);

// Optionally, call the function on load in case the element is already in view
revealContentStatement();

/* Play Audio */
document.addEventListener('DOMContentLoaded', function() {
    let controlButtons = document.querySelectorAll('.audioControl');
    controlButtons.forEach(function(button) {
        let audio = button.nextElementSibling;

        // Initialize properties for each audio element
        audio.fadeOutInterval = null;
        audio.fadeOutTimeout = null;

        button.style.backgroundImage = "url('img/mbti/play.png')";
        button.addEventListener('click', function() {
            toggleAudio(audio, button);
        });
    });
});

function toggleAudio(audio, controlButton) {
    if (audio.paused) {
        audio.currentTime = 0;
        clearInterval(audio.fadeOutInterval); // Clear existing fade-out interval
        clearTimeout(audio.fadeOutTimeout); // Clear existing fade-out timeout
        audio.volume = 1;
        audio.play();
        controlButton.style.backgroundImage = "url('img/mbti/pause.png')";

        // Reset and start fade out after 12 seconds
        audio.fadeOutTimeout = setTimeout(function() {
            audio.fadeOutInterval = setInterval(function() {
                if (audio.volume > 0) {
                    audio.volume -= 0.3;
                } else {
                    clearInterval(audio.fadeOutInterval); // Clear interval when volume reaches 0
                }
            }, 800);
        }, 15000);

        // Stop audio at 15 seconds
        setTimeout(function() {
            clearInterval(audio.fadeOutInterval); // Clear fade-out interval
            clearTimeout(audio.fadeOutTimeout); // Clear fade-out timeout
            audio.pause();
            audio.currentTime = 0;
            audio.volume = 1;
            controlButton.style.backgroundImage = "url('img/mbti/play.png')";
        }, 18000);
    } else {
        audio.pause();
        clearInterval(audio.fadeOutInterval); // Clear fade-out interval
        clearTimeout(audio.fadeOutTimeout); // Clear fade-out timeout
        controlButton.style.backgroundImage = "url('img/mbti/replay.png')";
    }
}
