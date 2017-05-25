/*
 1. Напишите функцию которая принимает 2 числа 
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */
function numbersBetween(a, b) {
    let arr1 = [];
    for(i = a; i <= b; i++) {
        arr1.push(i)
    };
    return arr1
};

console.log(numbersBetween(4, 10));

/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла. 
 Расчет чисел должен идти до 100 
 */

    // for( i = 0; i < 100; i++) {
    //   if(i%3 == 0){
    //       console.log('fizz')
    //   } else if(i%5 == 0){
    //       console.log('buzz')
    //   } else if(i%3 == 0 && i%5 == 0){
    //       console.log('fizzbuzz')
    //   } else {
    //       console.log(i)
    //   }
    //  }
//Здесь опять не работает 'fizzbuzz', пожалуйста подскажи почему,
//и если написать return('adas'), то пишет синтаксическую ошибку, тоже не знаю почему.

/*
3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

let arr = [1, null, undefined, 'str', {}, [], function() {}];

function returnType(x){
    let newArr = [];
    for(i = 0; i < x.length; i++){
        let b = typeof x[i];
        newArr.push(b)
    }
    return newArr
}
console.log(returnType(arr));