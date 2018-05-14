function Ninja(name) {
    
    this.name = name;    
    var speed = 3;
    this.strength = 3;
    this.health = 100;
    
    this.showStats = function(){
      console.log( 'Name: ' + this.name+'\n'
            +'Strength: '+ this.strength+'\n'
            +'Speed: '+ speed +'\n'
            +'Health: '+ this.health);
      return this;
    }    
  
  }
   
  Ninja.prototype.sayName = function(){
    console.log('My name is: ' + this.name);
    return this;
  }

  Ninja.prototype.drinkSake = function(){
    this.health += 10;
    return this;
  }

  Ninja.prototype.punch = function(ninja){
    ninja.health -=5;
    console.log(ninja.name + ' was punched by '+ this.name+ ' and lost 5 health')
    return this;
  }
  
  Ninja.prototype.kick = function(ninja){
    var strength = this.strength;
    var loss = 3*strength;
    ninja.health -=loss;
    console.log(ninja.name + ' was kicked by '+ this.name+ ' and lost '+ loss +' health');
    return this;
  }

const catboy = new Ninja('Catboy');
const romeo = new Ninja('Romeo');
catboy.punch(romeo);
romeo.kick(catboy);
console.log();
catboy.showStats();
console.log();
romeo.showStats();
