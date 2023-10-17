// Classes

/*
  // Data modifiers
  They can be used in both method and attributes (variables)

  readonly > it can be accessed but it can't be modified
  private > it can only be accessed within the class throw constructor method;
  public > it can be accessed from everywhere;
  protected > it can only be accessed within the class and its extended classes;
*/

class Character {
  protected name?:string;
  readonly stregth:number;
  skill:number;

  constructor(name:string, stregth: number, skill: number) {
    this.name = name;
    this.stregth = stregth;
    this.skill = skill;
  }

  Attack():void {
    console.log(`Attack with ${this.stregth} points`);
  }
}

// Character: super class (parent)
// Magician: extends class (child)
class Magician extends Character {
  magicPoints:number;

  constructor(name: string, stregth:number, skill:number, magicPoints:number) {
    super(name, stregth, skill);
    this.magicPoints = magicPoints;
  }
}

const char1 = new Character("Ryu", 10, 98);
const char2 = new Magician("Magician", 9, 30, 100);
