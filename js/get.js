
const API_URL = "https://be-2-bandung-12-production.up.railway.app";

document.addEventListener("DOMContentLoaded", function () {
    // Assuming you have an HTML element with id "reserve-info"
    const displayReservationsContainer = document.getElementById("reserve-info");

    // Fetch reservations when the page is loaded
    fetchReservationsAndDisplay();

    function fetchReservationsAndDisplay() {
        // Fetch API call
        fetch(`${API_URL}/reserve`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            return response.json();
        })
        .then((reservations) => {
            // Display the reservations on the webpage
            displayReservations(reservations);
        })
        .catch((error) => {
            console.error("Error:", error.message);
            showSweetAlert(
                "Error",
                "There was a problem fetching the reservations. Please try again later.",
                "error"
            );
        });
    }

    function displayReservations(reservations) {
        // Clear existing content
        displayReservationsContainer.innerHTML = "";

        // Create a table element
        const table = document.createElement("table");
        table.classList.add("reservations-table");

        // Create and append table header
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        headerRow.innerHTML = `
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>Guests</th>
            <th>Type</th>
            <th>Rooms</th>
            <th>Name on Card</th>
            <th>Card Number</th>
            <th>CVV</th>
        `;
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create and append table body
        const tbody = document.createElement("tbody");
        reservations.forEach((reservation) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${reservation.id}</td>
                <td>${reservation.full_name}</td>
                <td>${reservation.email_address}</td>
                <td>${reservation.address}</td>
                <td>${reservation.check_in}</td>
                <td>${reservation.check_out}</td>
                <td>${reservation.guest}</td>
                <td>${reservation.type}</td>
                <td>${reservation.rooms}</td>
                <td>${reservation.name_card}</td>
                <td>${reservation.card_number}</td>
                <td>${reservation.cvv}</td>
            `;
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        // Append the table to the container
        displayReservationsContainer.appendChild(table);
    }

    function showSweetAlert(title, text, icon) {
        return Swal.fire({
            title: title,
            text: text,
            icon: icon,
            confirmButtonColor: "#645CFF",
        });
    }
});
