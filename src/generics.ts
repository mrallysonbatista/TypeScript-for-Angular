/*
// Generics
  It allows you to choose which type of attributes it can return you
  (...) > Spread syntax allows an iterable, such as array, to be expanded in places

*/

function ConcatArray<T>(...itens:T[]):T[] {
  return new Array().concat(...itens);
}

const numArray = ConcatArray<number[]>([1,5], [3]);
const stringArray = ConcatArray<string[]>(["Allyson", "Batista"], ["Gomes"]);

console.log(numArray);
console.log(stringArray);