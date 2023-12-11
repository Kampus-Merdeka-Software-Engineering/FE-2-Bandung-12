const API_URL= "https://be-2-bandung-12-production.up.railway.app";

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
        const rooms = document.getElementById('roomSelect').value;
        const guest = document.getElementById('guestCount').value;
        const name_card = document.getElementById('paymentSelect').value;
        const card_number = document.getElementById('cardNumber').value;
        const cvv = document.getElementById('cvv').value;

        if (!full_name || !email_address || !address || !check_in || !check_out || !type || !rooms || !guest || !name_card || !card_number || !cvv) {
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
            typeSelect,
            guestCount,
            roomSelect,
            paymentSelect,
            cardNumber,
            cvv,
          };

        // const formData = new FormData(document.getElementById("reservationForm"));
        // Kirim data ke backend
        fetch(`${API_URL}/reserve`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*", // Not recommended for production
            },
            body: formData,
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error("The form submission encountered an error.");
          }
          return response.json();
        })
        .then((data) => {
          showSweetAlert(
            "Success",
            "Booking Rooms has been sent. Check it in the History page",
            "success",
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
            "error",
          );
        });
    });
  
    function showSweetAlert(title, text, icon) {
        return Swal.fire({
          title: title,
          text: text,
          icon: icon,
          confirmButtonColor: "#645cff",
     // disini untuk ubah tulisan
       });
      }
    });

//GET Reserve

