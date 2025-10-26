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
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
    });
    if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
    } else {
        alert("❌ There was a problem sending your message. Please try again later.");
    }
});
// Fade-in animation when section appears
window.addEventListener("scroll", () => {
    const certSection = document.querySelector(".cert-container");
    const rect = certSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        certSection.classList.add("show");
    }
});

// ================== HIRE ME BUTTON SMOOTH SCROLL ==================
document.addEventListener("DOMContentLoaded", () => {
    const hireBtn = document.querySelector(".hire-btn");
    hireBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
    });
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
