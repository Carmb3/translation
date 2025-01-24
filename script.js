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
    let baseUrl = window.location.origin + window.location.pathname;

    // Remove "index.html" if present in the URL
    baseUrl = baseUrl.replace(/index\.html$/, "");

    console.log(`🌍 Switching language to: ${lang}`);
    console.log("🔗 Redirecting to:", baseUrl + `index-${lang}.html`);

    // Redirect based on the selected language
    switch (lang) {
        case 'fr':
            window.location.href = baseUrl + "index-fr.html";
            break;
        case 'de':
            window.location.href = baseUrl + "index-de.html";
            break;
        case 'ro':
            window.location.href = baseUrl + "index-ro.html";
            break;
        case 'it':
            window.location.href = baseUrl + "index-it.html";
            break;
        default:
            window.location.href = baseUrl + "index.html"; // Default to English
    }
}

