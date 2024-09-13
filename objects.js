//Step 1
//Object contains = {key(e.i the "key" given to a value): value(e. i: string, number, boolean)}
const myObj = {
    name: "danny",
    age: 28,
    isSmart: true,
    details: {
        computer: "Windows",
        phone: "Samsung S20 FE",
        desk: "Grey"
    }
}
//console.log(object)
console.log(myObj);

//console.log(object.key)
console.log(myObj.name);

//console.log(object.key)
console.log(myObj.age);

//console.log(object.key)
console.log(myObj.isWicked);

//console.log(object.object.key)
console.log(myObj.details.computer);

//Step 2
const avengerName = "Black Widow"

//Avenger is an Object holding all the information.
const avenger = {
    key: "value",
    name: avengerName,
    isSmart: true,
    //Details is an Key with the Value of an Object integrated/Inside the Key i.e, (Doorway to your answer).
    details: {
        canFight: true,
        //Gender is a Key with the value of a Boolean
        gender: "Female",
        weapons: "Stun Guns",
    },
    friends: [
        "Captain America",
        "Doctor Strange",
        "Hawkeye"],
}

//This will show and target avengers and print Black Widow with Gender
console.log(avenger.details.gender);

//Targets Hawkeye in Array within friends. targeting an object first then a key then the boolean, in that order.
console.log(avenger.friends[2]);

//Targets Captain America in the list of friends in an Array
console.log(avenger.friends[0]);

// const value1 = "stewie"

// const awesomeOjb = {
//     name: value1,
//     age: "28",
//     isValid: true,
// }

//This is an example of using dynamic keys and targeting sections to print out in full or in parts
//This function will key all details shown below in that order.
const car = {
    make: "Ford",
    model: "Puma",
    year: "2024",
    keys: "fob",
    doors: " 5 doors",
    intake: "petrol",
    registration: "BK68 GPN",
    isFacts: true,
}

//This to show all details in the function/app (car)
console.log(car);

//To target a specific section use (car.model), (car.registration)
//This will target and print the model section of the car only.
console.log(car.model);