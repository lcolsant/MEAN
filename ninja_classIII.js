class Ninja{
    constructor(name){
      this.name = name;    
      this.speed = 3;
      this.strength = 3;
      this.health = 100;
    }

    sayName(){
      return console.log(`My name is ${this.name}`);
    }

    showStats(){
      return console.log(`Name:${this.name},Strength:${this.strength},Speed:${this.speed},Health:${this.health}`);
    }    

    drinkSake(){
      this.health += 10;
      return this;
    }
  
}

class Sensei extends Ninja{
  constructor(name){
    super(name);
    this.name = name;    
    this.speed = 10;
    this.strength = 10;
    this.health = 200;
    this.wisdom = 10;
  }

  speakwisdom(){
    super.drinkSake();
    console.log('bottoms up!')
  }
  
  showStats(){
    return console.log(`Name:${this.name},Strength:${this.strength},Speed:${this.speed},Health:${this.health},Wisdom:${this.wisdom}`);
  }    

}
   
const splinter = new Sensei('Splinter');
splinter.sayName()
splinter.showStats()
splinter.speakwisdom()
splinter.showStats()

