// Задание 1. "Сколько нужно программистов чтобы сделать проект ? 1, 25, команда"
let numbers = [25, 1];
let project = 'проект';
let team = `команда`;
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';

console.log(`${howMuch} ${sentence} ${numbers[1]}, ${numbers[0]}, ${team}`);

/*Задание 2. "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью. 
Он не был больше ни телом, к которому рано или поздно ..."*/
 let arrey = [
  'Он',
  'был больше ни телом, к которому рано или поздно',
  'он обнаружил',
  'не',
  'Так, когда Будда достиг Просветления',
  '...',
  'что больше',
  'ощущает себя мишенью',
  'не'
];

console.log(`${arrey[4]}, ${arrey[2]}, ${arrey[6]} ${arrey[3]} ${arrey[7]}. 
${arrey[0]} ${arrey[8]} ${arrey[1]}${arrey[5]}`);

//Задание 3.

let myObj = {};

myObj.position1 = '1';
myObj['position 2'] = '2';

console.log(myObj);




//Задание 4.
let sliceString = 'Ytube';

console.log(`${sliceString.slice(0, 1)}ou${sliceString.slice(1, 5)}`);

//Задание 5

let frameworks = [4.7, 'Angular', '4Angular', 'React/Redux'];

/*Мое предположение, по поводу читаемого вида, это заменить текстовые вставки на переменные,
но подозреваю, что не совсем то требуется от выполнения задания.*/


let x     = 'google released ' + 'new version ' + frameworks[1] + Math.floor(frameworks[0]) +'\ But real speed is ' + `${frameworks[frameworks.length - 1]}`;

let text1 = 'google released ' + 'new version ';
let Math1 = frameworks[1] + Math.floor(frameworks[0]);
let text2 = '\ But real speed is '
let Math2 = frameworks[frameworks.length - 1];

console.log(text1, Math1, text2, Math2);