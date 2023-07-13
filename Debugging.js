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
браузер искать несуществующий объект и пожаловаться в виде ошибки ссылки. Имена переменных и функций JavaScript 
чувствительны к регистру.

Исправьте две орфографические ошибки в коде, чтобы netWorkingCapitalвычисления работали.*/
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//task 5
/*Поймать незакрытые круглые скобки, квадратные скобки, фигурные скобки и кавычки
Еще одна синтаксическая ошибка, о которой следует помнить, заключается в том, что все открывающие скобки, квадратные скобки,
фигурные скобки и кавычки имеют закрывающую пару. Забывание части обычно происходит, когда вы редактируете существующий код и
вставляете элементы с одним из парных типов. Кроме того, будьте осторожны при вложении блоков кода в другие, например при 
добавлении функции обратного вызова в качестве аргумента метода.

Один из способов избежать этой ошибки — как только будет введен начальный символ, сразу же включить закрывающее совпадение, 
затем переместить курсор назад между ними и продолжить кодирование. К счастью, большинство современных редакторов кода
автоматически генерируют вторую половину пары.

Исправьте две парные ошибки в коде.*/


let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
//task 6
/*Улавливайте смешанное использование одинарных и двойных кавычек
JavaScript позволяет использовать как одинарные ( '), так и двойные ( ") кавычки для объявления строки. 
Решение о том, какой из них использовать, обычно зависит от личных предпочтений, за некоторыми исключениями.

Два варианта выбора хороши, когда в строке есть сокращения или другой фрагмент текста, заключенный в кавычки. 
Просто будьте осторожны, чтобы не закрыть строку слишком рано, что вызовет синтаксическую ошибку.

Вот несколько примеров смешения цитат:

const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
Первые два правильны, а третий неправильный.

Конечно, можно использовать только один стиль кавычек. Вы можете избежать кавычек внутри строки, используя \escape-символ обратной 
косой черты ( ):

const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
Исправьте строку, чтобы она либо использовала другие кавычки для hrefзначения, либо экранировала существующие.
Держите двойные кавычки вокруг всей строки.
*/

let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);


//task 7
/*Отловить использование оператора присваивания вместо оператора равенства
Ветвящиеся программы, то есть те, которые делают разные вещи при соблюдении определенных условий, полагаются на операторы 
if, else ifи elseв JavaScript. Условие иногда принимает форму проверки, равен ли результат значению.

Эта логика выражается (по крайней мере, на английском языке) как «если x равно y, то…», что можно буквально перевести в 
код с помощью =оператора присваивания или . Это приводит к неожиданному потоку управления в вашей программе.

Как уже говорилось в предыдущих задачах, оператор присваивания ( =) в JavaScript присваивает значение имени переменной. 
А операторы ==и ===проверяют равенство (тройные ===проверки строгого равенства, означающие, что и значение, и тип одинаковы).

В приведенном ниже коде присваивается xзначение 2, которое оценивается как true. 
Почти каждое значение в JavaScript само по себе оценивается как true, за исключением так называемых «ложных» значений:
false, 0, ""(пустая строка), NaN, undefinedи null.
let x = 1;
let y = 2;
if (x = y) {
} else {
}
В этом примере блок кода внутри ifоператора будет выполняться для любого значения y, если только yоно не является ложным. 
Блок else, который мы ожидаем здесь запустить, на самом деле не запустится.
Исправьте условие, чтобы программа выполняла правильную ветвь, а соответствующее значение было присвоено result

перейти к содержанию
Поиск
Найдите более 9000 руководств
Пожертвовать


Меню
Алгоритмы JavaScript и структуры данных
Отладка
Отловить использование оператора присваивания вместо оператора равенства
Ветвящиеся программы, то есть те, которые делают разные вещи при соблюдении определенных условий, полагаются на операторы 
if, else ifи elseв JavaScript. Условие иногда принимает форму проверки, равен ли результат значению.

Эта логика выражается (по крайней мере, на английском языке) как «если x равно y, то…», что можно буквально перевести в
код с помощью =оператора присваивания или . Это приводит к неожиданному потоку управления в вашей программе.

Как уже говорилось в предыдущих задачах, оператор присваивания ( =) в JavaScript присваивает значение имени переменной.
А операторы ==и ===проверяют равенство (тройные ===проверки строгого равенства, означающие, что и значение, и тип одинаковы).

В приведенном ниже коде присваивается xзначение 2, которое оценивается как true. Почти каждое значение в JavaScript само 
по себе оценивается как true, за исключением так называемых «ложных» значений: false, 0, ""(пустая строка), NaN, undefinedи null.

let x = 1;
let y = 2;
if (x = y) {

} else {

}
В этом примере блок кода внутри ifоператора будет выполняться для любого значения y, если только yоно не является ложным. 
Блок else, который мы ожидаем здесь запустить, на самом деле не запустится.

Исправьте условие, чтобы программа выполняла правильную ветвь, а соответствующее значение было присвоено result.*/
let x = 7;
let y = 9;
let result = "";

if(x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

//task 8
/*Поймать пропущенные открытые и закрывающие скобки после вызова функции
Когда функция или метод не принимает никаких аргументов, вы можете забыть включить (пустые) открывающую и 
закрывающую круглые скобки при ее вызове. Часто результат вызова функции сохраняется в переменной для другого 
использования в вашем коде. Эту ошибку можно обнаружить, записав значения переменных (или их типов) в консоль и увидев, 
что для одного из них задана ссылка на функцию, а не ожидаемое значение, которое возвращает функция.

Переменные в следующем примере отличаются:

function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
Вот varOneфункция myFunction, а varTwoэто строка You rock!.

Исправьте код, чтобы для переменной resultбыло установлено значение, возвращаемое при вызове функции getNine.*/
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);
//task 9
/*Перехват аргументов, переданных в неправильном порядке при вызове функции
Продолжая обсуждение вызова функций, следует обратить внимание на следующую ошибку, когда аргументы функции передаются в 
неправильном порядке. Если аргументы относятся к разным типам, например функция ожидает массив и целое число, это, 
скорее всего, вызовет ошибку времени выполнения. Если аргументы одного типа (например, все целые числа), то логика кода не 
будет иметь смысла. Обязательно укажите все необходимые аргументы в правильном порядке, чтобы избежать этих проблем.

Функция raiseToPowerвозводит основание в степень. К сожалению, он не вызывается должным образом - исправьте код, 
чтобы значение powerбыло ожидаемым 8.*/
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
//task 10
/*Отлавливайте по одной ошибки при использовании индексации
Ошибки Off by one (иногда называемые OBOE) возникают, когда вы пытаетесь нацелиться на определенный индекс строки или массива 
(чтобы разрезать или получить доступ к сегменту) или при циклическом переборе их индексов. Индексация в JavaScript начинается с
нуля, а не с единицы, что означает, что последний индекс всегда на единицу меньше длины элемента. Если вы попытаетесь получить 
доступ к индексу, равному длине, программа может выдать ошибку ссылки «индекс вне диапазона» или вывести undefined.

Когда вы используете методы строк или массивов, которые принимают диапазоны индексов в качестве аргументов, полезно прочитать
документацию и понять, являются ли они инклюзивными (элемент с данным индексом является частью того, что возвращается) или нет. 
Вот несколько примеров ошибки off by one:

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}
Первый пример здесь зацикливается слишком много раз, а второй зацикливается слишком мало (отсутствует первый индекс, 0). 
Третий пример правильный.

Исправьте две ошибки индексации в следующей функции, чтобы все числа от 1 до 5 выводились на консоль.*/

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();

//task 11
/*Будьте осторожны при повторной инициализации переменных внутри цикла
Иногда необходимо сохранить информацию, увеличить счетчики или переустановить переменные внутри цикла. 
Потенциальная проблема заключается в том, что переменные либо должны быть повторно инициализированы, либо наоборот. Это особенно опасно,
если вы случайно сбросите переменную, используемую для терминального условия, что вызовет бесконечный цикл.

Печать значений переменных в каждом цикле цикла с помощью использования console.log()может выявить ошибочное поведение,
связанное со сбросом или невозможностью сброса переменной.

Следующая функция предназначена для создания двумерного массива со mстроками и nстолбцами нулей. К сожалению, он не дает 
ожидаемого результата, потому что переменная rowне инициализируется повторно (не устанавливается обратно в пустой массив) 
во внешнем цикле. Исправьте код, чтобы он возвращал правильный массив нулей 3x2, который выглядит как [[0, 0], [0, 0], [0, 0]].*/

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  for (let i = 0; i < m; i++) {
  let row = [];
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);




//task 12
/*Предотвращение бесконечных циклов с допустимым терминальным условием
Последняя тема — ужасный бесконечный цикл. Циклы — отличный инструмент, когда вам нужно, чтобы ваша программа запускала блок кода 
определенное количество раз или до тех пор, пока не будет выполнено условие, но им нужно 
конечное условие, которое завершает цикл. Бесконечные циклы, скорее всего, приведут к зависанию или сбою браузера и вызовут общий 
хаос при выполнении программы, чего никто не хочет.

Во введении к этому разделу был пример бесконечного цикла — у него не было конечного условия для выхода из цикла whileвнутри loopy().
НЕ вызывайте эту функцию!

function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
Работа программиста состоит в том, чтобы убедиться, что конечное условие, которое сообщает программе, когда выйти из кода цикла, 
в конечном итоге будет достигнуто. Одна ошибка заключается в увеличении или уменьшении переменной счетчика в неправильном направлении 
от терминального состояния. Другой случайный сброс счетчика или индексной переменной в коде цикла вместо ее увеличения или уменьшения.

Функция myFunc()содержит бесконечный цикл, потому что терминальное условие i != 4никогда не будет 
оцениваться false(и прерывать цикл) — iбудет увеличиваться на 2 при каждом проходе и перескакивать сразу через 4, 
поскольку iначало нечетно. Исправьте оператор сравнения в терминальном условии, чтобы цикл выполнялся только для iзначений меньше 
или равных 4.*/

function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}

