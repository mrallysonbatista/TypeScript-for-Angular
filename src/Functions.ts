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