//Q2 

let firstName : string = "Murtaza";
console.log(`Hello ${firstName} would you like to learn some Python today?`)

//Q3

let personName : string  = "syed murtaza";
let titlecaseName = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log("Titlecase:", titlecaseName);

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(titlecaseName);

//Q4

console.log("Imam Ali once said,", '"The disease of the heart is worse than the disease of the body."');

//Q5

let famous_person : string = "Imam Ali";
let message : string = "The disease of the heart is worse than the disease of the body";

console.log(`${famous_person} Once said, "${message}."` );

//Q6

let secondName : string = "\t \n Syed Murtaza \t";

console.log("Name with white spaces:", secondName);
console.log("Name without white spaces:", secondName.trim());

//Q7

let number : number = 4;

console.log("Addition:", number + number);
console.log("Subtraction:", 12 - number);
console.log("Multiplication:", number * 2);
console.log("Division:", 32 / number);


//Q8

console.log(4 + 4);
console.log(12 - 4);
console.log(4 * 2);
console.log(32 / 4);


//Q9