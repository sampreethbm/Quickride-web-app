/**
 * storage.js
 * Data Layer.
 * Handles localStorage operations and data state.
 */

class Storage {
    constructor() {
        this.key = 'quickride_bookings';
    }

    // Get all bookings from localStorage
    getBookings() {
        let bookings;
        if (localStorage.getItem(this.key) === null) {
            bookings = [];
        } else {
            bookings = JSON.parse(localStorage.getItem(this.key));
        }
        return bookings;
    }

    // Add a new booking
    addBooking(booking) {
        const bookings = this.getBookings();

        // Add Metadata ensuring unique ID and timestamp
        const newBooking = {
            ...booking,
            id: Date.now(), // Simple unique ID
            timestamp: new Date().toISOString(),
            status: 'Pending' // Default status
        };

        bookings.push(newBooking);
        localStorage.setItem(this.key, JSON.stringify(bookings));

        return newBooking;
    }

    // Delete a booking by ID
    deleteBooking(id) {
        let bookings = this.getBookings();
        bookings = bookings.filter(booking => booking.id !== Number(id)); // Ensure ID type match
        localStorage.setItem(this.key, JSON.stringify(bookings));
    }

    // Update booking status (for Phase 4 simulation)
    updateStatus(id, newStatus) {
        const bookings = this.getBookings();
        const index = bookings.findIndex(booking => booking.id === Number(id));

        if (index !== -1) {
            bookings[index].status = newStatus;
            localStorage.setItem(this.key, JSON.stringify(bookings));
            return true;
        }
        return false;
    }
}

export default new Storage();