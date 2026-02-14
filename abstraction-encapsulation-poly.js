// 1️⃣ Abstraction
// 👉 Showing only what is necessary, hiding implementation details

class Payment {
  pay(amount) {
    throw new Error("pay() must be implemented");
  }
}

class CreditCardPayment extends Payment {
  pay(amount) {
    console.log(`Paid ₹${amount} using Credit Card`);
  }
}

class UpiPayment extends Payment {
  pay(amount) {
    console.log(`Paid ₹${amount} using UPI`);
  }
}

const amountOne = new CreditCardPayment();
amountOne.pay(200)

// 2️⃣ Encapsulation
// 👉 Binding data and methods together + restricting direct access
class BankAccount {
  #balance = 0;   // private field

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    console.log(this.#balance);
    
    return this.#balance;
  }
}

const mybalance = new BankAccount();
mybalance.getBalance();

// 3️⃣ Polymorphism
// 👉 Same method name, different behavior
class Shape {
  area() {
    return 0;
  }
}

class Rectangle extends Shape {
  area() {
    console.log("Area of rectangle: ", 10 * 20);
    
    return 10 * 20;
  }
}

class Circle extends Shape {
  area() {
    console.log("Area of circle: ", Math.PI * 5 * 5);
    return Math.PI * 5 * 5;
  }
}

const areaOfCircle = new Circle();
areaOfCircle.area()