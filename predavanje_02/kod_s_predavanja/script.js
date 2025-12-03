// alert("Ovo je prazna stranica");

var x = 10;
x = 10n;
x = false;
console.log(typeof(x));


let y = 5;

console.log(y);

/*
function ask_user() {
    return prompt("Recite svoje mišljenje");
}

let response = ask_user();
console.log(response);
*/

(function() {

})();

let numbers = [1, 2, 3, 4, 5];
let even_numbers = numbers.map(function(el) {
    return 2 * el;
});
console.log(numbers);
console.log(even_numbers);

// objekti

const upgrade_age = (person) => {
    person.age += 1;
}



let person = { 
    username: "jmaltar", 
    age: 31, 
    print: () => {
        console.log(this.username, this.age);
    } 
};
// console.log(person);
// pass by reference
upgrade_age(person);

// pass by value / spread operator
upgrade_age({...person});
// console.log(person);

person.print();

// definirati funkciju koja prihvaća callback funkciju
const findMax = (arr, callb) => {
    let m = arr[0];

    for (let el of arr) 
        if (el > m)
            m = el;

    callb(m);    
}

// pozvati
findMax([10, -10, 100, -5.5], (x) => {
    console.log(x);
});

const aaaa = (x) => {
    console.log("aaaa");
}

findMax([10, -10, 100, -5.5], aaaa);

findMax([10, -10, 100, -5.5], console.log);
// findMax([10, -10, 100, -5.5]) // error

