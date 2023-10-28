import { Animal, Owner, Dog, Pet, Cat} from "./animal";

describe('Animal', () => {
  it("should be able to eat", () => {
    const animal = new Animal('Dog');
    expect(animal.eat()).toBe("I am eat")
  })
})

describe('Owner', () => {
  it("should be able to play with dog", () => { 
    const dog: Pet = new Dog('Dog');
    const owner = new Owner();
    owner.have(dog);
    
    expect(owner.play()).toBe("Dog played")

    const cat: Pet = new Cat('Cat');
    owner.have(cat);
    
    expect(owner.play()).toBe("Cat played")
  })
})