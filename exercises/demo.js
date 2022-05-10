const string = `I'm lookin' to the sky to save me
Lookin' for a sign of life
Lookin' for somethin' to help me burn out bright
And I'm lookin' for a complication
Lookin' cause I'm tired of tryin'
Make my way back home when I learn to fly high`;

// Count how many letter 'o's are in this string?

//C-Style loop
// let oCounter = 0;
// for(let i = 0; i < string.length; i++){
//     // console.log(string[i]);
//     if(string[i] === "o"){
//         oCounter++;
//     }
// }
// console.log("o =", oCounter);

// //for in - index
// for(let index in string){
//     console.log(index);
//     console.log(string[index]);
//     console.log("________________________________________")
// }

// for of - value of array[index]
// for(let letter of string){
//     console.log(letter);
// }

// Make it a function
const countO = function(string){
    let oCounter = 0;
    let aCounter = 0;
    for(let letter of string){
        // console.log(letter);
        if(letter === "o"){
            oCounter++
        } else if (letter === "a"){
            aCounter++
        }
    }
    // return [ oCounter, aCounter];
    return {a:aCounter, o:oCounter };
}
// console.log("a =", countO(string)[0], "o =", countO(string)[1])
// console.log(countO(string).o);

// Count "o" and "a"


//                  0           1       2       3
const carArray = ['hyundai', 'elantra', 2020, 'silver'];
// console.log("make = ", carArray[0]);

//push to add

//objects
const car = {
    make:"hyundai",
    model:"elantra",
    year:2020,
    color:"silver"
}

// console.log("year = ",car.year);

// context of value
// keys must be unique!!!
car.drivers = ["Tomo", "Koki", "Asafe"];
car.model = "kona";
car.model = ["elantra", "kona"];
// console.log(car);


// how to access obj values
// console.log(car.color);
// console.log(car["color"]);

car["release-date"] = 2019;
// console.log(car["release-date"]);


//vowel counter
const vowelCounter = function(string){
    const lowerCaseString = string.toLowerCase();
    let vowels = {
        a:0,
        e:0,
        i:0,
        o:0,
        u:0
    }
    for(letter of lowerCaseString){
        if(letter === "a"){
            vowels.a++
        } else if(letter === "e"){
            vowels.e++
        } else if(letter === "i"){
            vowels.i++
        }else if(letter === "o"){
            vowels.o++
        }
        else if(letter === "u"){
            vowels.u++
        }
    }
    return vowels;
}


//loop through obj
const vowelsObj = vowelCounter(string);

const keys = Object.keys(vowelsObj);
// const values = Object.values(vowelsObj);

// for of only works with arrays!
// for(let vowel of keys ){
//     console.log(vowel);
// }
for(let vowel in vowelsObj){
    //print keys
    // console.log(vowel);
    
    //print values
    // console.log(vowelsObj[vowel]);
}

//nested objs
const person = {
    address: {
        street: "101 Main St"
    }
}
// console.log(person.address.street);

