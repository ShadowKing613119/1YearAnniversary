// Show Love Letter Pop-up
document.getElementById("loveButton").addEventListener("click", function () {
    const popup = document.getElementById("loveLetter");
    popup.style.display = "flex";
});

// Close Love Letter Pop-up
document.querySelector(".close").addEventListener("click", function () {
    const popup = document.getElementById("loveLetter");
    popup.style.display = "none";
});
// Show Love Letter Pop-up and Start Heart Rain
document.getElementById("loveButton").addEventListener("click", function () {
    const popup = document.getElementById("loveLetter");
    popup.style.display = "flex";

    // Start Heart Rain
    startHeartRain();
});

// Close Love Letter Pop-up and Stop Heart Rain
document.querySelector(".close").addEventListener("click", function () {
    const popup = document.getElementById("loveLetter");
    popup.style.display = "none";

    // Stop Heart Rain
    stopHeartRain();
});

// Heart Rain Functions
function startHeartRain() {
    const heartRain = document.getElementById("heartRain");

    // Create hearts every 100ms for a more intense effect
    const interval = setInterval(() => {
        for (let i = 0; i < 5; i++) { // Create 5 hearts at a time
            const heart = document.createElement("div");
            heart.innerHTML = getRandomHeart(); // Random heart style
            heart.classList.add("heart");
            heart.classList.add(getRandomSize()); // Random size
            heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
            heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random speed
            heartRain.appendChild(heart);

            // Remove hearts after they fall
            setTimeout(() => {
                heart.remove();
            }, 7000); // Match the longest animation duration
        }
    }, 100);

    // Store the interval ID to clear it later
    heartRain.dataset.interval = interval;
}

function stopHeartRain() {
    const heartRain = document.getElementById("heartRain");

    // Clear the interval to stop creating new hearts
    clearInterval(heartRain.dataset.interval);

    // Remove all existing hearts
    heartRain.innerHTML = "";
}

// Helper Functions
function getRandomHeart() {
    const hearts = ["❤️", "💕", "💖", "💗", "💘", "💓", "💞"];
    return hearts[Math.floor(Math.random() * hearts.length)];
}

function getRandomSize() {
    const sizes = ["small", "medium", "large"];
    return sizes[Math.floor(Math.random() * sizes.length)];
}
