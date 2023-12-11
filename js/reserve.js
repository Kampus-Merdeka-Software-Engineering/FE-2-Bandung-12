const API_URL = "https://be-2-bandung-12-production.up.railway.app";



document.addEventListener("DOMContentLoaded", function () {
    const messageForm = document.getElementById("reservationForm");



    messageForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const full_name = document.getElementById('fullName').value;
        const email_address = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const check_in = document.getElementById('checkInDate').value;
        const check_out = document.getElementById('checkOutDate').value;
        const type = document.getElementById('typeSelect').value;
        const rooms = document.getElementById('guestCount').value;
        const guest = document.getElementById('roomSelect').value;
        const name_card = document.getElementById('paymentSelect').value;
        const card_number = document.getElementById('cardNumber').value;
        const cvv = document.getElementById('cvv').value;

        if (!full_name || !email_address || !address || !check_in || !check_out || !type || !rooms || !guest || !name_card || !card_number ||!cvv) {
            showSweetAlert(
                "Oops!",
                "Please fill in all the fields before submitting.",
                "error"
            );
            return;
        }

        const formData= new formData (document.getElementById("reservationForm"));
        const requestBody = {};
        
         formData.forEach((value, key) => {
            requestBody[key] = value;
          });
            requestBody.full_name=full_name;
            requestBody.email_address = email;
            requestBody.address = address;
            requestBody.check_in = check_in;
            requestBody.check_out = check_out;
            requestBody.type = type;
            requestBody.rooms = rooms;
            requestBody.guest = guest;
            requestBody.name_card = name_card;
            requestBody.card_number = card_number;
            requestBody.cvv = cvv;

    
           
        

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
