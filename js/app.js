/**
 * app.js
 * The Controller.
 * Orchestrates interaction between the Data Layer (storage.js) and Presentation Layer (ui.js).
 */

import Storage from './storage.js';
import UI from './ui.js';

class App {
  constructor() {
    this.init();
  }

  init() {
    // 1. Load existing bookings on startup
    const bookings = Storage.getBookings();
    UI.displayBookings(bookings);

    // 2. Event Listeners
    this.loadEventListeners();
  }

  loadEventListeners() {
    // Form Submission
    document.getElementById('booking-form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleBookingSubmit();
    });

    // Fare Estimation Listener
    document.getElementById('rideType').addEventListener('change', (e) => {
      const fare = this.calculateFare(e.target.value);
      const fareElement = document.getElementById('fare-estimate');
      const amountElement = document.getElementById('fare-amount');

      amountElement.innerText = `$${fare}`;
      fareElement.classList.remove('hidden');
    });

    // Event Delegation for Delete Buttons (Future Proofing)
    document.getElementById('bookings-list').addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        // Future phases
      }
    });
  }

  calculateFare(type) {
    const baseRate = 10;
    const multipliers = {
      'standard': 1,
      'premium': 1.5,
      'suv': 2
    };
    // Randomized distance between 3-15km for demo
    const distance = Math.floor(Math.random() * 12) + 3;
    return (baseRate + (distance * 2 * (multipliers[type] || 1))).toFixed(2);
  }

  handleBookingSubmit() {
    // Get form values
    const passengerName = document.getElementById('passengerName').value;
    const pickup = document.getElementById('pickupLocation').value;
    const dropoff = document.getElementById('dropoffLocation').value;
    const type = document.getElementById('rideType').value;
    const fare = document.getElementById('fare-amount').innerText;

    // Validate (Simple check)
    if (passengerName === '' || pickup === '' || dropoff === '' || type === '') {
      UI.showToast('Please fill in all fields', 'error');
      return;
    }

    // 1. Show Loading State
    UI.setLoading(true);

    // 2. Simulate Network Request (1.5 seconds)
    setTimeout(() => {
      // Create Booking Object
      const booking = {
        passengerName,
        pickup,
        dropoff,
        type,
        fare: fare !== '$0.00' ? fare : '$15.00' // Default fallback
      };

      // Add to Storage
      const newBooking = Storage.addBooking(booking);

      // Refresh UI
      this.refreshUI();

      // 3. Start Status Simulation
      this.simulateDriverAssignment(newBooking.id);

      // Reset Form & UI
      document.getElementById('booking-form').reset();
      document.getElementById('fare-estimate').classList.add('hidden');
      UI.setLoading(false);

      // Success Toast
      UI.showToast('Ride booked! Searching for drivers...', 'success');

    }, 1500);
  }

  simulateDriverAssignment(bookingId) {
    // Simulate 5 second delay to find driver
    setTimeout(() => {
      const success = Storage.updateStatus(bookingId, 'Driver Assigned');
      if (success) {
        this.refreshUI();
        UI.showToast(`Driver assigned for ride #${bookingId.toString().slice(-4)}`, 'success');
      }
    }, 5000);
  }

  refreshUI() {
    const bookings = Storage.getBookings();
    UI.displayBookings(bookings);
  }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});