type hero = {
  name: string;
  nickname: string;
};

function PrintObject(person: hero) {
  console.log(person);
  let birthday: Date = new Date("2023-10-15");
  console.log(birthday.toString());
}

PrintObject({
  name: "Allyson Batista",
  nickname: "Iron Man"
});


/* KNOWLOGMENT */
// Primitive types: boolean, number, string
let turnedOn: boolean = false;
let namePerson:string = "Allyson";
let age: number = 30;
let height: number = 1.76;

// Special types
let nullType: null = null;
let undefinedType: undefined = undefined;

// Comprehensive types
let returnType: void;
let returnView: any = false; // Or any type of variable

// No-typed Object without predictability
let product: object = {
  name: "Allyson",
  city: "João Pessoa",
  age: 30
 };
 
 //Typed Object with predictability
 type StoreProduct = {
  name:string;
  price:number;
  unity:number;
 }
 
 let myProduct: StoreProduct = {
   name: "Shoes",
   price: 87.99,
   unity: 5
 };

 //Date type
 let birthday: Date = new Date("2023-10-15");

 // Array
let dados:string[] = ["Allyson", "Batista", "Gomes"];
let dados2:Array<string> = ["Allyson", "Batista", "Gomes"];

// Multi types Array
let infos: (string | number)[] = ["Allyson", 30, "Batista", "Gomes"];

// Tuplas
let bill:[string, number, number] = ["restaurant", 51.92, 5465165465168];

// Method Array
dados.pop();
// dados.map();
// dados.reduce();
// dados.filter();

// Functions
function SumNumber(x: number, y:number): number {
  return x + y;
}

function CallHelloName(name: string): string {
  return `Hello ${name}`;
}

function CallToPhone(phone: number | string): number | string {
  return phone;
}

async function GetDatabase(id:number):Promise<number | string> {
  return "Allyson";
}

let sum: number = SumNumber(4, 7);
let helloName: string = CallHelloName("Allyson");

console.log(`${helloName}, the retun from sum is: ${sum}`)
console.log(`The phone number is: ${CallToPhone("+55")}-${CallToPhone("123")}`);

// Interfaces
type robot = { // For typing a specific variable
  readonly id:number | string;
  name:string;
};

interface robotInterface { // When it works with classes
readonly id:number;
name:string;
};

const bot1: robot = {
  id:1,
  name: "Megaman"
};

const bot2: robotInterface = {
  id:1,
  name: "Megaman"
};

console.log(bot1);
console.log(bot2);