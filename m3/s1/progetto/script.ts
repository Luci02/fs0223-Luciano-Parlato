interface ISmartphone{

    carica:number;
    numeroChiamate:number;
    costoMinuto:number;

    ricarica(euro:number):void;
    numero404():string;
    getNumeroChiamate():number;
    chiamata(min:number):void;
    azzeraChiamate():void;

}

class RegistroChiamate{

    id: number;
    durata?: number;
    dataOra?: Date;

    constructor(obj:any){
        this.id = obj.id;
        this.durata = obj.durata;
        this.dataOra = obj.data;
    }
}

class Smartphone implements ISmartphone{
    private idChiamata: number = 0;
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    registroChiamate: RegistroChiamate[];

    constructor(){
        this.carica = 5;
        this.numeroChiamate = 0;
        this.costoMinuto =  0.20;
        this.registroChiamate = [];
    }

    ricarica(euro: number): void {
        this.carica += euro;
        console.log('La tua ricarica di ' + euro + '€ è avvenuta con successo');
    }

    numero404(): string {
        return 'Il credito residuo è: ' + this.carica.toFixed(2) + '€';
    }

    getNumeroChiamate(): number {
        console.log(`Hai effettuato ${this.numeroChiamate} chiamate`);
        return this.numeroChiamate;
    }

    chiamata(min: number): void {

        if( (min * this.costoMinuto) <= this.carica ){

            // incremento il numero di chiamate effettuate
            this.numeroChiamate++;

            // riduco il credito
            this.carica -= (min * this.costoMinuto);
            console.log('il costo della chiamata è stato di ', (min * this.costoMinuto));

            // Aggiungo la chiamata al registro
            this.registroChiamate.push({
                id: this.idChiamata++,
                durata: min,
                dataOra: new Date()
            });

        }else{
            console.log('Non hai credito sufficiente per effettuare la chiamata');
        }

        
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

    mostraRegistroChiamate(): void {

        console.log(this.registroChiamate);
        

        this.registroChiamate.forEach( (chiamata:RegistroChiamate) => {

            console.log(
                'Hai effettuato una chiamata il giorno: ' 
                + chiamata.dataOra?.toLocaleDateString('it-IT')
                + ' alle ore '
                + chiamata.dataOra?.toLocaleTimeString('it-IT')
                + ' che è durata '
                + chiamata.durata 
                + ' minuti.'
                + `${chiamata.dataOra?.getHours()}`
            );
        });

    }

    filtraChiamatePerDataOra( data?:Date, ora?:number ): void {

        console.log(
            this.registroChiamate.filter( ( element:RegistroChiamate ) => {

                if( element.dataOra?.toLocaleDateString('it-IT') == data || element.dataOra?.getHours() === ora){
                    return element;
                }
    
            } )
        );
        

    }
    
}
// Numero404 è da fare console.log()

let firstUser = new Smartphone();
let secondUser = new Smartphone();
let thirdUser = new Smartphone();

// Primo utente
console.log(firstUser.numero404());
firstUser.ricarica(5);
console.log(firstUser.numero404());
firstUser.getNumeroChiamate();
firstUser.chiamata(1);
firstUser.getNumeroChiamate();
firstUser.chiamata(5);
firstUser.chiamata(4);
console.log(firstUser.numero404());
firstUser.azzeraChiamate();
firstUser.getNumeroChiamate();
firstUser.mostraRegistroChiamate();
firstUser.filtraChiamatePerDataOra( new Date('26/05/2023'), 16);


// Secondo utente
console.log(secondUser.numero404());
secondUser.ricarica(5);
console.log(secondUser.numero404());
secondUser.getNumeroChiamate();
secondUser.chiamata(1);
secondUser.getNumeroChiamate();
secondUser.chiamata(5);
secondUser.chiamata(4);
console.log(secondUser.numero404());
secondUser.azzeraChiamate();
secondUser.getNumeroChiamate();
secondUser.mostraRegistroChiamate();
secondUser.filtraChiamatePerDataOra( new Date('26/05/2023'), 16);

// Terzo utente
console.log(thirdUser.numero404());
thirdUser.ricarica(5);
console.log(thirdUser.numero404());
thirdUser.getNumeroChiamate();
thirdUser.chiamata(1);
thirdUser.getNumeroChiamate();
thirdUser.chiamata(5);
thirdUser.chiamata(4);
console.log(thirdUser.numero404());
thirdUser.azzeraChiamate();
thirdUser.getNumeroChiamate();
thirdUser.mostraRegistroChiamate();
thirdUser.filtraChiamatePerDataOra( new Date('26/05/2023'), 16);