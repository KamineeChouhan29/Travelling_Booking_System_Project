// script.js

// Form validation example
window.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('#booking-form form');
    const contactForm = document.querySelector('#contact form');

    bookingForm.addEventListener('submit', (e) => {
        const destination = document.querySelector('#destination').value.trim();
        const departure = document.querySelector('#departure-date').value;
        const returnDate = document.querySelector('#return-date').value;

        if (new Date(departure) > new Date(returnDate)) {
            e.preventDefault();
            alert("Return date must be after departure date.");
        }

        if (!destination) {
            e.preventDefault();
            alert("Please enter a destination.");
        }
    });

    contactForm.addEventListener('submit', (e) => {
        const email = document.querySelector('#email').value;
        if (!email.includes('@')) {
            e.preventDefault();
            alert("Please enter a valid email address.");
        }
    });
});
