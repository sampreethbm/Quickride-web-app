import { Storage } from './storage.js';
import { UI } from './ui.js';

// Init
document.addEventListener('DOMContentLoaded', () => {
    UI.renderRides(Storage.getRides());
});

// Form Listener
document.querySelector('#ride-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#passenger-name').value.trim();
    const pickup = document.querySelector('#pickup-location').value.trim();
    const drop = document.querySelector('#drop-location').value.trim();
    const vehicle = document.querySelector('#vehicle-type').value;

    if (!name || !pickup || !drop || !vehicle) return;

    const newRide = { id: crypto.randomUUID(), name, pickup, drop, vehicle };
    const rides = Storage.getRides();
    rides.push(newRide);
    Storage.saveRides(rides);
    
    UI.renderRides(rides);
    document.querySelector('#ride-form').reset();
});

// Delete Listener
document.querySelector('#rides-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
        const id = e.target.getAttribute('data-id');
        const rides = Storage.getRides().filter(r => r.id !== id);
        Storage.saveRides(rides);
        UI.renderRides(rides);
    }
});
