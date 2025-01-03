document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".container");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                }
            });
        },
        { threshold: 0.3 }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for reaching out! We'll get back to you shortly.");
        contactForm.reset();
    });
});
