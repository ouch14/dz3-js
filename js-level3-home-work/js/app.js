// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

function findBiggestWord(str) {
    return str.split(/[,.!?-]+/).reduce((acc, curr) => acc.length ? acc : curr);
}
// console.log('1 задание',findBiggestWord('this is longest worddfgdfgdgfdgdfgdgd in this sentence123123'));
// 2. написать функцию которая принимает число и возвращает перевернутое число

function reverseNumber(number){
    return Number.toString().split('').reverse().join('');
} 
// console.log('2 задание',reverseNumber(12345));


// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

function unique(str)  {
    return str.split('').reduce((acc, curr) => {
        if(!acc.includes(curr)) {
            acc.push(curr)
        }
        return acc;
    } [].join('')
}
// console.log('3 задание', unique('qwerwrtytryu'));

// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

function calcPoints(win, draw, loses) {
    return wins * 3 + draws;
}
// console.log('4 задание', calcScore(10, 3, 5));

// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

function statisctics(arr) {
    console.log(arr)
    return {
        max: Math.max(...arr),
        min: Math.min(...arr),
        count: arr.lenght,
        averages: arr.reduce((acc, curr) => acc + curr) /arr.lenght
    }
}
// console.log('5 задание ', statistics(( 10, 3, 5, 10, 11, 34, 123123, 123));

// 6.Написать функцию которая принимает массив работников компании 

// const workers = [
//   { name: "Jimm", salary: 40000, department: "IT" },
//   { name: "Bob", salary: 60300, department: "HR" },
//   { name: "Stacy", salary: 15000, department: "IT" },
//   { name: "Tom", salary: 55200, department: "DEVOPS" },
//   { name: "Kate", salary: 25000, department: "IT" },
//   { name: "John", salary: 40000, department: "HR" },
//   { name: "Billy", salary: 60000, department: "DEVOPS" },
// ];

// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 



