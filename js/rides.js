export class RideManager {
    /**
     * Validates if the ride data is complete
     */
    static validate(ride) {
        if (!ride.name || !ride.pickup || !ride.drop || !ride.vehicle) {
            return { isValid: false, message: "Please fill in all fields." };
        }
        return { isValid: true };
    }

    /**
     * Formats the date for the UI
     */
    static formatDate(isoString) {
        const options = { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short' };
        return new Date(isoString).toLocaleDateString(undefined, options);
    }
}