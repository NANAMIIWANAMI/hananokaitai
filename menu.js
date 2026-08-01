const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("menuOverlay");
const closeBtn = document.getElementById("menuClose");

if (hamburger && overlay) {

    const icon = hamburger.querySelector(".icon");
    const text = hamburger.querySelector(".text");

    function openMenu() {

        overlay.classList.add("show");

        icon.textContent = "✕";
        text.textContent = "CLOSE";

    }

    function closeMenu() {

        overlay.classList.remove("show");

        icon.textContent = "☰";
        text.textContent = "MENU";

    }

    hamburger.addEventListener("click", () => {

        if (overlay.classList.contains("show")) {

            closeMenu();

        } else {

            openMenu();

        }

    });

    if (closeBtn) {
        closeBtn.addEventListener("click", closeMenu);
    }

    overlay.addEventListener("click", (e) => {

        if (e.target === overlay) {

            closeMenu();

        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeMenu();

        }

    });

}