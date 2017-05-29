/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
function moveZeroToEnd(arr) {
    let arrAfter = [];
    let arrBefore = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            arrAfter.push(arr[i]);
            arr.slice(arr.indexOf(arr[i]), 1);
            arrBefore.push(arr);
        }
    }
    console.log(arrBefore);
    lastArr = arrBefore.concat(arrAfter);
    console.log(lastArr);
};
moveZeroToEnd(arr1);


/*
 2. Верните сумму двух найменьших чисел в массиве
 
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 */
// let numberArr = [0,200,10,25,15];

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

function minimalNumber(arr) {
    let newArr = arr.sort(compareNumeric);
    let sumNumbers = newArr[0] + newArr[1];

    console.log(sumNumbers);
};
minimalNumber(numberArr);


/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */
let someName =  'Arnold Schwarzenegger';

function nameShuffler(str) {
    let arr1 = str.split(' ');
    let nameArr = [];
    nameArr.push(arr1[1]);
    nameArr.push(arr1[0]);
    console.log(nameArr.join(' '));
}
nameShuffler(someName);


/*
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
//  */
let mass = ['KARLY', 'DANIEL', 'KELSEY'];
function capMe(arr){
    let newArr = [];
    for( i = 0; i < arr.length; i++){
        let newElem = arr[i];
        let firstLetter = newElem.slice(0, 1).toUpperCase();
        let lastLetters = newElem.slice(1).toLowerCase();
        let fullWord = firstLetter + lastLetters;
        newArr.push(fullWord);
    }
    console.log(newArr);
};
capMe(mass);

/*
 1. Найдите число отсутствующее в заданной последовательности
 
 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [4, 6, 8, 10] => 2 // число сначала
 [0,16,24,32] => 8
  
 */
let randomArr = [1, 3, 5, 9];

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
};

function random(arr) {
    let stepArr = [];//массив с шагами
    for( i = 0; i < arr.length; i++){ //Запустил цикл на определение шага
        let prevElem = arr[i];
        let nextElem = arr[i+1];
        let step = nextElem - prevElem;
        stepArr.push(step);
    }

    let colibrArr = stepArr.sort(compareNumeric); //Отсортировал шаг
    let colibrStep = colibrArr.slice(0, 1); //Выбрал наименьшый т.к. у нас выпадает значение
    for( i = 0; i < arr.length; i++){//Цикл на сравнение шага
        let nextElem = arr[i+1];
        let prevElem = arr[i];
        if((nextElem - prevElem) != colibrStep){
            // let newValue = prevElem + colibrStep;
            // arr.splice(prevElem, 0, newValue);// добавил новое значение равное newValue.
            console.log(colibrStep);

        }
    }
};

random(randomArr);
