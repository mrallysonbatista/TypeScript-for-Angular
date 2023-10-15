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
// dados.map();
// dados.reduce();
// dados.pop();
// dados.filter();