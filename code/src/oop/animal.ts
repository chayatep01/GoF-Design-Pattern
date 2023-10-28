export class Animal {

  private breed: string = 'unknown';
  
  constructor(breed: string) {
    this.breed=breed;
  }

  eat() {
    return "I am eat"
  }
}

export interface Pet  {
  play(): string;

}

export class Dog extends Animal implements Pet{
  play(): string {
    return "Dog played"
  }
}

export class Cat extends Animal implements Pet{
  play(): string {
    return "Cat played"
  }
}

export class Owner{
  private pet: Pet| undefined;
 
  have(pet: Pet) {
    this.pet = pet;
  }

  play() {
    return this.pet?.play()
  }
}


