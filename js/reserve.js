const API_URL = "https://be-2-bandung-12-production.up.railway.app";

document.addEventListener("DOMContentLoaded", function () {
    const reservationForm = document.getElementById("reservationForm");

    reservationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Retrieving form values
        const full_name = document.getElementById('fullName').value;
        const email_address = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const check_in = document.getElementById('checkInDate').value;
        const check_out = document.getElementById('checkOutDate').value;
        const guest = document.getElementById('guestCount').value;
        const type = document.getElementById('typeSelect').value;
        const rooms = document.getElementById('roomSelect').value;
        const name_card = document.getElementById('paymentSelect').value;
        const card_number = document.getElementById('cardNumber').value;
        const cvv = document.getElementById('cvv').value;

        // Validation
        if (!full_name || !email_address || !address || !check_in || !check_out || !guest || !type || !rooms || !name_card || !card_number || !cvv) {
            showSweetAlert(
                "Oops!",
                "Please fill in all the fields before submitting.",
                "error"
            );
            return;
        }

        // Corrected formData to match backend expectations
        const formData = JSON.stringify({
            full_name,
            email_address,
            address,
            check_in,
            check_out,
            guest,
            type,
            rooms,
            name_card,
            card_number,
            cvv,
        });

        // Fetch API call
        fetch(`${API_URL}/reserve`, {
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