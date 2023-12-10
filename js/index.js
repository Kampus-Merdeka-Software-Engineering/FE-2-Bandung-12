//POST Booking
document.addEventListener("DOMContentLoaded", function () {
    const messageForm = document.getElementById("form");
   
    messageForm.addEventListener("submit", function (event) {
      event.preventDefault();
   
      const fullname = document.getElementById("fullname").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const rooms_id = document.getElementById("rooms").value;
      const check_in = document.getElementById("checkin").value;
      const check_out = document.getElementById("checkout").value;
      const adults_amount = document.getElementById("adults").value;
      const childs_amount = document.getElementById("childs").value;
   
      if (!fullname || !email || !phone || !rooms_id || !check_in || !check_out || !adults_amount || !childs_amount) {
        showSweetAlert(
          "Error",
          "Please complete all the columns in the form!",
          "error"
        );
        return;
      }
   
      const formData = {
        fullname, 
        email, 
        phone,
        rooms_id,
        check_in,
        check_out ,
        adults_amount,
        childs_amount,
      };
   
      // Kirim data ke backend
      fetch("https://be-2-bandung-10-production-8992.up.railway.app/form", {
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