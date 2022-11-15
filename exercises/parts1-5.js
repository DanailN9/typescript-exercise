"use strict";
exports.__esModule = true;
var SpaceLocation_js_1 = require("./SpaceLocation.js");
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.getDaysToLocation = function (kilometersAway) {
            var milesToLocation = kilometersAway * this.milesPerKilometer;
            var hoursToLocation = milesToLocation / this.speedMph;
            var daysToLocation = hoursToLocation / 24;
            return daysToLocation;
        };
        this.printDaysToLocation = function (location) {
            console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
        };
        this.name = name;
        this.speedMph = speedMph;
    }
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 content.
// Add the printDaysToLocation function to the Spacecraft class.
// Use the class instance to print out the days to Mars and the Moon here:
spaceShuttle.printDaysToLocation(new SpaceLocation_js_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_js_1.SpaceLocation('the Moon', kilometersToTheMoon));
/*
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));
*/
