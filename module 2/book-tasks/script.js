"use strict"

//Максимальная зарплата

let salaries2 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let [[name, salary]] = Object.entries(salaries).sort(([, salary1], [, salary2]) => salary2 - salary1);
    return name;
}