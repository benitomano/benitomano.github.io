const endDate = new Date("2023-08-02T18:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} Tage ${hours} Stunden ${minutes} Minuten ${seconds} Sekunden`;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Countdown abgelaufen!";
    }
}

// Aktualisiere den Countdown alle 1 Sekunde
setInterval(updateCountdown, 1000);