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


const fetchLatestReservationId = async () => {
	try {
	  const response = await fetch(`${API_URL}/reserve/latest`);
	  const latestReservation = await response.json();
	  console.log(latestReservation);
	  displayLatestUser(latestReservation);
  
	} catch (error) {
	  console.error("Error:", error);
	}
  };
  
  const displayLatestReservation = (latestReservations) => {
	const section = document.getElementById("reserve-info");
  
	latestReservations.forEach((latestReservation) => {
	  const fullName = latestReservation.full_name;
	  const emailAddress = latestReservation.email_address;
	  const address = latestReservation.address;
	  const checkInDateTime = latestReservation.check_in;
	  const checkOutDateTime = latestReservation.check_out;
	  const numberOfGuests = latestReservation.guest;
	  const roomType = latestReservation.type;
	  const numberOfRooms = latestReservation.rooms;
	  const conciergeContact = latestReservation.concierge_contact;
  
	  const div = document.createElement("div");
	  div.innerHTML = `
		<p>Dear ${fullName},</p>
		<p>Thank you for choosing to stay with us at ${latestReservation.hotelName}. We appreciate your trust in our services and are delighted that you have chosen our hotel for your upcoming stay.</p>
		<p>Here is a summary of your booking:</p>
		<ul>
		  <li>Full Name: ${fullName}</li>
		  <li>Email Address: ${emailAddress}</li>
		  <li>Address: ${address}</li>
		  <li>Check-In: ${checkInDateTime}</li>
		  <li>Check-Out: ${checkOutDateTime}</li>
		  <li>Room Type: ${roomType}</li>
		  <li>Number of Rooms: ${numberOfRooms}</li>
		  <li>Number of Guests: ${numberOfGuests}</li>
		</ul>
		<p>We strive to make your experience exceptional and memorable. From our comfortable accommodations to our outstanding amenities, we are committed to ensuring your stay is both enjoyable and hassle-free.</p>
		<p>As the date of your arrival approaches, we want to express our sincere anticipation. We hope that your time with us exceeds your expectations, and that every moment in our hotel becomes a cherished memory.</p>
		<p>Should you have any special requests or requirements, please do not hesitate to contact our concierge team at ${conciergeContact}. We are here to make your stay truly exceptional.</p>
		<p>Once again, thank you for choosing ${latestReservation.hotelName}. We eagerly await your arrival and look forward to providing you with a warm and welcoming experience.</p>
		<p>Safe travels, and we can't wait to host you!</p>
		<p>Warm regards,</p>
	  `;
  
	  section.appendChild(div);
	});
  };
  
  