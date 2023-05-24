"use strict";
class FreelancesAbstract {
    constructor(reddito) {
        this.redditoAnnuoLordo = reddito;
        this.codredd = 0.67;
        this.tasseInps = 0.24;
        // Definisco percentuale tasse IRPEF
        if (this.redditoAnnuoLordo <= 15000) {
            this.tasseIrpef = 0.23;
        }
        else if (this.redditoAnnuoLordo <= 28000) {
            this.tasseIrpef = 0.25;
        }
        else if (this.redditoAnnuoLordo <= 50000) {
            this.tasseIrpef = 0.35;
        }
        else {
            this.tasseIrpef = 0.43;
        }
    }
}
class Freelancer extends FreelancesAbstract {
    get getUtileTasse() {
        return this.getTasseInps + this.tasseIrpef;
    }
    get getTasseInps() {
        return this.redditoAnnuoLordo * this.tasseInps;
    }
    get getTasseIrpef() {
        return this.redditoAnnuoLordo * this.tasseIrpef;
    }
    get redditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getTasseInps - this.tasseIrpef;
    }
}
let freelance = new Freelancer(30000);
console.log('Tasse INPS', freelance.getTasseInps);
console.log('Tasse IRPEF', freelance.getTasseIrpef);
console.log('Utile Tasse', freelance.getUtileTasse);
console.log('Reddito Annuo Netto', freelance.redditoAnnuoNetto);
