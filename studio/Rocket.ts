import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";
import { Payload } from "./Payload.js";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass = function( items: Payload[] ): number {
        let totalMass:number = 0;

        for (const item of items) {
            totalMass += item.massKg;
        }
        
        return totalMass;
    }

    currentMassKg = function(): number {
        return this.sumMass(this.astronauts.concat(this.cargoItems));
    }

    canAdd = function(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }

    addCargo = function(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut = function(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}