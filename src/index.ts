// Class decorator
function ApiVersion(version:string) {
  return (targer:any) => { //Factory is a function which return another function
    Object.assign(targer.prototype, {__version: version, __name: "Allyson"}) // __ makes the attribute version private
  }
}

// Attribute decorator
function MinLength(length:number) {
  return (target:any, key:string) => {
    let _value = target[key];

    const getter = () => `$Player: ${_value}`;
    const setter = (value:string) => {
      if(value.length < length) {
        throw new Error(`The length is less than ${length}`);
      } else {
        _value = value;
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    })
  }
}

@ApiVersion("1.10")
class Api {
  @MinLength(3)
  name:string;

  constructor(name:string) {
    this.name = name;
  }
}

const api = new Api("Allyson");

console.log(api.name);