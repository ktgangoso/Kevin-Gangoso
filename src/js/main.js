document.addEventListener("DOMContentLoaded", function () {
    const sections = ["home", "about", "skills", "experience", "contact"];

    function showSection(id) {
        sections.forEach(section => {
            const el = document.getElementById(section);
            if (el) el.style.display = section === id ? "block" : "none";
        });
    }

    // Show home by default
    showSection("home");

    // Navigation click handler
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            const hash = this.getAttribute("href").replace("#", "");
            if (sections.includes(hash)) {
                e.preventDefault();
                showSection(hash);
                window.location.hash = hash;
            }
        });
    });

    // Browser back/forward handler
    window.addEventListener("hashchange", function () {
        const hash = window.location.hash.replace("#", "");
        if (sections.includes(hash)) showSection(hash);
    });

    // Dark mode toggle with localStorage
    const darkToggle = document.getElementById("darkModeToggle");

    // Load mode from localStorage
    if (localStorage.getItem("mode") === "dark") {
        document.documentElement.classList.add("dark");
        darkToggle.innerHTML = "☀️ Light Mode";
    } else {
        document.documentElement.classList.remove("dark");
        darkToggle.innerHTML = "🌙 Dark Mode";
    }

    darkToggle.addEventListener("click", function () {
        document.documentElement.classList.toggle("dark");
        const isDark = document.documentElement.classList.contains("dark");
        darkToggle.innerHTML = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        localStorage.setItem("mode", isDark ? "dark" : "light");
        darkToggle.classList.add("animate-bounceIn");
        setTimeout(() => darkToggle.classList.remove("animate-bounceIn"), 500);
    });

    // Sidebar nav toggle for mobile
    const navToggle = document.getElementById("navToggle");
    const sidebarNav = document.getElementById("sidebarNav");

    // Create overlay for sidebar
    let overlay = document.createElement("div");
    overlay.id = "sidebarOverlay";
    document.body.appendChild(overlay);

    navToggle.addEventListener("click", function () {
        sidebarNav.classList.toggle("open");
        overlay.classList.toggle("active");
    });

    // Close sidebar when clicking overlay or nav link
    overlay.addEventListener("click", function () {
        sidebarNav.classList.remove("open");
        overlay.classList.remove("active");
    });
    sidebarNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            sidebarNav.classList.remove("open");
            overlay.classList.remove("active");
        });
    });
});

