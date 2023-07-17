class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas
    }

    honk() {
        console.log('Tuut tuut');
        console.log('Brand is: ' + this.brand);
        console.log('Model is: ' + this.model);
        console.log('Year made: ' + this.year);
        console.log('Color: ' + this.color);
        console.log('Price: ' + this.price);
    }

    race(lap){
        let yearDiff = new Date().getFullYear() - this.year;
        this.gas = this.gas - 5 - yearDiff;
        if (this.gas <= 0) {
            console.log(this.brand + ' is out of the race due to fuel.');
        }
        else {
            console.log(this.brand + ' has ' + this.gas + ' Left after lap ' + lap);
        }
    }
}

const car1 = new Car('Honda', 'CR-V', 2023, 'Red', 50000, 45);
const car2 = new Car('Ford', 'F-150', 2020, 'Black', 25000, 30);
const car3 = new Car('BMW', 'X5', 2022, 'Green', 60000, 65);
const car4 = new Car('Mazda', 'CX-5', 2019, 'White', 15000, 60);
const car5 = new Car('Audi', 'Q7', 2018, 'Silver', 52000, 47);
const car6 = new Car('Kia', 'Forte', 2020, 'Blue', 21000, 56);

car1.honk();
console.log('\n');
car2.honk();
console.log('\n');
car3.honk();
console.log('\n');
car4.honk();
console.log('\n');
car5.honk();
console.log('\n');
car6.honk();
console.log('\n');

//Race between all the cars for 7 rounds
for (let i = 0; i < 7; i++) {
    console.log('Lap ' + (i + 1));
    car1.race((i+1));
    car2.race((i+1));
    car3.race((i+1));
    car4.race((i+1));
    car5.race((i+1));
    car6.race((i+1));
    console.log('\n');
}