class HotelBooking {
    public customerName: string;
    public roomType: string;
    public pricePerNight: number;
    public nights: number;

    constructor(name: string, room: string);
    constructor(name: string, room: string, price: number, nights: number);

    constructor(name: string, room: string, price?: number, nights?: number) {
        this.customerName = name;
        this.roomType = room;
        this.pricePerNight = price ?? 2500;
        this.nights = nights ?? 1;
    }

    public calculateBill(): number {
        return this.pricePerNight * this.nights;
    }

    public displayDetails(): void {
        console.log("------ Hotel Booking ------");
        console.log("Customer Name : " + this.customerName);
        console.log("Room Type     : " + this.roomType);
        console.log("Price/Night   : " + this.pricePerNight);
        console.log("Number of Nights : " + this.nights);
        console.log("Total Bill    : " + this.calculateBill());
        console.log("---------------------------\n");
    }
}

const booking1 = new HotelBooking("Pallavi", "Deluxe", 3500, 3);
const booking2 = new HotelBooking("Anusha", "Standard");

booking1.displayDetails();
booking2.displayDetails();

booking2.nights = 2;   // Object property modified after creation

console.log("Updated Bill for Anusha: " + booking2.calculateBill());