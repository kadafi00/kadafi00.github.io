class Propulsion {
    constructor(
        speed,
        power,
        burnTime
    ) {
        this.speed = speed;
        this.power = power;
        this.burnTime = burnTime;
    }

    //list methods
    launch() {
        alert("Spacecraft lifting off");
        return true;
    }

    landing() {
        alert("Spacecraft landing");
        return true;
    }

    loadFuel(fuelType, fuelAmt) {
        alert("Loading spacecraft with" + fuelAmt + " gallons of" + fuelType + " fuel.");
        return true;
    }
}