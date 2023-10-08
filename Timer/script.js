const targetDate = new Date("2023-12-31T23:59:59").getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Event has ended!";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    }
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
