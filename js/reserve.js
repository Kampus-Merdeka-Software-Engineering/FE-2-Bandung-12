const API_URL = "https://be-2-bandung-12-production.up.railway.app";



document.addEventListener("DOMContentLoaded", function () {
    const messageForm = document.getElementById("reservationForm");



    messageForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const checkInDate = document.getElementById('checkInDate').value;
        const checkOutDate = document.getElementById('checkOutDate').value;
        const guestCount = document.getElementById('guestCount').value;
        const type = document.getElementById('typeSelect').value;
        const room = document.getElementById('roomSelect').value;
        const payment = document.getElementById('paymentSelect').value;
        const cardNumber = document.getElementById('cardNumber').value;
        const cvv = document.getElementById('cvv').value;

        if (!fullName || !email || !address || !checkInDate || !checkOutDate || !guestCount || !type || !room || !payment || !cardNumber || !cvv) {
            showSweetAlert(
                "Oops!",
                "Please fill in all the fields before submitting.",
                "error"
            );
            return;
        }

        const formData = {
            fullName,
            email,
            address,
            checkInDate,
            checkOutDate,
            guestCount,
            type,
            room,
            payment,
            cardNumber,
            cvv,
        };

        // Kirim data ke backend
        fetch(`${API_URL}/reserve`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("The form submission encountered an error.");
                }
                return response.json();
            })
            .then((data) => {
                showSweetAlert(
                    "Success!",
                    "Your room reservation has been successfully submitted.",
                    "success"
                ).then(() => {
                    //setelah sukses arahkan ke home
                    window.location.href = "index.html";
                });
            })
            .catch((error) => {
                console.error("Error:", error.message);
                showSweetAlert(
                    "Error",
                    "The message sending failed. Please try again later.",
                    "error"
                );
            });
    });
    

    function showSweetAlert(title, text, icon) {
        return Swal.fire({
            title: title,
            text: text,
            icon: icon,
            confirmButtonColor: "#645cff",
        });
    }
});
