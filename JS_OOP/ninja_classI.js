function Ninja(name) {
    
    this.name = name;    
    var speed = 3;
    var strength = 3;
    this.health = 100;
    
    this.showStats = function(){
      console.log( 'Name: ' + this.name+'\n'
            +'Strength: '+ strength+'\n'
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


const ninja1 = new Ninja('Catboy');
ninja1.sayName();
ninja1.showStats();
