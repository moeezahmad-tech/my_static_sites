// form.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("my-form");
    const status = document.getElementById("my-form-status");
    const endpoint = "https://formspree.io/f/mzzaygzd";

    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        status.textContent = "Sending...";

        const formData = new FormData(form);

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (response.ok) {
                status.textContent = "Thank you! Your message has been sent.";
                window.location.href = "thankyou.html";
            } else {
                status.textContent = "Oops! There was a problem submitting your form.";
            }
        } catch (error) {
            status.textContent = "Oops! There was a problem submitting your form.";
        }
    });
});