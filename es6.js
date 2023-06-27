//task 1
/*Сравните области действия переменной и пусть ключевые слова
Если вы не знакомы с let, ознакомьтесь с этой задачей о разнице между letиvar .
Когда вы объявляете переменную с varключевым словом, она объявляется глобально или локально, если она объявлена ​​внутри функции.
Ключевое letслово ведет себя аналогично, но с некоторыми дополнительными функциями. Когда вы объявляете переменную с letключевым 
словом внутри блока, оператора или выражения, ее область действия ограничивается этим блоком, оператором или выражением.
Например:
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
Здесь консоль отобразит значения [0, 1, 2]и 3.
С varключевым словом iобъявляется глобально. Поэтому при i++выполнении он обновляет глобальную переменную. Этот код похож на 
следующий:
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
Здесь консоль отобразит значения [0, 1, 2]и 3.
Такое поведение вызовет проблемы, если вы создадите функцию и сохраните ее для последующего использования внутри цикла for,
в котором используется iпеременная. Это связано с тем, что хранимая функция всегда будет ссылаться на значение обновленной
глобальной iпеременной.
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
Здесь консоль отобразит значение 3.
Как вы можете видеть, printNumTwo()печатает 3, а не 2. Это связано с тем, что значение, назначенное для, iбыло обновлено, и 
printNumTwo()возвращает глобальное значение i, а не значение, iкоторое было при создании функции в цикле for. Ключевое 
letслово не следует этому поведению:
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
Здесь консоль отобразит значение 2и сообщение об ошибке i is not defined.
iне определен, потому что он не был объявлен в глобальной области. Он объявляется только в forоператоре цикла. printNumTwo()
вернул 
правильное значение, поскольку три разные iпеременные с уникальными значениями (0, 1 и 2) были созданы ключевым letсловом 
в операторе цикла.
Исправьте код так, чтобы iобъявленная в ifоператоре переменная была отдельной от iобъявленной в первой строке функции. 
Убедитесь, что varключевое 
слово нигде в вашем коде не используется.
Это упражнение предназначено для того, чтобы проиллюстрировать разницу между тем, как ключевые слова varи letназначают 
область действия объявленной переменной. 
При программировании функции, подобной той, что используется в этом упражнении, часто лучше использовать разные имена 
переменных, чтобы избежать путаницы.
*/
function checkScope() {
let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
checkScope()
//task 2
/*Измените массив, объявленный с помощью const
Если вы не знакомы с const, проверьте этот вызов о constключевом слове .

Объявление constимеет множество вариантов использования в современном JavaScript.

Некоторые разработчики предпочитают присваивать всем своим переменным значение constпо умолчанию, если только они не знают, 
что им потребуется переназначить значение. Только в этом случае они используют let.

Однако важно понимать, что объекты (включая массивы и функции), назначенные переменной с помощью, constпо-прежнему могут
изменяться. Использование constобъявления только предотвращает переназначение идентификатора переменной.

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
s = [1, 2, 3]приведет к ошибке. После комментирования этой строки console.logбудет отображаться значение [5, 6, 45].

Как видите, вы можете изменить [5, 6, 7]сам объект, и переменная sвсе равно будет указывать на измененный массив [5, 6, 45]. 
Как и все массивы, элементы массива sявляются изменяемыми, но поскольку constиспользуется, вы не можете использовать 
идентификатор переменной sдля указания на другой массив с помощью оператора присваивания.

Массив объявляется как const s = [5, 7, 2]. Измените массив на [2, 5, 7]использование различных назначений элементов.*/
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
s[0] = 2;
s[1] = 5;
s[2] = 7;
  // Using s = [2, 5, 7] would be invalid
  // Only change code above this line
}
editInPlace();

//task 3
/*Предотвратить мутацию объекта
Как видно из предыдущей задачи, constобъявление само по себе на самом деле не защищает ваши данные от изменений. 
Чтобы гарантировать, 
что ваши данные не изменятся, JavaScript предоставляет функцию Object.freezeпредотвращения изменения данных.

Любая попытка изменить объект будет отклонена с выдачей ошибки, если скрипт работает в строгом режиме.

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
Присваивания obj.reviewи obj.newPropприведут к ошибкам, потому что наш редактор по умолчанию работает в строгом 
режиме, и в консоли будет отображаться значение { name: "FreeCodeCamp", review: "Awesome" }.

В этом задании вы будете использовать Object.freezeдля предотвращения изменения математических констант. 
Вам нужно заморозить MATH_CONSTANTSобъект, чтобы никто не мог изменить значение PI, добавить или удалить свойства.*/

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line

Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//task 4
/*Используйте стрелочные функции для написания кратких анонимных функций
В JavaScript нам часто не нужно называть наши функции, особенно при передаче функции в качестве аргумента 
другой функции. Вместо этого мы создаем встроенные функции. Нам не нужно называть эти функции, потому что мы больше 
нигде их не используем.
Для этого мы часто используем следующий синтаксис:
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
ES6 предоставляет нам синтаксический сахар, позволяющий не писать анонимные функции таким образом.
Вместо этого вы можете использовать синтаксис стрелочной функции :
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
Когда тело функции отсутствует, а есть только возвращаемое значение, синтаксис стрелочной функции позволяет 
опустить ключевое слово, returnа также скобки, окружающие код. Это помогает упростить небольшие функции до однострочных 
инструкций:
const myFunc = () => "value";
Этот код по-прежнему будет возвращать строку valueпо умолчанию.
Перепишите функцию, назначенную переменной magic, которая возвращает a new Date(), чтобы использовать синтаксис 
стрелочной функции. Кроме того, убедитесь, что ничего не определено с использованием ключевого слова var.*/

const magic = () => new Date();

//task 5
/*Напишите стрелочные функции с параметрами
Как и в случае с обычной функцией, вы можете передавать аргументы в функцию со стрелкой.
const doubler = (item) => item * 2;
doubler(4);
doubler(4)вернет значение 8.
Если стрелочная функция имеет один параметр, круглые скобки, заключающие этот параметр, могут быть опущены.
const doubler = item => item * 2;
В стрелочную функцию можно передать более одного аргумента.
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
multiplier(4, 2)вернет значение 8.
Перепишите myConcatфункцию, которая добавляет содержимое arr2к arr1, чтобы она использовала синтаксис стрелочной функции.*/

const myConcat = (arr1, arr2)=> arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//task 6
/*Установите параметры по умолчанию для ваших функций
Чтобы помочь нам создавать более гибкие функции, ES6 вводит параметры по умолчанию для функций.
Проверьте этот код:
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));
console.log(greeting());
Консоль отобразит строки Hello Johnи Hello Anonymous.
Параметр по умолчанию срабатывает, когда аргумент не указан (он не определен). 
Как вы можете видеть в приведенном выше примере, параметр nameполучит значение по умолчанию, 
Anonymousесли вы не укажете значение для параметра. Вы можете добавить значения по умолчанию для 
любого количества параметров.
Измените функцию increment, добавив параметры по умолчанию, чтобы она добавляла 1, numberесли valueне указано.*/

// Only change code below this line
const increment = (number, value = 1) => number + value;// знвчение по умодчанию (number, value = 1)
// Only change code above this line

//task 7
/*Используйте параметр Rest с параметрами функции
Чтобы помочь нам создавать более гибкие функции, ES6 вводит параметр rest для параметров функции. С помощью 
параметра rest вы можете создавать функции, которые принимают переменное количество аргументов. 
Эти аргументы хранятся в массиве, доступ к которому можно получить позже из функции.

Проверьте этот код:

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
Консоль отобразит строки You have passed 3 arguments.и You have passed 4 arguments..
Параметр rest устраняет необходимость использования argumentsобъекта и позволяет нам использовать 
методы массива для массива параметров, переданных в функцию howMany.
Измените функцию sum, используя оставшийся параметр, таким образом, чтобы функция sumмогла принимать 
любое количество аргументов и возвращать их сумму.*/

function sum(...args) {//решение один, но согласно тестам функцмя будет стрелочной
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}
console.log(sum(0, 1, 2)); 


const sum = (...args) => { // делаем из этого стрелочную функцию
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

console.log(sum(0, 1, 2)); 
//task 8
/*Алгоритмы JavaScript и структуры данных
ES6
Используйте оператор Spread для оценки массивов на месте
ES6 представляет оператор распространения , который позволяет нам расширять массивы и другие выражения в местах,
где ожидается несколько параметров или элементов.

Код ES5 ниже использует apply()для вычисления максимального значения в массиве:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
maximusбудет иметь значение 89.

Мы должны были использовать Math.max.apply(null, arr)потому что Math.max(arr)возвращает NaN. 
Math.max()ожидает аргументы, разделенные запятыми, но не массив. Оператор распространения делает 
этот синтаксис намного более удобным для чтения и обслуживания.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
maximusбудет иметь значение 89.

...arrвозвращает распакованный массив. Другими словами, он расширяет массив. Однако оператор расширения 
работает только на месте, например, в аргументе функции или в литерале массива. Например:

const spreaded = [...arr];
Однако следующий код не будет работать:

const spreaded = ...arr;
Скопируйте все содержимое arr1в другой массив, arr2используя оператор распространения.*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1]  // Change this line
console.log(arr2);

//task 9
/*Используйте присваивание деструктурирования для извлечения значений из объектов
Деструктурирующее присваивание — это специальный синтаксис, введенный в ES6, для аккуратного присваивания значений,
взятых непосредственно из объекта.

Рассмотрим следующий код ES5:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
nameбудет иметь значение строки John Doeи ageчисло 34.

Вот эквивалентный оператор присваивания, использующий синтаксис деструктурирования ES6:

const { name, age } = user;
Опять же, nameбудет иметь значение строки John Doeи ageчисло 34.

Здесь будут созданы переменные nameи ageи им будут присвоены значения их 
соответствующих значений из объекта user. Вы можете видеть, насколько это чище.

Вы можете извлечь столько значений из объекта, сколько хотите.


Замените два назначения эквивалентным назначением деструктурирования. Он по-прежнему должен назначать переменные 
todayи tomorrowзначения объекта todayи tomorrowиз HIGH_TEMPERATURESнего.*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// Only change code below this line
const { today, tomorrow } = HIGH_TEMPERATURES;
// Only change code above this line

//task 10
/*Используйте назначение деструктурирования для назначения переменных из объектов
Деструктуризация позволяет присваивать новое имя переменной при извлечении значений. Вы можете сделать это,
поместив новое имя после двоеточия при присвоении значения.

Используя тот же объект из последнего примера:

const user = { name: 'John Doe', age: 34 };
Вот как вы можете давать новые имена переменных в присваивании:

const { name: userName, age: userAge } = user;
Вы можете прочитать это как «получить значение user.nameи присвоить его новой переменной с именем userName» и 
так далее. Значением userNameбудет строка John Doe,
а значением userAgeбудет число 34.

Замените два назначения эквивалентным назначением деструктурирования. Он по-прежнему должен назначать 
переменные highTodayи highTomorrowзначения объекта todayи tomorrowиз HIGH_TEMPERATURESнего.*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES; 

// Only change code above this line

//task 11
/*Используйте назначение деструктурирования для назначения переменных из вложенных объектов
Вы можете использовать те же принципы из двух предыдущих уроков, чтобы деструктурировать значения из вложенных объектов.

Использование объекта аналогично предыдущим примерам:

const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
Вот как извлечь значения свойств объекта и присвоить их переменным с тем же именем:

const { johnDoe: { age, email }} = user;
А вот как вы можете присвоить значения свойств объекта переменным с разными именами:

const { johnDoe: { age: userAge, email: userEmail }} = user;
Замените два назначения эквивалентным назначением деструктурирования. Он по-прежнему должен
назначать переменные lowTodayи highTodayзначения объекта today.lowи today.highиз LOCAL_FORECASTнего.
*/

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const {today: {low: lowToday, high: highToday }} = LOCAL_FORECAST

// Only change code above this line

//task 12
/*Используйте назначение деструктурирования для назначения переменных из массивов
ES6 делает деструктурирование массивов таким же простым, как деструктурирование объектов.

Одно ключевое различие между оператором расширения и деструктурированием массива заключается в том, что оператор расширения
распаковывает все содержимое массива в список, разделенный запятыми. Следовательно, вы не можете выбрать,
какие элементы вы хотите назначить переменным.

Деструктуризация массива позволяет нам сделать именно это:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
Консоль отобразит значения aи bas 1, 2.

Переменной aприсваивается первое значение массива и bприсваивается второе значение массива. Мы 
также можем получить доступ к значению любого индекса в массиве с деструктурированием, используя 
запятые для достижения желаемого индекса:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
Консоль отобразит значения a, bи cas 1, 2, 5.

Используйте присваивание деструктурирования, чтобы поменять местами значения aи b, чтобы aполучить значение, 
хранящееся в b, и bполучить значение, хранящееся в a.*/

let a = 8, b = 6;
[a, b] = [b, a]

//task 13
/*Деструктуризация через остальные элементы
В некоторых ситуациях, связанных с деструктурированием массива,
мы можем захотеть собрать остальные элементы в отдельный массив.

Результат подобен Array.prototype.slice(), как показано ниже:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
Консоль отобразит значения 1, 2и [3, 4, 5, 7].

Переменные aи bпринимают первое и второе значения из массива.
После этого из-за наличия остального синтаксиса arrполучает остальные значения в виде массива.
Остальной элемент корректно работает только как последняя переменная в списке. Например,
вы не можете использовать синтаксис rest для захвата подмассива, в котором отсутствует 
последний элемент исходного массива.

Используйте назначение деструктурирования с остальным синтаксисом, чтобы эмулировать 
поведение Array.prototype.slice(). removeFirstTwo()должен возвращать подмассив исходного 
массива listс пропущенными первыми двумя элементами.*/

function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

//task 14
/*Используйте присваивание деструктуризации для передачи объекта в качестве параметров функции
В некоторых случаях вы можете деструктурировать объект в самом аргументе функции.

Рассмотрим код ниже:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
Это эффективно разрушает объект, отправленный в функцию. Это также можно сделать на месте:

const profileUpdate = ({ name, age, nationality, location }) => {

}
Когда profileDataпередается в вышеуказанную функцию, значения деструктурируются из параметра функции для использования внутри функции.

Используйте деструктурирующее присваивание в аргументе функции halfтолько для отправки maxи minвнутри функции.*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line


//task 15
/*Создание строк с использованием шаблонных литералов
Новая функция ES6 — литерал шаблона . Это особый тип строки, упрощающий создание сложных строк.

Литералы шаблонов позволяют создавать многострочные строки и использовать функции интерполяции строк для создания строк.

Рассмотрим код ниже:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
Консоль отобразит строки Hello, my name is Zodiac Hasbro!и I am 56 years old..

Там много чего произошло. Во-первых, в примере используются обратные кавычки ( `), а не кавычки ( 'или ") для переноса строки. 
Во-вторых, обратите внимание, что строка многострочная как в коде, так и в выводе. Это экономит вставку \nвнутри строк.
Используемый выше синтаксис ${variable}является заполнителем. По сути, вам больше не придется использовать конкатенацию с +оператором. 
Чтобы добавить переменные в строки, вы просто помещаете переменную в строку шаблона и заключаете ее в ${и }.
Точно так же вы можете включить в строковый литерал другие выражения, например ${a + b}. 
Этот новый способ создания строк обеспечивает большую гибкость при создании надежных строк.

Используйте литеральный синтаксис шаблона с обратными кавычками для создания массива строк элементов списка ( li). 
Текст каждого элемента списка должен быть одним из элементов массива из failureсвойства объекта resultи иметь classатрибут со значением text-warning. 
Функция makeListдолжна возвращать массив строк элементов списка.

Используйте метод итератора (любой цикл), чтобы получить желаемый результат (показан ниже).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`); 
  //[ получим список '<li class="text-warning">no-var</li>',
  //'<li class="text-warning">var-on-top</li>', '<li class="text-warning">linebreak</li>' ]
  
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

//task 16
/*Напишите краткие литеральные объявления объекта, используя сокращенную запись свойства объекта
ES6 добавляет хорошую поддержку для простого определения литералов объектов.

Рассмотрим следующий код:

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
getMousePosition— это простая функция, которая возвращает объект, содержащий два свойства. ES6 предоставляет синтаксический 
сахар для устранения избыточности записи x: x. Вы можете просто написать xодин раз, и он будет преобразован в x: x(или что-то 
подобное) под капотом. Вот та же функция, что и выше, переписанная для использования этого нового синтаксиса:

const getMousePosition = (x, y) => ({ x, y });
nameИспользуйте сокращение свойства объекта с объектными литералами для создания и возврата объекта со свойствами ageи gender.
*/

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear (newGear) { //внутрення функция
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

//task 17
/*Используйте синтаксис класса для определения функции конструктора
ES6 предоставляет новый синтаксис для создания объектов с использованием ключевого слова class .

В ES5 объект можно создать, определив constructorфункцию и используя newключевое слово для создания экземпляра объекта.

В ES6 classобъявление имеет constructorметод, который вызывается с помощью newключевого слова. Если constructorметод 
не определен явно, то он определяется неявно без аргументов.

// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}
// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}
const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();
const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
Следует отметить, что classключевое слово объявляет новую функцию, к которой добавляется конструктор. 
Этот конструктор вызывается, когда newвызывается для создания нового объекта.
Примечание. По соглашению следует использовать UpperCamelCase для имен классов ES6, как SpaceShuttleуказано выше.
Метод constructor— это специальный метод для создания и инициализации объекта, созданного с помощью класса. 
Вы узнаете больше об этом в разделе «Объектно-ориентированное программирование» сертификата JavaScript 
Algorithms And Data Structures Certification.

Используйте classключевое слово и напишите constructorдля создания Vegetableкласса.
Класс Vegetableпозволяет вам создать овощной объект со свойством name, которое передается в класс constructor.*/

// Only change code below this line
class Vegetable {
  constructor (name) {
    this.name = name
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

//task 18
/*Используйте геттеры и сеттеры для управления доступом к объекту
Вы можете получить значения из объекта и установить значение свойства внутри объекта.

Они классически называются геттерами и сеттерами .

Функции-получатели предназначены для простого возврата (получения) значения частной переменной объекта пользователю без прямого 
доступа пользователя к частной переменной.

Функции установки предназначены для изменения (установки) значения частной переменной объекта на основе значения, переданного в 
функцию установки. Это изменение может включать вычисления или даже полную перезапись предыдущего значения.

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
Консоль отобразит строки anonymousи newAuthor.

Обратите внимание на синтаксис, используемый для вызова методов получения и установки. Они даже не похожи на функции. 
Геттеры и сеттеры важны, потому что они скрывают детали внутренней реализации.

Примечание. По соглашению перед именем частной переменной ставится знак подчеркивания ( _). Однако сама практика не делает переменную частной.

Используйте classключевое слово для создания Thermostatкласса. Принимает constructorтемпературу по Фаренгейту.

В классе создайте getterдля получения температуры в градусах Цельсия и setterдля установки температуры в градусах Цельсия.

Помните, что C = 5/9 * (F - 32)и F = C * 9.0 / 5 + 32, где Fзначение температуры в градусах Фаренгейта,
а Cзначение той же температуры в градусах Цельсия.

Примечание. Когда вы реализуете это, вы будете отслеживать температуру внутри класса по одной шкале,
либо по Фаренгейту, либо по Цельсию.

Это сила геттера и сеттера. Вы создаете API для другого пользователя, который может получить правильный результат независимо от того, за кем вы следите.

Другими словами, вы абстрагируете детали реализации от пользователя.*/

//task 19
/**/
