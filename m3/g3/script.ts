abstract class FreelancesAbstract{

    protected redditoAnnuoLordo!:number;
    protected codredd:number;
    protected tasseInps:number;
    protected tasseIrpef:number;

    constructor(reddito:number){
        this.redditoAnnuoLordo = reddito;
        this.codredd = 0.67;
        this.tasseInps = 0.24;

        // Definisco percentuale tasse IRPEF
        if( this.redditoAnnuoLordo <= 15000 ){
            this.tasseIrpef = 0.23;
        }else if( this.redditoAnnuoLordo <= 28000 ){
            this.tasseIrpef = 0.25;
        }else if( this.redditoAnnuoLordo <= 50000 ){
            this.tasseIrpef = 0.35;
        }else{
            this.tasseIrpef = 0.43;
        }
    }
    
    abstract get getUtileTasse(): number;
    
    abstract get getTasseInps(): number;
    
    abstract get getTasseIrpef(): number;
    
    abstract get redditoAnnuoNetto(): number;

}

class Freelancer extends FreelancesAbstract{

    get getUtileTasse(): number {
        return this.getTasseInps + this.tasseIrpef;
    }

    get getTasseInps(): number {
        return this.redditoAnnuoLordo * this.tasseInps;
    }

    get getTasseIrpef(): number {
        return this.redditoAnnuoLordo * this.tasseIrpef;
    }

    get redditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - this.getTasseInps - this.tasseIrpef;
    }

}


let freelance = new Freelancer(30000);
console.log('Tasse INPS', freelance.getTasseInps);
console.log('Tasse IRPEF', freelance.getTasseIrpef);
console.log('Utile Tasse', freelance.getUtileTasse);
console.log('Reddito Annuo Netto', freelance.redditoAnnuoNetto);