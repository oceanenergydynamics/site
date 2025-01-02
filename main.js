// Function to add animations to sections on scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-section");
                }
            });
        },
        {
            threshold: 0.5, // Trigger animation when 50% of the section is visible
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Thank you for reaching out! We will get back to you shortly.");
}
