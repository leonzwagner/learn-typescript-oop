describe("Properties", () => {
  class Customer {
    readonly id: number;
    name: string;
    age?: number;

    constructor(id: number, name: string, age: number) {
      this.id = id;
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should can have properties", () => {
    const customer = new Customer(1, "John");
    customer.age = 20;

    console.info(customer.id);
    console.info(customer.name);
    console.info(customer.age);
    console.info(customer);
  });

  it("Should have methods", () => {
    const customer = new Customer(1, "Eko");
    customer.sayHello("Andi");
  });
});
