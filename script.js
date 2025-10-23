// Mobile Navigation Toggle //
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
// Smooth Scrolling for Anchor Links //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
// ====== CONTACT FORM POPUP ====== //
const form = document.querySelector(".contact-form form");
const popup = document.getElementById("popup-message");

if (form && popup) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // ✅ Show popup with tick mark
        popup.innerHTML = `<span>✅ Message sent! Thanks, I’ll get back to you soon.</span>`;
        popup.classList.add("show");

        // ✅ Hide popup after 3 seconds
        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);

        // ✅ Optional: clear form fields
        form.reset();
    });
}
// Fade-in animation when section appears
window.addEventListener("scroll", () => {
    const certSection = document.querySelector(".cert-container");
    const rect = certSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        certSection.classList.add("show");
    }
});



window.addEventListener("scroll", reveal);
function reveal() {
    document.querySelectorAll(".section").forEach(sec => {
        const windowHeight = window.innerHeight;
        const revealTop = sec.getBoundingClientRect().top;
        if (revealTop < windowHeight - 150) {
            sec.classList.add("active");
        }
    });
}
reveal();
