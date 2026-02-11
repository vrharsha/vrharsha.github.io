window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 400;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});
