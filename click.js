const myButton = document.getElementById('myButton');
const buttonSound = document.getElementById('buttonSound');

// Überprüfen, ob das Gerät einen Touchscreen hat
const isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

// Wenn das Gerät einen Touchscreen hat, verwenden wir das Touch-Ereignis, sonst das Click-Ereignis
const clickEvent = isTouchDevice ? 'touchstart' : 'click';

myButton.addEventListener(clickEvent, function() {
    // Füge hier die Aktion hinzu, die beim Klicken oder Antippen des Buttons ausgelöst werden soll
    console.log('Button wurde geklickt oder angetippt!');
    playButtonSound();
});

function playButtonSound() {
    // Überprüfen, ob der Browser das Audio-Element unterstützt
    if (typeof buttonSound.play === 'function') {
        // Den Ton abspielen
        buttonSound.play();
    }
}