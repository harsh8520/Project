//so agar multiple opjects ke aandar agar kisi key ko same hii rakhna hai toh prototype use krte hai. constructor function ka naam likh ke .prototype daalke jo value default/shared rakhni hai vo rakh sakte hai

function Name(name, age, isAlive) {
    this.name = name
    this.age = age
    this.isAlive = isAlive
}
Name.prototype.hello = function(){console.log("Hello")}

let n1 = new Name('Harsh',19,'true')

let hello = n1.hello()
console.log(hello);