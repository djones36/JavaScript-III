/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
//Constructor functions
//Parent
function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function (){
  return `${this.name} was removed from the game.`;
};


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

//Constructor functions
//Child
function CharacterStats(attributes){
  GameObject.call(this, attributes)
  this.healthPoints = attributes.healthPoints;
};

//Protoype
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`;
};


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
// constructor functions
//Grandhcild
function Humanoid(attributes){
  CharacterStats.call(this, attributes)
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language =attributes.language;
}

//prototypes
Humanoid.prototype = Object.create(CharacterStats.prototype)
Humanoid.prototype.greet = function() {
  return `${this.name} offers a geeting in ${this.language}. `;
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
function VillainStats(attributes){
  Humanoid.call(this, attributes);
};

VillainStats.prototype = Object.create(Humanoid.prototype);

function HeroStats(attributes){
  Humanoid.call(this, attributes)
};

HeroStats.prototype = Object.create(Humanoid.prototype);

  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  
  VillainStats.prototype.takingDamage = function(){
    let name = this.name;
    let health = this.healthPoints;

     return function(){

     health -= 4

     if (health > 0){
       return console.log(`${name} is taking damage, the current ${health} hp`)
     } else if (health <= 0){
       console.log(`${name} has died`);
     }

    };

  };

  HeroStats.prototype.feelingPain = function(){
    let name = this.name;
    let health = this.healthPoints;

    return function() {

     health -= 2;
     if (health > 0){
      return console.log(`${name} is taking damage, the current ${health} hp`)
     }else if (health <= 0){
       console.log(`${name} has fallen`);
     }

    };

  };

  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  let hero = new HeroStats({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 6,
    },
    healthPoints: 8,
    name: 'Hero',
    team: 'Hero Team',
    weapons: [
      'Sword',
      'Bow',
    ],
    language: 'Hero speak',
  });

  let villain = new VillainStats({
    createdAt: new Date(),
    dimensions: {
      length: 5,
      width: 8,
      height: 12,
    },
    healthPoints: 22,
    name: 'Villain',
    team: 'Evil Guy',
    weapons: [
      'Big Fire Fist',
      'Big Flame Sword',
    ],
    language: 'Evil speak',
  });
let takeDamage = villain.takingDamage();
let  feelPain = hero.feelingPain();
takeDamage();
feelPain();
takeDamage();
feelPain();
takeDamage();
feelPain();
takeDamage();
feelPain();

