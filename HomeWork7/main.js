/*
 *
 * TASK 1
 *
 * Напишите функцию которая будет вызываться трижды и складывать 
 * все передаваемые ей числа
 *
 *
 * */
// console.log(add(1)(2)(3)); // 6
// console.log(add(10)(5)(15)); // 30
function add(a){
    return function (b){
        return function(c){
            return a + b + c
        };
    };
};
console.log(add(1)(2)(3));
/*
 *
 * TASK 2
 *
 * Напишите функцию которая возвращает объект и одно из свойств объекта 
 * это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * ---------------------------------------
 * так же у объекта должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объекте, нельзя
 *
 * */
function patternModule(){
    let count = 0;
    return {
       method: function(){
           return count++
       },
       cleanMethod: function(){
           return count = 0;
       }
   }
}
let test = patternModule(); // 0
console.log(test.method()); //1
console.log(test.method()); //2
console.log(test.method()); //3
test.cleanMethod();
console.log(test.method());
console.log(test.method());

