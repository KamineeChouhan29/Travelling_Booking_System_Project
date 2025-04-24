window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);

    const destination = params.get("destination");
    const departure = params.get("departure-date");
    const returnDate = params.get("return-date");
    const passengers = params.get("number-of-passengers");

    // Display search summary
    const summarySection = document.getElementById('search-summary');
    summarySection.innerHTML = `
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Departure Date:</strong> ${departure}</p>
        <p><strong>Return Date:</strong> ${returnDate}</p>
        <p><strong>Passengers:</strong> ${passengers}</p>
    `;

    // Dummy flight data
    const flights = [
        {
            airline: "Air India",
            flightNo: "AI202",
            time: "10:00 AM - 2:00 PM",
            price: "₹8,500"
        },
        {
            airline: "IndiGo",
            flightNo: "6E101",
            time: "1:00 PM - 5:00 PM",
            price: "₹7,900"
        },
        {
            airline: "Vistara",
            flightNo: "UK303",
            time: "6:00 PM - 10:00 PM",
            price: "₹9,200"
        }
    ];

    // Show flight results
    const flightsContainer = document.getElementById('flights-container');
    flights.forEach(flight => {
        const div = document.createElement('div');
        div.classList.add('flight-card');
        div.innerHTML = `
            <h3>${flight.airline} (${flight.flightNo})</h3>
            <p><strong>Time:</strong> ${flight.time}</p>
            <p><strong>Price:</strong> ${flight.price}</p>
            <button>Book Now</button>
        `;
        flightsContainer.appendChild(div);
    });
});
