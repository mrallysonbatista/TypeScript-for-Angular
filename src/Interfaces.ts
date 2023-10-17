// Interfaces
type robot = { // For typing a specific variable
  readonly id:number | string;
  name:string;
};

interface robotInterface { // When it works with classes
readonly id:number | string;
name:string;
SayHello(): string;
};

const bot1: robot = {
  id:1,
  name: "Megaman"
};

const bot2: robotInterface = {
  id: 1,
  name: "Megaman",
  SayHello: function (): string {
    throw new Error("Function not implemented.");
  }
};

console.log(bot1);
console.log(bot2);

class Person implements robotInterface {
  id: number | string;
  name: string;

  constructor(id:number | string, name: string) {
    this.id = id
    this.name = name
  }

  SayHello(): string {
    return `Hello from SayHello()! I'm ${this.name}`;
  }  
}

const p = new Person(1, "Batman");
console.log(p.SayHello());