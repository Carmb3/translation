document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Script loaded successfully");

    // Get the contact form
    let form = document.getElementById("contact-form");
    if (!form) {
        console.error("❌ Form with ID 'contact-form' not found! Check your HTML.");
        return;
    }

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents default form submission
        console.log("📩 Form submitted");

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("⚠️ Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("⚠️ Please enter a valid email address.");
            return;
        }

        alert("✅ Thank you, " + name + "! Your message has been sent.");
        form.reset(); // Clears the form after submission
    });

    // Email validation function
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});

// Smooth scroll to section when clicking a button
function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    let offset = 100; // Adjust this value (higher = more space before title)

    if (section) {
        let sectionPosition = section.getBoundingClientRect().top + window.scrollY;
        let offsetPosition = sectionPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

// Language switch function
function changeLanguage(lang) {
    let currentPath = window.location.pathname;
    let basePath = currentPath.replace(/index-[a-z]{2}\.html$/, "").replace(/index\.html$/, "");
    
    console.log(`🌍 Switching language to: ${lang}`);
    let newURL = basePath + `index-${lang}.html`;

    if (lang === "en") {
        newURL = basePath + "index.html";
    }

    console.log("🔗 Redirecting to:", newURL);
    window.location.href = newURL;
}
