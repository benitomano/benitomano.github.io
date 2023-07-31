// Funktion, um einen Sound abzuspielen
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

// Event Listener für die Knöpfe
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const soundFile = button.getAttribute("data-sound");
            playSound(soundFile);
        });
    });
});