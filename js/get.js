const API_URL = "http://localhost:3000";
// const API_URL = "https://be-2-bandung-12-production.up.railway.app"




// document.addEventListener("DOMContentLoaded", async () => {
// 	if (window.location.pathname.includes("reserve.html")) {
// 		await fetchReserve();
// 	// } else if (window.location.pathname.includes("catalog.html")) {
// 	// 	await setupCatalogPage();
// 	}
// });

// // reserve api

// const fetchReserveById = async (reservationId) => {
// 	try {
// 	  const response = await fetch(`${API_URL}/reserve/${reservationId}`);
	  
// 	  if (!response.ok) {
// 		throw new Error(`Failed to fetch reservation data: ${response.status}`);
// 	  }
  
// 	  const reserve = await response.json();
// 	  console.log(reserve);
// 	  displayReserve(reserve);
// 	} catch (error) {
// 	  console.error("Error:", error.message);
// 	  // Handle the error, show a message to the user, or log it appropriately
// 	}
//   };
  
//   // Example usage with a specific reservation ID
//   const reservationId = 123; // Replace with the actual reservation ID
//   fetchReserveById(reservationId);
  

// const displayReserve = (reserve) => {
// 	const section = document.getElementById("reserve-info");
// 	reserve.forEach((reserve) => {
// 		const div = document.createElement("div");
// 		div.innerHTML = `
// 		<h3>Dear ${reserve.full_name},</h3>
// 		<p>Thank you for choosing Lakeswara Hotel. We are delighted to inform you that your reservation has been successfully processed.</p>
// 		<p>Below are the details of your booking:</p>
// 		<ul>
// 		  <li>Check-in Date: ${reserve.check_in}</li>
// 		  <li>Check-out Date: ${reserve.check_out}</li>
// 		  <li>Room Type: ${reserve.type}</li>
// 		  <li>Number of Guests: ${reserve.guest}</li>
// 		</ul>
// 		<p>We eagerly anticipate your arrival on ${reserve.check_in}, and our team is committed to ensuring that your stay with us is nothing short of exceptional.</p>
// 		<p>Should you require any further assistance or have specific preferences you'd like us to consider, please do not hesitate to contact our concierge at [nomor kontak concierge] or reply to this email.</p>
// 		<p>Once again, we appreciate your trust in Lakeswara, and we look forward to providing you with a memorable and comfortable experience.</p>
// 		<p>Sincerely,</p>
// 		<p>Lakeswara Hotel</p>
//     `;
// 		section.appendChild(div);
// 	});
// };


const displayReservation = (reservations) => {
	const section = document.getElementById("reserve-info");
  
	// Create a table element
	const table = document.createElement("table");
  
	// Create a table header row
	const headerRow = table.createTHead().insertRow(0);
	const headers = ["Full Name", "Email", "Address", "Check-In Date and Time", "Check-Out Date and Time", "Number of Guests", "Room Type", "Number of Rooms"];
  
	headers.forEach((headerText, index) => {
	  const headerCell = headerRow.insertCell(index);
	  headerCell.textContent = headerText;
	});
  
	// Create a table body
	const tbody = table.createTBody();
  
	reservations.forEach((reservation) => {
	  const row = tbody.insertRow();
  
	  // Use Object.values to get an array of property values
	  const reservationValues = Object.values(reservation);
  
	  reservationValues.forEach((value, index) => {
		const cell = row.insertCell(index);
		cell.textContent = value;
	  });
	});
  
	// Append the table to the section
	section.appendChild(table);
  };
  
  // Assume "reservations" is an array of reservation objects
  
  // Display the reservation information
  displayReservation(reservations);
  
  