class DigitalWallet{
    public holdername:string;
    private balance:number;
    private secretpin:number;
    protected loyaltypoints:number=0;
    constructor(name:string,initialDeposit:number,pin:number){
        this.holdername=name;
        this.balance=initialDeposit;
        this.secretpin=pin;
    }
    public withdrawMoney(amount:number,enteredpin:number):void{
        if(this.verifypin(enteredpin)){
            if(this.balance>=amount){
                this.balance-=amount;
                console.log(`${amount} withdrawn succesfully. Remaining:${this.balance}`);
            }else{
                console.log("Inadequate funds in ypur wallet");
            }
        }else{
                console.log("Incorrect pin transaction declined");
            }
        }
        private verifypin(pin:number):boolean{
            return this.secretpin==pin;
        }
    }
    class premiumwallet extends DigitalWallet{
        public addBonus(): void{
            this.loyaltypoints+=100;
            console.log(`Bonus added!Total points:${this.loyaltypoints}`);
        }
    }
    const mywallet=new DigitalWallet("Akash Murthy",4000,4567);
    console.log(`Welcome,${mywallet.holdername}`);
    mywallet.withdrawMoney(1000,7986);