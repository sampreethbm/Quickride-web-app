const STORAGE_KEY = 'quickride_db';

export class Storage {
    static getRides() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    }

    static saveRides(rides) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(rides));
    }
}
