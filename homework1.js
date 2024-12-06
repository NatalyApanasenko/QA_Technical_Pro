//При додаванні тексту до числа буде відбуватися конкатенація, тобто склеювання рядків
// Результат number33
var result = 'number' + 3 + 3;
console.log(result)

//Null додавання до числа, результат число
//Результат 3
var result = null + 3;
console.log(result)


//виводиться останнє
//Результат qwerty
var result = 5 && "qwerty";
console.log(result)

//Склеювання рядків
//Результат 42hillel
var result = +'40' + +'2' + "hillel";
console.log(result)


//1. логіка віднімання текста числа - 10 -5 =5
//Результат false тобто 5 не дорівнює 6
var result = '10' - 5 === 6;
console.log(result)


// true приводиться до 1, false - до 0
//Результат 1
var result = true + false;
console.log(result)


//У випадку віднімання від тексту числа, де текс не число, результат буде NoN
var result = '4px' - 3;
console.log(result);

//У випадку віднімання від тексту числа, де текс звичайне число, текст переведеться до числа
//4-3 = 1
var result = '4' - 3;
console.log(result);

//Склеювання рядків тесту з числом у 0 степені (3**0 = 1)
//Результат 61
var result = '6' + 3 ** 0;
console.log(result);

//У випадку ділення на текст числа, де текс звичайне число, текст переведеться до числа
//12/6 = 2
var result = 12 / '6';
console.log(result);

//Склеювання рядків
//Результат 10false
var result = '10' + (5 === 6);
console.log(result)

//Null не дорівнює пустій строці (оператор рівності)
//false
var result = null == '';
console.log(result)

//3 у степені 3 (правоасоціативне)
//Результат 27
var result = 3 ** (9 / 3);
console.log(result)

//string дорівнює string
//Результат true
var result = !!'false' == !!'true';
console.log(result)

//виводиться останнє
//Результат 1
var result = 0 || '0' && 1;
console.log(result)

//порівняння (+null == false) дорівнює true, true приводиться до 1, 1 на більше 1 
//Результат false
var result = (+null == false) < 1;
console.log(result)

//виводиться останнє
//Результат true
var result = false && true || true;
console.log(result)

//Результат false
var result = false && (false || true);
console.log(result)

//порівняння (+null == false) дорівнює true, true приводиться до 1, 1 у ступені 5 = 1, 1 на більше 1 
//Результат false
var result = (+null == false) < 1 ** 5;
console.log(result)
