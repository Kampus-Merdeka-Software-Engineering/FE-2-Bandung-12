document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("formContact");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Retrieving form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('number').value;
        const message = document.getElementById('message').value;

        // Validation
        if (!name || !email || !phoneNumber || !message) {
            showSweetAlert(
                "Oops!",
                "Please fill in all the fields before submitting.",
                "error"
            );
            return;
        }

        // Corrected formData to match backend expectations
        const formData = JSON.stringify({
            name,
            email,
            phoneNumber,
            message,
        });

        console.log(formData);

        // Fetch API call without using API_URL variable directly
        fetch("https://be-2-bandung-12-production.up.railway.app/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: formData,
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            return response.json();
        })
        .then((data) => {
            showSweetAlert(
                "Success",
                "Your reservation has been successfully submitted.",
                "success"
            ).then(() => {
                window.location.href = "index.html";
            });
        })
        .catch((error) => {
            console.error("Error:", error.message);
            showSweetAlert(
                "Error",
                "There was a problem submitting your reservation. Please try again later.",
                "error"
            );
        });
    });

    function showSweetAlert(title, text, icon) {
        return Swal.fire({
            title: title,
            text: text,
            icon: icon,
            confirmButtonColor: "#645CFF",
        });
    }
});
