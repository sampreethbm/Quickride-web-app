/**
 * ui.js
 * Presentation Layer.
 * Handles all DOM manipulation, rendering, and notifications.
 */

class UI {
    constructor() {
        this.themeToggleBtn = document.getElementById('theme-toggle');
        this.bookingsList = document.getElementById('bookings-list');
        this.emptyState = document.getElementById('empty-state');

        // Initialize event listeners
        if (this.themeToggleBtn) {
            this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
        }

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

    toggleTheme() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Optional: Update icon
        this.themeToggleBtn.innerText = isDark ? '☀️' : '🌙';
    }

    // Show Toast Notification
    showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        // Icon based on type
        const icon = type === 'success' ? '✅' : '⚠️';

        toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;

        container.appendChild(toast);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.animation = 'slideInRight 0.3s reverse forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Toggle Loading State on Button
    setLoading(isLoading) {
        const btn = document.getElementById('bookBtn');
        const btnText = btn.querySelector('.btn-text');
        const loader = btn.querySelector('.loader');

        if (isLoading) {
            btn.disabled = true;
            btnText.style.opacity = '0.7';
            btnText.innerText = 'Processing...';
            // loader.classList.remove('hidden'); // If we had a CSS loader
        } else {
            btn.disabled = false;
            btnText.style.opacity = '1';
            btnText.innerText = 'Confirm Booking';
            // loader.classList.add('hidden');
        }
    }

    // Render the list of bookings (accepts an array)
    displayBookings(bookings) {
        this.bookingsList.innerHTML = ''; // Clear current list

        if (!bookings || bookings.length === 0) {
            this.emptyState.classList.remove('hidden');
            return;
        }

        this.emptyState.classList.add('hidden');

        bookings.forEach(booking => {
            const li = document.createElement('li');
            li.className = 'booking-item';

            // Format timestamp (e.g., "10:30 AM")
            const time = new Date(booking.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            // Status styling
            let statusClass = 'badge';
            if (booking.status === 'Completed') statusClass += ' success';
            if (booking.status === 'Driver Assigned') statusClass += ' warning';

            li.innerHTML = `
        <div class="booking-info">
            <div style="display:flex; justify-content:space-between; margin-bottom: 4px;">
                <strong>${booking.passengerName}</strong>
                <small class="text-muted">${time}</small>
            </div>
            <div class="route text-muted" style="font-size: 0.9rem; margin-bottom: 8px;">
                📍 ${booking.pickup} <br> 🏁 ${booking.dropoff}
            </div>
            <div class="meta" style="display:flex; justify-content:space-between; align-items:center;">
                <span class="vehicle-tag">${booking.type}</span>
                <span class="${statusClass}" style="background:var(--primary-color); color:white; padding:2px 8px; border-radius:4px; font-size:0.75rem;">${booking.status}</span>
            </div>
        </div>
      `;
            this.bookingsList.appendChild(li);
        });
    }
}

export default new UI();