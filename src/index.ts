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

let dado:string = "Gomes";
console.log(dado);