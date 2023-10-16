"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function PrintObject(person) {
    console.log(person);
    let birthday = new Date("2023-10-15");
    console.log(birthday.toString());
}
PrintObject({
    name: "Allyson Batista",
    nickname: "Iron Man"
});
let turnedOn = false;
let namePerson = "Allyson";
let age = 30;
let height = 1.76;
let nullType = null;
let undefinedType = undefined;
let returnType;
let returnView = false;
let product = {
    name: "Allyson",
    city: "João Pessoa",
    age: 30
};
let myProduct = {
    name: "Shoes",
    price: 87.99,
    unity: 5
};
let birthday = new Date("2023-10-15");
let dados = ["Allyson", "Batista", "Gomes"];
let dados2 = ["Allyson", "Batista", "Gomes"];
let infos = ["Allyson", 30, "Batista", "Gomes"];
let bill = ["restaurant", 51.92, 5465165465168];
dados.pop();
function SumNumber(x, y) {
    return x + y;
}
function CallHelloName(name) {
    return `Hello ${name}`;
}
function CallToPhone(phone) {
    return phone;
}
function GetDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Allyson";
    });
}
let sum = SumNumber(4, 7);
let helloName = CallHelloName("Allyson");
console.log(`${helloName}, the retun from sum is: ${sum}`);
console.log(`The phone number is: ${CallToPhone("+55")}-${CallToPhone("123")}`);
;
const bot1 = {
    id: 1,
    name: "Megaman"
};
const bot2 = {
    id: 1,
    name: "Megaman"
};
console.log(bot1);
console.log(bot2);
