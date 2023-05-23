class Account{

    protected balanceInit:number

    public oneDeposit(amount:number):void{
        this.balanceInit += amount;
        console.log(`È stato effettuato un deposito di ${amount}€.`);
        console.log(`Il nuovo saldo è di ${this.balanceInit}€.`); 
    }

    public oneWithDraw(amount:number):void{

        if(amount > this.balanceInit){
            console.log("Stai cercando di ritirare più denaro di quanto ne possiedi");            
            console.log("Il tuo saldo disponibile è di: " + this.balanceInit  + "€");
            return
        }else{
            this.balanceInit -= amount;
            console.log(`È stato effettuato un prelievo di ${amount}€.`);
            console.log(`Il nuovo saldo è di ${this.balanceInit}€.`);   
        }

    }

    public showBalance():void{
        console.log("Il saldo attuale del conto è di " + this.balanceInit + "€");
    }

    constructor(balanceInit:number = 0){
        this.balanceInit = balanceInit;
    }

}

class MotherAccount extends Account{

    public addInterest():void{
        this.balanceInit += ( this.balanceInit * 0.1 );
    }
    
}

let sonAccount = new Account(5);
let motherAccount = new MotherAccount(100)

sonAccount.oneWithDraw(10);
sonAccount.showBalance();


// motherAccount.showBalance();
// motherAccount.addInterest();
// motherAccount.showBalance();