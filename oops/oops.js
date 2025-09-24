//jab koi function ko call krtw wakt aage new keyword laga doo, toh vo ek blank object create krta hai

//vo blank object me data store/access krne ke liye this word ka use kr sakte hai


//old tarika - function ka naam hamesha capital hona chahiye
// function Toffee(flavor, color, taste) {
//     this.flavor = flavor
//     this.color = color
//     this.taste = taste
// }

// let obj1 = new Toffee('Chocolate', 'brown', 'sweet')
// console.log(obj1);

//new tarika - classes ka use
// class Toffee {
//     constructor(flavor, color, taste) {
//         this.flavor = flavor
//         this.color = color
//         this.taste = taste
//     }
// }

// let obj1 = new Toffee('Chocolate', 'Brown', 'sweet')
// let obj2 = new Toffee('Vanilla', 'White', 'sweet')
// let obj3 = new Toffee('Coffee', 'darkBrown', 'sour')
// console.log(obj1.flavor);
// console.log(obj2.flavor);
// console.log(obj3.flavor);