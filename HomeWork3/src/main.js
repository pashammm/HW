/*
Напишите функцию которая будет возвращать объект
с свойством name, а значением будет первый аргумент функции
*/
function obj1(name) {
    return {
        prop: name
    }
};

console.log(obj1('pasha'));

/*
Функция будет принимать 1 аргумент - ОБЪЕКТ у которого
будет свойство name
и возвращать новый объект изменяя свойство name
в большой регистр
*/
function myFunct({des: name}) {
  return obj = {
      des:name.toUpperCase()
  }
}
console.log(myFunct({des: 'pasha'}));



// 1. Напишите функцию которая принимает в 
// качестве аргумента массив
// и элемент массива и добавляет элемент в конец массива
let arr = [1, "s", {}];
let newElem = arr[0];

function addToArray(x, y) {
    x[x.length] = y
    return arr
}
console.log(addToArray(arr, newElem));



//Задание 2. Напишите функцию которая получает 3 параметра 
//и возвращает объект

function myFunction(param1, param2, param3) {
    return {
        key1:param1,
        key2:param2,
        key3:param3,
    }
}
console.log(myFunction('tt', 'bb', 123456));


//Задание 3.


// 3.  Напишите функцию которая принимает 3 аргумента, 
//      третий аргумент - это объект.
    
//     Функция создает новый объект и добавляет ключ 
//     это первый аргумент, а значение - второй аргумент
//     Проверяет если есть свойство name в переданном объекте, 
//     тогда добавляет данное свойство и возвращает новый объект

function addName(key0, val, userName) {
    userName.key = val
    return userName
};
console.log(addName('ключ', 'значение', {name: 'pasha'}));




//  @@ SUPER
//   Напишите функцию, которая будет возвращать 'Fizz' 
//    если передаваемый параметр кратен 3,
//    'Buzz', если передаваемый параметр кратен 5, 
//    'FizzBuzz' - если параметер кратен 3 и 5
//    Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
// 

function retWord(numb){
    let num = +numb;

    if (num !== +num){
        return ('Введите число!')
    } else {
        if (num%3 == 0) {
            return ('Fizz');
        } else if(num%5 == 0){
            return ('Buzz')
        } else if (num%3 == 0 && num%5 == 0){
            return ('FizzBuzz') // Не работает
        } else {
            return num
        }
    }
}

console.log(retWord('7'));


/* -> @@ SUPER 2
Напишите функцию, которая будет принимать 4 аргумента, 
последний всегда функция.
Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом
*/
// function f_1(z, f) {
//     return Math.pow(z, f) + Math.log(z) + Math.abs(f)
// };

// function f_2(arg1, arg2, arg3, f_1()) {

// };