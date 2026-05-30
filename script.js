// Fake data video TikTok (Embed dari link publik)
const videos = [
    {
        id: 1,
        username: "@tiktokfashion",
        caption: "Outfit terbaru musim ini 🔥",
        embedUrl: "https://www.tiktok.com/embed/v2/7234567890123456789",
        likes: 1234
    },
    {
        id: 2,
        username: "@traveloka",
        caption: "Pemandangan terindah di Bali ✨",
        embedUrl: "https://www.tiktok.com/embed/v2/7345678901234567890",
        likes: 5678
    },
    {
        id: 3,
        username: "@makanan_enak",
        caption: "Resep masakan viral 🤤",
        embedUrl: "https://www.tiktok.com/embed/v2/7456789012345678901",
        likes: 9012
    },
    {
        id: 4,
        username: "@gamers_ind",
        caption: "Tips menang MLBB terbaru!",
        embedUrl: "https://www.tiktok.com/embed/v2/7567890123456789012",
        likes: 3456
    }
];

// Simulasi opening (splash screen) selama 2.5 detik
document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splashScreen");
    const main = document.getElementById("mainContent");

    setTimeout(() => {
        splash.style.opacity = "0";
        splash.style.visibility = "hidden";
        setTimeout(() => {
            splash.style.display = "none";
            main.style.display = "block";
            loadVideoCards();
        }, 1000);
    }, 2500);
});

function loadVideoCards() {
    const container = document.getElementById("videoContainer");
    container.innerHTML = "";

    videos.forEach(video => {
        const card = document.createElement("div");
        card.className = "video-card";

        // Video embed TikTok (pastikan embed URL valid)
        card.innerHTML = `
            <div class="video-wrapper">
                <iframe src="${video.embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="card-info">
                <div>
                    <div class="username">${video.username}</div>
                    <div class="caption">${video.caption}</div>
                </div>
                <div class="actions">
                    <button class="like-btn" data-id="${video.id}">
                        ❤️ <span class="like-count">${video.likes}</span>
                    </button>
                    <button class="share-btn">
                        📤
                    </button>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    // Event like (simulasi)
    document.querySelectorAll(".like-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const countSpan = btn.querySelector(".like-count");
            let current = parseInt(countSpan.innerText);
            current += 1;
            countSpan.innerText = current;
            btn.style.color = "#ff0050";
            setTimeout(() => {
                btn.style.color = "";
            }, 300);
        });
    });

    // Event share (alert)
    document.querySelectorAll(".share-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Fitur share (simulasi) - bisa ditambahkan link asli");
        });
    });
}