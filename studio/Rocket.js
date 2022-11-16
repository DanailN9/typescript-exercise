"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.sumMass = function (items) {
            var totalMass = 0;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                totalMass += item.massKg;
            }
            return totalMass;
        };
        this.currentMassKg = function () {
            return this.sumMass(this.astronauts.concat(this.cargoItems));
        };
        this.canAdd = function (item) {
            if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
                return true;
            }
            else {
                return false;
            }
        };
        this.addCargo = function (cargo) {
            if (this.canAdd(cargo)) {
                this.cargoItems.push(cargo);
                return true;
            }
            else {
                return false;
            }
        };
        this.addAstronaut = function (astronaut) {
            if (this.canAdd(astronaut)) {
                this.astronauts.push(astronaut);
                return true;
            }
            else {
                return false;
            }
        };
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    return Rocket;
}());
exports.Rocket = Rocket;
