console.log("I have started my career journey!");
let x = 10;
let y = "10";
//2. Without running it first, what do you think this prints?
console.log(x == y);
console.log(x === y);

//3. Write a function called calculateTotal that accepts: price, quantity
function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log(calculateTotal(100, 3));

//4. Find the largest number
const numbers = [10, 25, 7, 42, 18];
console.log(Math.max(...numbers)); 
//Traditional way to find the maximum number in an array
var maxNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
        
    }
}
console.log(maxNumber);

//5. Filter
//  Create a new array containing only numbers greater than 10.
const numberArray = [5, 12, 8, 20, 3, 15];
var newArray = [];
for(let i =0; i < numberArray.length; i++){
    if(numberArray[i] > 10){
        newArray.push(numberArray[i]);
    } 
}
console.log(newArray);

//6. map() Use map() to produce: [2, 4, 6, 8]
var originalArray = [1, 2, 3, 4];
var mappedArray = originalArray.map(function(num) {
    return num * 2;
});
console.log(mappedArray);

// Day 1 - JavaScript Arrays & Modern Array Methods
const numbers1 = [10, 25, 7, 42, 18];
for(let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}

//Find highest of all
const a = [1,2,3];
let highest = a[0];
for(let i=1
    ; i < a.length ;i++){
    if(a[i] > highest){
        highest = a[i];
    }
}
console.log(highest);

//Creating newArray items that are greator then 10 using filter()
const numbers2 = [5, 12, 8, 20, 3, 15];

const newArr = numbers2.filter( num => num % 2 );

console.log(newArr);


const numbers3 = [10, 20, 30, 40];
numbers3.forEach(num => console.log(num));

//filter() + map()
const numbers4 = [5, 12, 8, 20, 3, 15];
const res = numbers4.filter(num => num > 10).map(num => num *2);
console.log(res);

//find() + Arrays of Objects
//Find the employee whose name is "Meena".
//Result should be: { name: "Meena", role: "Developer", age: 31 }
const employees = [
    { name: "Anu", role: "Developer", age: 28 },
    { name: "Ravi", role: "Tester", age: 24 },
    { name: "Meena", role: "Developer", age: 31 },
    { name: "Kiran", role: "Manager", age: 35 }
];

const employee = employees.find(emp => emp.name === "Meena");
console.log(employee);

//Create a new array containing only the employees who are Developers.
// [ Expected:
//     { name: "Anu", role: "Developer", age: 28 },
//     { name: "Meena", role: "Developer", age: 31 }
// ]
    
const employee2 = employees.filter(emp => emp.role === "Developer");
console.log(employee2);

//Find all Developers, then return only their names in uppercase. ["ANU", "MEENA"]
//Method Chaining
const employee3 = employees.filter(emp => emp.role === "Developer")
                            .map(emp => emp.name.toUpperCase());
console.log(employee3);      

//Find all employees whose salary is greater than 60,000, and return only their names.

const employees2 = [
    { name: "Anu", role: "Developer", salary: 70000 },
    { name: "Ravi", role: "Tester", salary: 55000 },
    { name: "Meena", role: "Developer", salary: 80000 },
    { name: "Kiran", role: "Manager", salary: 90000 }
];

const returnEmp = employees2.filter(emp => emp.salary > 60000)
                   .map(emp => emp.name);
console.log(returnEmp);  

//Day 2: Part 1 Function Scope
let name1 = "Madhuri";

function greet() {
    let message = "Hello";
    console.log(name1);
    console.log(message);
}

greet();

console.log(name1);
//console.log(message);

//Arrow Functions
function add(a, b) {
    return a + b;
}
(a,b) => a+b;
const printName = name => console.log("Hello "+name);
printName("Madhu");

const fn = x => {
    const result = x * 2;
    return result;
};
console.log(fn(10));

//Block scope let, var, const
let age = 26;

if (age >= 18) {
    var message = "Adult";
    console.log(message);
}

console.log(message); //If let message is used : Gives ReferenceError: message is not defined
//var is function scope and let/ const is block scope
//This is one reason modern JavaScript generally prefers let and const instead of var.


//Exercise 1 — Function + arrow + filter
// Create a new array containing only numbers greater than 10.
// Requirements:
// Use filter()
// Use an arrow function
// Store the result in a variable called largeNumbers
//[12, 18, 25] Expected result

const numbers5 = [5, 12, 18, 3, 25, 10];
const largeNumbers = numbers5.filter(num => num > 10);
console.log(largeNumbers);

//Exercise 2 — Function + map()
// const numbers = [3, 6, 9, 12];
// Create a new array called doubledNumbers where every number is multiplied by 2.
// Requirements:
// Use map()
// Use an arrow function
// Don't use a for loop 
//expected result : [6, 12, 18, 24]

const numbers6 = [3, 6, 9, 12];
const doubledNumbers = numbers6.map(num => num * 2);
console.log(doubledNumbers);

//Exercise 3 — Real-world array of objects
//Your task
//Create a new array called developerNames that contains only the names of employees whose role is "Developer".
// ["Anu", "Meena"] Expected reult
//Requirements:  Use Requirements filter(), map(), arrow functiona, method chaining


const employees7 = [
    { name: "Anu", role: "Developer", salary: 50000 },
    { name: "Ravi", role: "Tester", salary: 45000 },
    { name: "Meena", role: "Developer", salary: 70000 },
    { name: "Kiran", role: "Manager", salary: 80000 }
];

const developerNames = employees7.filter(dev => dev.role === "Developer")
                                    .map(dev => dev.name);
console.log(developerNames);

//Exercise 4 — Slightly harder 🔥
//Create highPaidDevelopers -> It should contain the names of Developers whose salary is greater than 60000
//Expected op : ["Meena"]
const employees8 = [
    { name: "Anu", role: "Developer", salary: 50000 },
    { name: "Ravi", role: "Tester", salary: 45000 },
    { name: "Meena", role: "Developer", salary: 70000 },
    { name: "Kiran", role: "Manager", salary: 80000 }
];

const highPaidDevelopers = employees8.filter(emp => emp.role === "Developer" && emp.salary > 60000)
                           .map(emp => emp.name);
console.log(highPaidDevelopers);

//Get the names of all employees earning more than ₹60,000.
//Expected \: ["Meena", "Kiran"]

const highpaidEmp = employees8.filter(emp => emp.salary > 60000)
                                .map(emp => emp.name);
console.log(highpaidEmp);

//REQ: Find the first employee who is a Developer and has a salary greater than ₹60,000.
//Expected: { name: "Meena", role: "Developer", salary: 70000 }
//irst emp so usinf find()

const highpaidDev = employees8.find(emp => emp.role === "Developer" && emp.salary > 60000);
console.log(highpaidDev);

//Day 3: Objects. Updating/ modifying objects, Nested objects, Destructuring objects
//Part 5 — Arrays of Objects + Destructuring
//Given: I want you to create three variables using destructuring: name, salary, city. Then console those 
//Dont use dot notations!!!
const employee4 = {
    name: "Meena",
    role: "Developer",
    salary: 70000,
    city: "Hyderabad"
};

const {name, salary, city} = employee4;
console.log(name);
console.log(salary);
console.log(city);

//Destructuring Challenge 2 — Rename while destructuring
//I want a variable called employeeName instead of a variable called name. do console.log(employeeName);
const employee5 = {
    name2: "Meena",
    salary1: 70000,
    city1: "Hyderabad"
};

const {name2: employeeName, salary1, city1} = employee5;
console.log(employeeName);

//Part 6 — Array Destructuring
//Part 7 — Spread Operator ...
/* Create a new array called newFruits that contains: Use Spread operator
apple
banana
orange
mango
grapes*/
const fruits = ["apple", "banana", "orange"];
const newFruits = [...fruits, "mango", "grapes"];
console.log(fruits);
console.log(newFruits);

//Spread with Objects
/* 
Create a new object called promotedEmployee that:

keeps the existing name
changes role to "Senior Developer"
changes salary to 85000
does not modify the original employee
*/
const employee6 = {
    name: "Meena",
    role: "Developer",
    salary: 70000
};

const promotedEmployee = {...employee6 , role: "Senior Developer", salary: 85000};
console.log(promotedEmployee);

//Final
 const employees1 = [
    { name3: "Anu", role: "Developer", salary3: 50000 },
    { name3: "Ravi", role: "Tester", salary3: 45000 },
    { name3: "Meena", role: "Developer", salary3: 70000 },
    { name3: "Kiran", role: "Manager", salary3: 80000 }
];

const developerDetails = employees1.filter(emp => emp.role === "Developer")
                                    .map(emp => {
                                        const {name3, salary3} = emp;   
                                        return { name3, salary3};
                                    });
// const {name3, salary3} = developerDetails;
console.log(developerDetails);

//Rest operator
function showNumbers(first, ...rest) {
    console.log(first);
    console.log(rest);
}

showNumbers(10, 20, 30, 40);

//Day 4 — JavaScript: Strings + Deeper Array Practice
//Transforming strings
const userInput = "   React Developer   ";

console.log(userInput.trim()); //Removes spaces at start and end but Doenst remove spaces beween words
console.log(userInput.trim().toLowerCase());

//split() vs join()
const skills = "JavaScript,React,Node";
const result = skills.split(",");
console.log(result);

const sentence = "I love JavaScript";

const words = sentence.split(" ");

console.log(words);
console.log(words.join("-"));

//Excercise Expected op: ["JavaScript", "React", "Node"]
const input = "  JavaScript, React, Node  ";
const result1 = input.split(",").map(ele => ele.trim());
console.log(result1);

//Challenge: Find the employees who know React.
const employees3 = [
    { name: "Anu", skills: "JavaScript, React, Node" },
    { name: "Ravi", skills: "Java, Spring" },
    { name: "Meena", skills: "JavaScript, React" },
    { name: "Kiran", skills: "Python, Django" }
];

const reactEmps = employees3.filter(emp => emp.skills.includes("React")).map(emp=> emp.name);
console.log(reactEmps);

//Expected reactEmployees variable to return
/*
[
    { name: "Anu", skills: "JavaScript, React, Node" },
    { name: "Meena", skills: "JavaScript, React" }
] 
*/
const reactEmployees = employees3.filter(emp => emp.skills.includes("React"))
                                .map( emp=> {
                                     const {name, skills} = emp;
                                     return {name, skills};
                                });
console.log(reactEmployees);

//Find the first employee whose salary is greater than 60,000, and store the result in highPaidEmployee.
/* Don't use filter() + [0]. I specifically want you to practice find() here.
exp result:
 {
    name: "Meena",
    role: "Developer",
    salary: 70000
}
*/
const employees4 = [
    { name: "Anu", role: "Developer", salary: 50000 },
    { name: "Ravi", role: "Tester", salary: 45000 },
    { name: "Meena", role: "Developer", salary: 70000 },
    { name: "Kiran", role: "Manager", salary: 80000 }
];

const highPaidEmployee = employees4.find(emp => emp.salary > 60000);
console.log(highPaidEmployee);

//Final Day-4 Challenge
//Find all Developers who know React and earn more than 60,000, and return only their name and salary.
/*
    exp result:
    [
        { name: "Meena", salary: 70000 }
    ]   
*/


const employees5 = [
    { name: "Anu", role: "Developer", skills: "JavaScript, React, Node", salary: 50000 },
    { name: "Ravi", role: "Tester", skills: "Java, Selenium", salary: 45000 },
    { name: "Meena", role: "Developer", skills: "JavaScript, React", salary: 70000 },
    { name: "Kiran", role: "Manager", skills: "Python, Django", salary: 80000 }
];

const highReactEmps = employees5.filter(emp => emp.role === "Developer" && emp.skills.includes("React") && emp.salary > 60000)
                                .map(emp => { 
                                            const {name, salary} = emp;
                                            return {name, salary};
                                        });
console.log(highReactEmps);            


//Day 5: Default parameters
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Madhuri");
greet(undefined);
greet(null);

//Imagine we want a function that calculates the total of any number of prices:
function calculateTotal(...prices) {
    let res = 0;
    for(let i=0; i< prices.length; i++){
       res = res + prices[i];
    }
    return res;
}
console.log(calculateTotal(100,200,50));

//Optional Chaining ?.
const user = {
    name: "Madhuri",
    profile: {
        city: "Visakhapatnam"
    }
};

console.log(user.profile?.city);
console.log(user.profile?.age );
console.log(user.address?.city);

//Optional Chaining and Nullish Coalescing
const user1 = {
    profile: {
        city: "Hyderabad"
    }
};

const user2 = {
    profile: null
};

const user3 = {
    profile: {
        city: ""
    }
};

console.log(user1.profile?.city ?? "Unknown"); //Hyderabad
console.log(user2.profile?.city ?? "Unknown"); // Unknown
console.log(user3.profile?.city ?? "Unknown"); // ""


//default parameters + arrow functions + destructuring + ?. + ?? together.
/*
Make getEmployeeInfo(employee) return an object like:
{
    name: "Ravi",
    city: "Hyderabad"
}

Rules:
Use an arrow function
Use destructuring
Use ?.
Use ??
Use the fallbackCity parameter as the final fallback
Test as:
console.log(getEmployeeInfo(employees6[0]));
console.log(getEmployeeInfo(employees6[1]));
console.log(getEmployeeInfo(employees6[2]));

*/
const employees6 = [
    {
        name: "Ravi",
        role: "Developer",
        profile: { city: "Hyderabad" }
    },
    {
        name: "Meena",
        role: "Tester",
        profile: null
    },
    {
        name: "Arjun",
        role: "Developer",
        profile: { city: "" }
    }
];

const getEmployeeInfo = (employee, fallbackCity = "Unknown") => {
    //console.log(employee);
    // const name = employee.name;
    // const city = employee.profile?.city??fallbackCity;
    const {name, profile} = employee;
    const city = profile?.city ?? fallbackCity;
    return {name, city};
    /*The down code is wrong as i was trying to apply filter() on an object, where the employee parameter is an object, but filter is used on arrays!!
     const res = employee.filter( emp => {
                                            const empName = emp.name;
                                            const empCity = emp.profile?.city??fallbackCity;
                                            return {empName, empCity};
                                        });
     
    return res; */
}
//getEmployeeInfo(employees6);

console.log(getEmployeeInfo(employees6[0]));
console.log(getEmployeeInfo(employees6[1]));
console.log(getEmployeeInfo(employees6[2]));

//Day 5 Real-world challenge — Employee Summary
/* Use:
Destructuring → get name, role, profile, salary
Optional chaining → safely get city
Nullish coalescing → use fallbackCity
Default parameter → "Unknown"
Object shorthand → return { name, role, city, salary }
 and Should return
{
    name: "Ravi",
    role: "Developer",
    city: "Hyderabad",
    salary: 70000
}
*/
const employees9 = [
    {
        name: "Ravi",
        role: "Developer",
        profile: { city: "Hyderabad" },
        salary: 70000
    },
    {
        name: "Meena",
        role: "Tester",
        profile: null,
        salary: 55000
    },
    {
        name: "Arjun",
        role: "Developer",
        profile: { city: "" },
        salary: 65000
    }
];

const getEmployeeSummary = (employee, fallbackCity = "Unknown") => {
    //console.log(employee);
    const {name, role, profile, salary} = employee;
    const city = profile?.city ?? fallbackCity;
    return {name, role, city, salary};
};

console.log(getEmployeeSummary(employees9[0]));
console.log(getEmployeeSummary(employees9[1]));
console.log(getEmployeeSummary(employees9[2]));

//Day 6 Practice
//Spread vs Rest: Rest can collect the remaining values during destructuring (or function arguments) into one variable, while spread expands existing values into a new array/object/function call.
//Spread
const numbers7 = [10, 20,30];
const copy = [...numbers7];
console.log(copy);

//Rest
function calculateTotal(first,second, ...prices) {
    console.log(prices);
}

calculateTotal(100, 200, 50); 

//Template literals `${}`
const employeName= "Ravi";
const sal = 70000;
const role = "Developer";
//op: Ravi is a Developer earning 70000
console.log(`${employeName} is a ${role} earning ${sal}`);

//Ravi is a Developer and earns ₹70000 per year.
console.log(`${employeName} is a ${role} and earns ₹${sal} per year`);
//Ravi is a Developer and earns ₹5833.333333333333 per month
console.log(`${employeName} is a ${role} and earns ₹${sal / 12} per month`);

//Template literals + Objects
// op: Meena is a Tester from Hyderabad and earns ₹60000 per year.
const employee7 = {
    name: "Meena",
    role: "Tester",
    salary: 60000,
    profile: {
        city: "Hyderabad"
    }
};

console.log(`${employee7.name} is a ${employee7.role} from ${employee7.profile.city} and earns ₹${employee7.salary} per year`);

//Object Methods: Object.keys(), Object.values(), Objects.entries()
//We want to get only the property names whose values are strings.
const employee8 = {
    name: "Ravi",
    role: "Developer",
    salary: 70000,
    city: "Hyderabad"
};
//Expected op: ["name", "role", "city"]
const stringKeys = Object.entries(employee8).filter(([key,value]) => typeof value === "string")
                                        .map(([key]) => key );
console.log(stringKeys);

//Exp result: ["salary", "experience"]
const employee9 = {
    name: "Ravi",
    role: "Developer",
    salary: 70000,
    city: "Hyderabad",
    experience: 5
};

//is simply array destructuring in the function parameter.
const numberKeys = Object.entries(employee9).filter(([key, value]) => typeof(value) === "number")
                                            .map(([key, value]) => key);

//Shorter verion of this:
// .filter(entry => {
//     const [key, value] = entry;

//     return typeof value === "string";
// })

//This is directly passing whole item as entry, with accessing array item 0 and 1
//const numberKeys = Object.entries(employee9).filter(entry => typeof(entry[1]) === "number").map(entry => entry[0]);
                                            
console.log(numberKeys);

//Task: Create a new array containing strings like this for only the string-valued properties:
/* Expected op:
[
    "name: Ravi",
    "role: Developer",
    "city: Hyderabad"
]
*/

const employee10 = {
    name: "Ravi",
    role: "Developer",
    salary: 70000,
    city: "Hyderabad",
    experience: 5,
    active: true
};

const stringDetails = Object.entries(employee10)
    .filter(([key,value]) => typeof(value) === "string")
    .map(([key,value]) => `${key} : ${value}`);

console.log(stringDetails);