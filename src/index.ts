type hero = {
  name: string;
  nickname: string;
};

function PrintObject(person: hero) {
  console.log(person);
}

PrintObject({
  name: "Allyson Batista",
  nickname: "Iron Man"
});