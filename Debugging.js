//task 1
/*Используйте консоль JavaScript для проверки значения переменной
И в Chrome, и в Firefox есть отличные консоли JavaScript, также известные как DevTools, для отладки вашего JavaScript.

Вы можете найти инструменты разработчика в меню Chrome или веб-консоль в меню Firefox. Если вы используете другой браузер 
или мобильный телефон, мы настоятельно рекомендуем переключиться на настольный Firefox или Chrome.
Метод console.log(), который «выводит» вывод того, что находится в скобках, на консоль, вероятно, будет самым полезным 
инструментом отладки. Размещение его в стратегических точках вашего кода может показать вам промежуточные значения переменных.
Хорошей практикой является иметь представление о том, каким должен быть вывод, прежде чем смотреть, что это такое. Наличие 
контрольных точек для просмотра состояния вычислений по всему коду поможет сузить круг проблем.
Вот пример вывода строки Hello world!на консоль:
console.log('Hello world!');
Используйте console.log()метод для печати значения переменной, aотмеченной в коде.*/

let a = 5;
let b = 1;
a++;
// Only change code below this line


let sumAB = a + b;
console.log(sumAB);
console.log(a)

//task 2
/*Понимание различий между freeCodeCamp и консолью браузера
Вы могли заметить, что некоторые испытания freeCodeCamp включают собственную консоль. Эта консоль ведет себя немного иначе,
чем консоль браузера.

Есть много методов, которые можно использовать для consoleвывода сообщений. log, warn, и clearназвать несколько. Консоль 
freeCodeCamp будет выводить только logсообщения, 
а консоль браузера — все сообщения. Когда вы вносите изменения в свой код, он автоматически запускается и показывает журналы. 
После этого консоль freeCodeCamp очищается при каждом запуске вашего кода.

Сначала откройте консоль браузера, чтобы увидеть журналы. Для этого вы можете щелкнуть правой кнопкой мыши панель навигации 
freeCodeCamp вверху и выбрать inspectбольшинство браузеров. Затем найдите consoleвкладку в открывшемся окне.

После этого используйте console.logдля регистрации outputпеременной. Просмотрите две консоли, чтобы увидеть журнал. 
Наконец, используйте console.clearпосле вашего журнала, чтобы очистить консоль браузера. Посмотрите разницу в двух консолях.*/

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output)
console.clear()

//task 3
/*Используйте typeof для проверки типа переменной
Вы можете использовать typeofдля проверки структуры данных или типа переменной. 
Это полезно при отладке при работе с несколькими типами данных. Если вы думаете, что добавляете два числа, 
но одно из них на самом деле является строкой, результаты могут быть неожиданными. Ошибки типов могут скрываться 
в вычислениях или вызовах функций. Будьте особенно осторожны при доступе к внешним данным в форме объекта нотации 
объектов JavaScript (JSON) и работе с ними.

Вот несколько примеров использования typeof:

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
По порядку консоль отобразит строки string, number, objectи object.

JavaScript распознает семь примитивных (неизменяемых) типов данных: Boolean, Null, Undefined, Number, String, Symbol(новое в ES6) 
и BigInt(новое в ES2020), а также один тип для изменяемых элементов: Object. Обратите внимание, что в JavaScript массивы технически 
являются типом объекта.

Добавьте два console.log()оператора для проверки typeofкаждой из двух переменных sevenи threeв коде.*/
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);

//task 4
/*Отлавливайте имена переменных и функций с ошибками
Методы console.log()и typeofявляются двумя основными способами проверки промежуточных значений и типов выходных данных программы. 
Теперь пришло время перейти к общим формам, которые принимают ошибки. Одна проблема на уровне синтаксиса, 
с которой быстро печатающие могут посочувствовать, — это скромная орфографическая ошибка.

Перемещенные, отсутствующие или неправильно написанные заглавные символы в имени переменной или функции заставят 
браузер искать несуществующий объект и пожаловаться в виде ошибки ссылки. Имена переменных и функций JavaScript чувствительны к регистру.

Исправьте две орфографические ошибки в коде, чтобы netWorkingCapitalвычисления работали.*/

//task 5
/**/
//task 6
/**/
//task 7
/**/
//task 8
/**/
//task 9
/**/
