function toggleMenu() {
    const navLinks = document.getElementById("navlinks");
    navLinks.classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navlinks").classList.remove("active");
    });
});


document.addEventListener("DOMContentLoaded", () => {

    let slideIndex = 0;
    showSlide(slideIndex);

    function showSlide(n) {
        const slides = document.querySelectorAll(".campaign-slide");

        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;

        slides.forEach(slide => slide.style.display = "none");
        slides[slideIndex].style.display = "block";
    }

    document.querySelector(".next").addEventListener("click", () => {
        slideIndex++;
        showSlide(slideIndex);
    });

    document.querySelector(".prev").addEventListener("click", () => {
        slideIndex--;
        showSlide(slideIndex);
    });
    
});
