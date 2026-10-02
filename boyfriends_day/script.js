// =========================================
// 🎵 BACKGROUND MUSIC
// =========================================

const music = document.getElementById("bgMusic");

window.addEventListener("load", () => {
    music.volume = 0.5;

    // Try autoplay
    music.play().catch(() => {
        // Browser blocked autoplay.
        // Show a button so the visitor can start it.
        showMusicPrompt();
    });
});

function showMusicPrompt() {
    const prompt = document.createElement("div");

    prompt.id = "musicPrompt";

    prompt.innerHTML = `
        <div class="music-popup">
            <div class="popup-heart">♡</div>

            <h2>Something is waiting for you ♡</h2>

            <p>Tap to play our little soundtrack 🎵</p>

            <button id="playMusicBtn">
                Play ♡
            </button>
        </div>
    `;

    document.body.appendChild(prompt);

    document
        .getElementById("playMusicBtn")
        .addEventListener("click", () => {
            music.muted = false;

            music.play()
                .then(() => {
                    prompt.remove();
                })
                .catch((error) => {
                    console.error("Music error:", error);
                    alert("The song could not be played.");
                });
        });
}


// =========================================
// 💗 SURPRISE BUTTON
// =========================================

function openSurprise() {
    const surprise = document.getElementById("surprise");

    surprise.style.display = "block";

    const box = document.getElementById("confetti");

    const symbols = [
        "♡",
        "♥",
        "✦",
        "✧",
        "♡",
        "✿"
    ];

    for (let i = 0; i < 50; i++) {

        const piece = document.createElement("span");

        piece.className = "confetti-piece";

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.animationDuration =
            2.5 + Math.random() * 2 + "s";

        piece.style.animationDelay =
            Math.random() * 0.8 + "s";

        box.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 5000);
    }
}
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async () => {
    if (music.paused) {
        await music.play();
        musicButton.textContent = "⏸ Pause Music";
    } else {
        music.pause();
        musicButton.textContent = "▶ Play Music";
    }
});
