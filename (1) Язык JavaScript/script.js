																	//Раздел: "Основы JavaScript", подраздел: "Привер, мир!"
/*alert("Я JavaScript!");*/

																	//Раздел: "Основы JavaScript", подраздел: "Переменные"
/*let admin, name = "Джон";
admin = name;

alert(admin);

const currentPlanetName = "Земля";
let currentUser;*/

														//Раздел: "Основы JavaScript", подраздел: "Взаимодействие: alert, prompt, confirm"
/*let userName = prompt("Какое у вас имя?");
alert(`Ваше имя ${userName}`);*/

																//Раздел: "Основы JavaScript", подраздел: "Базовые операторы, математика"
/*let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b);*/

															//Раздел: "Основы JavaScript", подраздел: "Условное ветвление: if, '?'"
/*let answ1 = prompt("Какое официальное название у JavaScript?");

if (answ1 == "ECMAScript")
	alert("Верно!");
else
	alert("Не знаете? ECMAScript!");


let ans2 = prompt("Введите целое число");

if (ans2 < 0)
	alert(-1);
else if (ans2 > 0)
	alert(1);
else
	alert(0);


let result = (a + b < 4) ? "Мало" : "Много";


let login = '';
let message = (login == 'Сотрудник') ? 'Привет' :
	(login == 'Директор') ? 'Здравствуйте' :
	(login == '') ? 'Нет логина' : '';*/

																				//Раздел: "Основы JavaScript", подраздел: "Логические операторы"
/*let age = 45;
if(age >=15 && age <= 90)
	alert("В промежутке");

if(!(age >=15 && age <= 90))
	alert("Не в промежутке");

if(age < 15 || age > 90)
	alert("Не в промежутке");*/

/*let userLogin = prompt("Введите логин");
let userPassword;

if (userLogin == "Админ") {

	userPassword = prompt("Введите пароль");

	if(userPassword == '' || userPassword == null) {
		alert("Отменено");
	} else if (userPassword == "Я главный") {
		alert("Здравствуйте!");
	} else {
		alert("Неверный пароль");
	}

}	else if (userLogin == '' || userLogin == null) {
	alert("Отменено");
} else {
	alert("Я вас не знаю");
}*/

												//Раздел: "Основы JavaScript", подраздел: "Операторы нулевого слияния и присваивания: '??', '??='"
/*let num1 = 10,
    num2 = 20,
    result;

result ??= num1 ?? num2;*/

																			//Раздел: "Основы JavaScript", подраздел: "Циклы while и for"
/*let res = '';
for(let i = 2; i <= 10; i++) {
	if(i % 2 == 0) res += i + ' ';
}
alert(res);*/

/*let i = 0;
while(i < 3){
	alert( `number ${i++}!` );
}*/

/*let ans;
while(ans = prompt("Введите число больше 100")) {
	if(ans > 100) break;
}*/

/*let n = 100;
let res = '';

nextSimple:
for(let i = 2; i <= n; i++) {

	for(let j = 2; j <= i ** (1/2); j++) {
		if(i % j == 0) continue nextSimple;
	}

	res += i + ' ';
}

alert(res);*/

																			//Раздел: "Основы JavaScript", подраздел: "Конструкция "switch""
/*let browser = '';

if(browser === "Edge") {
	alert("You've got the Edge!");
} else if (browser === "Chrome" 
	|| browser === "Safari"
	|| browser === "Opera" 
	|| browser === "Firefox") {
	alert("Okey we support these browsers too");
} else {
	alert("We hope that this page looks ok!");
}*/


/*switch (+prompt('Введите число между 0 и 3', '')) {
	case 0:
		alert("Вы ввели число 0");
		break;

	case 1:
		alert("Вы ввели число 1");
		break;

	case 2:
	case 3:
		alert("Вы ввели число 2, а может и 3");
		break;
}*/

																//Раздел: "Основы JavaScript", подраздел: "Функции"
/*function checkAgeShort1(age) {
	return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAgeShort2(age) {
	return age > 18 || confirm("Родители разрешили?");
}*/


/*function min(a, b) {
	return a < b ? a : b;
}

alert(min(2, 5) == 2); //true
alert(min(3, -1) == -1); //true
alert(min(1, 1) == 1); //true*/


/*let x = +prompt("Введите число для возведения в степень");
let n = +prompt("Введите степень");

function pow(a, b) {
	let res = a;
	while(--b > 0)
		res *= a;
	return res; 
}

alert(pow(x, n));*/

																				//Раздел: "Основы JavaScript", подраздел: "Стрелочные функции, основы"
/*function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение")
);*/

																								//Раздел: "Объекты: основы", подраздел: "Объекты"
/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
	for(let prop in obj)
		return false;
	return true;
}

alert(isEmpty({}));
alert(isEmpty(user));*/


/*let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for(let key in salaries) {
	sum += salaries[key];
}

alert(sum);*/


/*let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
	for(let key in obj) {
		if(typeof(obj[key]) == 'number') {
			obj[key] *= 2;
		}
	}
}

multiplyNumeric(menu);

for(let key in menu) {
	console.log(menu[key]);
}*/

																		//Раздел: "Объекты: основы", подраздел: "Методы объекта, "this""
/*let calculator = {
	a: null,
	b: null,

	read() {
		this.a = +prompt("Введите первое число");
		this.b = +prompt("Введите второе число");
	},

	sum() {
		return this.a + this.b;
	},

	mul() {
		return this.a * this.b;
	}
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

/*let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();*/

																//Раздел: "Объекты: основы", подраздел: "Конструктор, оператор "new""
/*function Calculator() {
	this.a = null,
	this.b = null,

	this.read = function() {
		this.a = +prompt("Введите первое число");
		this.b = +prompt("Введите второе число");
	},

	this.sum = function() {
		return this.a + this.b;
	},

	this.mul = function() {
		return this.a * this.b;
	}
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/


/*function Accumulator(startingValue) {
	this.value = startingValue;

	this.read = function() {
		this.value = this.value + +prompt("Добавьте число") || this.value;
	}
}

let accumulator = new Accumulator(1);

accumulator.read(); 
accumulator.read(); 

alert(accumulator.value);*/

																//Раздел: "Типы данных", подраздел: "Числа"
/*let firstNumb = +prompt("Введите первое число", 0);
let secondNumb = +prompt("Введите второе число", 0);

alert(firstNumb + secondNumb);*/


/*function readNumber() {
	while(true) {
		let resp = prompt("Введите число");

		if(isNaN(resp)) {
			continue;
		} else {
			return (resp == "" || resp == null) ? null : +resp;
		}
	}

}

alert(readNumber());*/


/*function random(min, max) {
	let base = Math.random();
	return base * (max - min) + min;
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );*/


/*function random(min, max) {
	let base = Math.random();
	return Math.round(base * (max + 0.5 - min + 0.5) + min - 0.5);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );*/

																	//Раздел: "Типы данных", подраздел: "Строки"
/*function ucFirst(str) {
	if(!str)
		return "";

	return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("vasya"));*/

/*function checkSpam(str) {
	let lowercase = str.toLowerCase();

	return lowercase.includes("viagra") || lowercase.includes("xxx")
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))*/

// function truncate(str, maxLength) {
// 	if(str.length > maxLength) {
// 		return str.substr(0, maxLength - 1) + "…"
// 	}

// 	return str;
// }

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

/*function extractCurrencyValue(str) {
	return +str.slice(1);
}

alert( extractCurrencyValue('$120') === 120 );*/

																								//Раздел: "Типы данных", подраздел: "Массивы"
/*let styles = ["Джаз", "Блюз"];
console.log(styles);

styles.push("Рок-н-ролл");
console.log(styles);

styles[Math.floor(styles.length / 2)] = "Классика";
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Реп", "Регги");
console.log(styles);*/

/*function sumInput() {
	let mas = [];
	let ans;

	while(true) {
		ans = prompt("Введите число");

		if(isNaN(+ans) || ans == null || ans == '')
			break;

		mas.push(+ans);

	}

	let sum = 0;
	for(let val of mas)
		sum += val;

	return sum;
}

console.log(sumInput());*/

/*function getMaxSubSum(mas) {
	let subSum = 0;
	let maxSum = 0;

	for(let i = 0; i < mas.length; i++) {
		subSum += mas[i];
		maxSum = Math.max(subSum, maxSum);

		if(subSum < 0) {
		 subSum = 0;
		}
	}

	return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]))
console.log(getMaxSubSum([2, -1, 2, 3, -9]))
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([-2, -1, 1, 2]))
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([1, 2, 3]))*/

																							//Раздел: "Типы данных", подраздел: "Методы массивов"
/*function camelize(str) {
	return str
		.split('-')
		.map((el, index) => (el && index > 0) ? el[0].toUpperCase() + el.slice(1) : el)
		.join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));*/

/*function filterRange(arr, a ,b) {
	return arr.filter(item => (item >= a && item <= b));
}

let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1 , 4));*/

/*function filterRangeInPlace(arr, a, b) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] < a || arr[i] > b) {
			arr.splice(i, 1);
			i--;
		}
	}
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4)
console.log(arr);*/

/*let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);
console.log(arr);*/

/*function copySorted(arr) {
	let copy = arr.slice();
	return copy.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(arr));*/

/*function Calculator() {
	this.operations = [
		{'+': (a, b) => a + b},
		{'-': (a, b) => a - b},
	],

	this.calculate = function(str) {
		let arr = str.split(' ');

		if(isNaN(+arr[0]) || isNaN(+arr[2]))
			return NaN;

		return this.operations.find(item => arr[1] in item)[arr[1]](+arr[0], +arr[2]);
	}

	this.addMethod = function(name, func) {
		this.operations.push({[name]: func});
	}

}

let calc = new Calculator;

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate("2 + 4"));
console.log(calc.calculate("2 - 4"));
console.log(calc.calculate("2 * 4"));
console.log(calc.calculate("2 / 4"));
console.log(calc.calculate("2 ** 4"));*/

/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);
console.log(names);*/

/*let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({
	id: item.id,
	fullName: item.name + ' ' + item.surname
}));

console.log(usersMapped[0].id + ': ' + usersMapped[0].fullName);*/

/*function sortByAge(users) {
	users.sort((a, b) => a.age - b.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

console.log(arr);*/

/*function shuffle(arr) {
	arr.sort((a, b) => Math.random() - Math.random());
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);*/

/*function getAverageAge(users) {
	return users.reduce((acc, item) => acc + item.age, 0)/ users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) );*/

/*function unique(arr) {
	let uniqueArr = [];

	arr.forEach(item => {
		if(!uniqueArr.includes(item))
			uniqueArr.push(item);
	});

	return uniqueArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));*/

/*function groupById(arr) {
  return arr.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

for(let key in usersById) {
	console.log(key + ' ' + usersById[key]);
}*/

																							//Раздел: "Типы данных", подраздел: "Map и Set"
/*function unique(arr) {
	return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) );*/

/*function aclean(arr) {
	let map = new Map();
	
	arr.forEach(item => {
		map.set(Array.from(item.toLowerCase()).sort().join(), item);
	});

	return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));*/

/*let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys);*/

																			//Раздел: "Типы данных", подраздел: "Object.keys, values, entries"
/*function sumSalaries(salaries) {
	let sum = 0;

	for(let value of Object.values(salaries)) {
		sum +=value;
	}

	return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(sumSalaries(salaries));*/

/*function count(obj) {
	return Object.keys(obj).length;
}

let user = {
  name: 'John',
  age: 30
};

console.log( count(user) );*/

																		//Раздел: "Типы данных", подраздел: "Деструктурирующее присваивание"
/*let user = {
  name: "John",
  years: 30
};

let {name, years : age, isAdmin = false} = user;

alert( name );
alert( age );
alert( isAdmin );*/

/*let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
	let maxS = 0;
	let bestEmp = null;

	for(let [key, value] of Object.entries(salaries)) {
		if(maxS < value) {
			bestEmp = key;
			maxS = value;
		}
	}

	return bestEmp;
}

console.log(topSalary(salaries));*/

																						//Раздел: "Типы данных", подраздел: "Дата и время"
/*let date = new Date(2012, 1, 20, 3, 12);
alert(date.getTime());*/

/*function getWeekDay(date) {
	let weekDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
	return weekDays[date.getDay()];
}

console.log( getWeekDay(new Date()) );*/

/*function getLocalDay(date) {
	let day = date.getDay();

	if(day == 0)
		return 7;

	return day;
}

console.log( getLocalDay(new Date()) );*/

/*function getDateAgo(date, days) {
	let copy = new Date(date.getTime());
	copy.setDate(copy.getDate() - days);

	return copy.getDate(); 
}

let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) );
console.log( getDateAgo(date, 2) );
console.log( getDateAgo(date, 365) );*/

/*function getLastDayOfMonth(year, month) {
	let date = new Date(year, month + 1);
	date.setDate(0);

	return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));*/

/*function getSecondsToday() {
	let date = new Date();

	console.log(date.getHours());
	console.log(date.getMinutes());
	console.log(date.getSeconds());

	return date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();
}

console.log( getSecondsToday() );*/

/*function getSecondsToTomorrow() {
	let date = new Date();

	let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
	return Math.round((tomorrow - date) / 1000);
}

console.log(getSecondsToTomorrow());*/

/*function formatDate(date) {
	let now = new Date();
	let diff = now - date;

	if(diff / 1000 < 1) {
		console.log("Прямо сейчас");
	} else if(diff / 1000 / 60 < 1) {
		console.log(`${Math.round(diff / 1000)} секунд назад`);
	} else if(diff / 1000 / 60 / 60 < 1) {
		console.log(`${Math.round(diff / 1000 / 60)} минут назад`);
	} else {
		let [day, month, year, hour, minute] = [
			("0" + date.getDate()).slice(-2),
			("0" + date.getMonth()).slice(-2),
			date.getFullYear().toString().slice(-2),
			("0" + date.getHours()).slice(-2),
			("0" + date.getMinutes()).slice(-2)
			];

		console.log(`${day}.${month}.${year} ${hour}:${minute}`);
	}
}

console.log( formatDate(new Date(new Date - 1)) );
console.log( formatDate(new Date(new Date - 30 * 1000)) );
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );
console.log( formatDate(new Date(new Date - 86400 * 1000)) );*/

																				//Раздел: "Типы данных", подраздел: "Формат JSON, метод toJSON"
/*let user = {
  name: "Василий Иванович",
  age: 35
};

let jsonUser = JSON.stringify(user);

let userBack = JSON.parse(jsonUser);*/

/*let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

console.log(JSON.stringify(meetup, function replacer(key, value) {
	return (value == meetup && key != "") ? undefined : value;
}));*/

																				   //Раздел: "Продвинутая работа с функциями", подраздел: "Рекурсия и стек"
/*function sumToCycle(n) {
	let sum = 0;

	for(let i = 1; i <= n; i++)
		sum += i;

	return sum;
}

function sumToReq(n) {
	return (n == 1) ? n + sumToReq(n - 1) : 1;
}

function sumToSmart(n) {
	return (1 + n) / 2 * n;
}

console.log(sumToCycle(100));
console.log(sumToReq(100));
console.log(sumToSmart(100));*/

/*function factorial(n) {
	return (n == 1) ? 1 : n * factorial(n - 1);
}

console.log(factorial(5));*/

/*function fib(n) {
	n1 = 1;
	n2 = 1;
	next = 2;
	count = 3;

	while(count++ != n) {
		n1 = n2;
		n2 = next;
		next = n1 + n2;
	} 

	return next;
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(77));*/


/*function printListCycle(list) {
	while(list) {
		console.log(list.value);
		list = list.next;
	}
}

function printListReq(list) {
	if(list) {
		console.log(list.value);
		printListReq(list.next);
	}
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printListCycle(list);
printListReq(list);*/

/*let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printListCycle(list) {
	let values = [];

	while(list) {
		values.push(list.value);
		list = list.next;
	}

	for(let i = values.length - 1; i >= 0; i--) {
		console.log(values[i]);
	}
}

function printListReq(list) {
	if(list) {
		printListReq(list.next);
	} else {
		return;
	}

	console.log(list.value);
}

printListCycle(list);
printListReq(list);*/

																//Раздел: "Продвинутая работа с функциями", подраздел: "Область видимости переменных, замыкание"
/*function sum(a) {
	return function(b) {
		return a + b;
	}
}

console.log( sum(1)(2) );*/

/*function inBetween(a, b) {
	return function(item, index) {
		return item >= a && item <= b;
	}
}

function inArray(arr) {
	return function(item, index) {
		return arr.includes(item);
	}
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) );

console.log( arr.filter(inArray([1, 2, 10])) );*/

/*function byField(field) {
	return function(a, b) {
		return a[field] > b[field] ? 1 : -1;
	}
}

let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];

users.sort(byField('name'));
for(let user of users)
	console.log(user.name);

users.sort(byField('age'));
for(let user of users)
	console.log(user.name);
*/

/*function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
  	let number = i;
    let shooter = function() {
      console.log( number );
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[1]();
army[2]();*/

																				//Раздел: "Продвинутая работа с функциями", подраздел: "Объект функции, NFE"
/*function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.set = function(value) {
  	this.count = value;
  }

  counter.decrease = function() {
  	this.count--;
  }

  counter.count = 0;

  return counter;
}

let counter = makeCounter();

console.log( counter() );
console.log( counter() );

counter.set(15);

console.log( counter() );

counter.decrease();
counter.decrease();

console.log( counter() );*/

/*function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
  	return currentSum;
  };

  return f;
}

console.log( String(sum(1)(2)) );*/

															//Раздел: "Продвинутая работа с функциями", подраздел: "Планирование: setTimeout и setInterval"
/*function printNumbersInterval(from, to) {
	let count = 0;
	let iTimer = setInterval(() => {
		if(count + from <= to)
			console.log(from + count++);
		else
			clearInterval(iTimer);
	}, 1000);
}

function printNumbersTimeout(from , to) {
	let count = 0;
	let tTimer = setTimeout(function run() {
		console.log(from + count++);

		if(from + count <= to)
			setTimeout(run, 1000);
	}, 1000);
}

printNumbersTimeout(1, 10);*/

														//Раздел: "Продвинутая работа с функциями", подраздел: "Декораторы и переадресация вызова, call/apply"
/*function work(a, b) {
  console.log( a + b );
}

function spy(func) {
	function wrapper() {
		wrapper.calls.push(Array.from(arguments));
		func.call(this, ...arguments);
	}

	wrapper.calls = [];

	return wrapper
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  alert( 'call:' + args.join() );
}*/

/*function f(x) {
  console.log(x);
}

function delay(func, delay) {
	function wrapper(...args) {
		setTimeout(() => func.apply(this, args), delay);
	}

	return wrapper;
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test1");
f1500("test2");*/

/*function debounce(func, ms) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}*/

/*function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}*/

																		//Раздел: "Продвинутая работа с функциями", подраздел: "Привязка контекста к функции"
/*function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));*/

/*function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));*/

																					//Раздел: "Прототипы, наследование", подраздел: "Прототипное наследование"
/*let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};*/

																						//Раздел: "Прототипы, наследование", подраздел: "Встроенные прототипы"
/*function f() {
  alert("Hello!");
}

function defer(ms) {
	setTimeout(this, ms);
}

Function.prototype.defer = defer;

f.defer(1000);*/

/*function f(a, b) {
  alert( a + b );
}

Function.prototype.defer = function(ms) {
	let func = this;
	return function(...args) {
		setTimeout(() => func.apply(f, args), ms);
	}
}

f.defer(1000)(1, 2);*/

														//Раздел: "Прототипы, наследование", подраздел: "Методы прототипов, объекты без свойства __proto__"
/*let dictionary = Object.create(null);

Object.defineProperty(dictionary, toString, {
	"value": () => Object.keys(this).join(),
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) {
  console.log(key);
}

console.log(dictionary);*/

																			//Раздел: "Классы", подраздел: "Класс: базовый синтаксис"
/*class Clock {

	constructor({ template }) {
		this.template = template;
	}

	render() {
		let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
	}

	stop() {
		clearInterval(this.timer);
	}

	start() {
		this.render();
    this.timer = setInterval(() => this.render(), 1000);
	}
}

let clock = new Clock({template: 'h:m:s'});
 clock.start();*/

																			//Раздел: "Классы", подраздел: "Наследование классов"
/*class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
  	super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик");
console.log(rabbit.name);*/

/*class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
	constructor({template}, ms) {
		super({template});
		this.precision = ms;
	}

	start() {
		this.render();
    this.timer = setInterval(() => this.render(), this.precision);
	}
}

let extendedClock = new ExtendedClock({template: 'h:m:s'}, 200);
extendedClock.start();*/

																	//Раздел: "Классы", подраздел: "Статические свойства и методы"
/*class Rabbit extends Object {
  constructor(name) {
  	super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log( rabbit.hasOwnProperty('name') );*/

														//Раздел: "Обработка ошибок", подраздел: "Пользовательские ошибки, расширение Error"
/*class FormatError extends SyntaxError {
	constructor(message) {
		super(message);
		this.name = "FormatError";
	}
}

let err = new FormatError("ошибка форматирования");

console.log( err.message );
console.log( err.name );
console.log( err.stack );

console.log( err instanceof FormatError );
console.log( err instanceof SyntaxError );*/

																						//Раздел: "Промисы, async/await", подраздел: "Промисы"
/*function delay(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));*/

																					//Раздел: "Промисы, async/await", подраздел: "Async/await"
/*class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
	let response = await fetch(url);

	if (response.status == 200) {
		let json = response.json();
		return json;
	}
	else {
		throw new Error(response.status);
	}
}

async function demoGithubUser() {

  while(true) {
    let name = prompt("Введите логин?", "iliakan");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        throw err;
      }
    }
  }

}*/

																						//Раздел: "Генераторы, продвинутая итерация", подраздел: "Генераторы"
/*function* pseudoRandom(seed) {
  let nextVal = seed;

  while(true) {
    nextVal *= 16807 % 2147483647
    yield nextVal;
  }
};

let generator = pseudoRandom(1);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);*/

																				//Раздел: "Разное", подраздел: "Proxy и Reflect"
/*function wrap(target) {
	return new Proxy(target, {
		get(target, prop, receiver) {
			let value = Reflect.get(...arguments);

			if (value == undefined) {
			 throw new Error("Попытка прочитать несуществующее свойство");
			} else {
				return prop;
			}
		}
	});
}

let user = {
  name: "John"
};

user = wrap(user);

console.log(user.name);
console.log(user.age);*/

/*let array = [1, 2, 3];

array = new Proxy(array, {
	get(target, prop, receiver) {
		if(target instanceof Array && +prop < 0) {
			return Reflect.get(target, target.length - -(+prop) % target.length - 1, receiver);
		}
		return Reflect.get(...arguments);
	}
});

console.log(array[1]);
console.log(array[-6]);*/

																	//Раздел: "Разное", подраздел: "Eval: выполнение строки кода"
/*class evalCalculator {
	constructor(expression) {
		this.expression = expression;
	}

	calc() {
		return eval(this.expression);
	}
}

let eCalc = new evalCalculator("2 + 3 + 5 / 2");
console.log(eCalc.calc());*/

															//Раздел: "Разное", подраздел: "Intl: интернационализация в JavaScript"
/*let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator();
animals.sort((a, b) => collator.compare(a, b));

alert( animals );*/