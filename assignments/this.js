/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Principle 1: Window/Global Binding: This will be the global value of the window or console.

* 2. Principle 2: Implicit Binding:
A function is called to the left of the dot of this, the object before the dot is this.

* 3. Principle 3: New Binding:
A constructor function is used to refer to an object at a specific time as its creates and returns said object.

* 4. Principle 4: Explicit Binding:
*Using the call or apply method  to define this.

* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
let principle1 = function(){
    console.log(`Principle One ${this}`)
    
}

principle1();


// Principle 2
// code example for Implicit Binding
let principle2 = {
    'concept': 'Implicit Binding',
    'whatAmI': function(name){
        console.log(`${this.concept} is ${name}`);
    }
};
principle2.whatAmI('Principle 2')


// Principle 3
// code example for New Binding

function principle3(name){
    this.concept = 'New Binding';
    this.name = name;
    this.announce = function(){
        console.log(`${this.concept} is ${this.name}`);
    }
};

const prin3 = new principle3('principle 3')

prin3.announce();

// Principle 4
// code example for Explicit Binding

function principle(){
    console.log(`${this.concept} is ${this.name}`)
}

let principle4 ={
    'name': 'Principle 4',
    'concept': 'Explicit Binding',
};

let princ4 = principle.bind(principle4)

princ4()