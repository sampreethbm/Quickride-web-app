export class UI {
    static renderRides(rides) {
        const container = document.querySelector('#rides-container');
        const countBadge = document.querySelector('#ride-count');
        
        countBadge.innerText = `${rides.length} Bookings`;
        container.innerHTML = '';

        if (rides.length === 0) {
            container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted);">No active rides found.</p>`;
            return;
        }

        rides.forEach(ride => {
            const card = document.createElement('div');
            card.className = 'ride-card';
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <h3 style="font-size: 1.1rem;">${ride.name}</h3>
                    <span class="vehicle-tag">${ride.vehicle}</span>
                </div>
                <div style="margin-top: 1rem; border-top: 1px solid var(--border); padding-top: 1rem;">
                    <p style="font-size: 0.85rem; margin-bottom: 4px;">📍 <strong>From:</strong> ${ride.pickup}</p>
                    <p style="font-size: 0.85rem;">🏁 <strong>To:</strong> ${ride.drop}</p>
                </div>
                <button class="btn-delete" data-id="${ride.id}">Cancel Booking</button>
            `;
            container.appendChild(card);
        });
    }

    static showAlert(msg) {
        alert(msg); // In industry, this would be a custom Toast UI
    }
}