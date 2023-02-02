export default class HelloWorld {

  constructor(private readonly message:string = 'Hello, world!') {};

  speak() {
    console.log(`HelloWorld says: ${this.message}`);
  }
}
