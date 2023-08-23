/* 1. Используйте массив для хранения набора данных
Ниже приведен пример простейшей реализации структуры данных массива. Это известно как одномерный массив , что означает, что он имеет только один уровень или что в него не входят другие массивы. Обратите внимание, что среди других допустимых типов данных JavaScript он содержит логические значения , строки и числа :

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
Вызов console.logотображается 7.

Все массивы имеют свойство длины, к которому, как показано выше, можно очень легко получить доступ с помощью
синтаксиса Array.length. Более сложную реализацию массива можно увидеть ниже. Это известно как многомерный массив 
или массив, содержащий другие массивы. Обратите внимание, что этот массив также содержит объекты JavaScript , которые 
мы подробно рассмотрим в следующем разделе, но на данный момент все, что вам нужно знать, это то, что массивы также 
способны хранить сложные объекты.

let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
Мы определили переменную с именем yourArray. Завершите оператор, присвоив переменной массив длиной не менее 5 элементов 
yourArray. Ваш массив должен содержать по крайней мере одну строку , одно число и одно логическое
значение .*/

let yourArray; // Change this line
yourArray = [true, "it is array", 22, false, 14]

/*2. Доступ к содержимому массива с использованием скобочных обозначений
Фундаментальной особенностью любой структуры данных является, конечно же, способность не только хранить данные, но и извлекать эти данные по команде. Итак, теперь, когда мы узнали, как создать массив, давайте начнем думать о том, как мы можем получить доступ к информации этого массива.

Когда мы определяем простой массив, как показано ниже, в нем есть 3 элемента:

let ourArray = ["a", "b", "c"];
В массиве каждый элемент массива имеет индекс . Этот индекс удваивается как позиция этого элемента в массиве и то, как вы ссылаетесь на него. Однако важно отметить, что массивы JavaScript имеют нулевой индекс , а это означает, что первый элемент массива фактически находится в нулевой позиции, а не в первой. Чтобы получить элемент из массива, мы можем заключить индекс в скобки и добавить его в конец массива или, что чаще, к переменной, которая ссылается на объект массива. Это известно как обозначение скобок . Например, если мы хотим получить значение afrom ourArrayи присвоить его переменной, мы можем сделать это с помощью следующего кода:

let ourVariable = ourArray[0];
Сейчас ourVariableимеет значение a.

Помимо доступа к значению, связанному с индексом, вы также можете установить индекс в значение, используя ту же нотацию:

ourArray[1] = "not b anymore";
Используя обозначение скобок, мы теперь сбросили элемент с индексом 1 из строки bв not b anymore. Сейчас ourArrayесть 
["a", "not b anymore", "c"].

Чтобы выполнить это задание, установите вторую позицию (индекс 1) myArrayна все, что захотите, кроме буквы b.

*/
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1]="my array"
// Only change code above this line
console.log(myArray);
/*3. Добавить элементы в массив с помощью push() и unshift()
Длина массива, как и типы данных, которые он может содержать, не фиксирована. Массивы могут быть определены
с длиной любого количества элементов, а элементы могут добавляться или удаляться
с течением времени; другими словами, массивы изменяемы . В этом задании мы рассмотрим два метода, с помощью
которых мы можем программно изменить массив: Array.push()и Array.unshift().

Оба метода принимают один или несколько элементов в качестве параметров и добавляют эти элементы в массив, 
для которого вызывается метод; метод push()добавляет элементы в конец массива и unshift()добавляет элементы в начало. 
Рассмотрим следующее:

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
romanNumeralsимело бы значение ['XIX', 'XX', 'XXI', 'XXII'].

romanNumerals.push(twentyThree);
romanNumeralsимело бы значение ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']. Обратите внимание, что мы также можем передавать 
переменные, что дает нам еще большую гибкость при динамическом изменении данных нашего массива.

Мы определили функцию, mixedNumbersкоторой мы передаем массив в качестве аргумента. Измените функцию, используя push()и 
unshift()для добавления 'I', 2, 'three'в начало массива и 7, 'VIII', 9в конец, чтобы возвращаемый массив содержал представления
чисел от 1 до 9 по порядку.*/

function mixedNumbers(arr) {
  // Only change code below this line
arr.unshift( 'I', 2, 'three')
arr.push(7, 'VIII', 9)
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
