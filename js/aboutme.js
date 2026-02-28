function toggleMenu() {
    const navLinks = document.getElementById("navlinks");
    navLinks.classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navlinks").classList.remove("active");
    });
});