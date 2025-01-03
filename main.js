// Sticky Navbar Hide on Scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById("navbar");
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
};

// Section Animation on Scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.2, // Trigger animation when 20% of the section is visible
    }
);

document.querySelectorAll(".container").forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Form Submission Alert
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you shortly at oceanenergydynamics@gmail.com.");
});
