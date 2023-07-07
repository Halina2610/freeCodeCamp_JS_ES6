//task 1
/*Использование метода тестирования
Регулярные выражения используются в языках программирования для сопоставления частей строк. Вы создаете шаблоны, чтобы помочь вам сделать это сопоставление.

Если вы хотите найти слово theв строке The dog chased the cat, вы можете использовать следующее регулярное выражение: 
/the/. Обратите внимание, что в регулярном выражении не требуются кавычки.

В JavaScript есть несколько способов использования регулярных выражений. 
Один из способов проверить регулярное выражение — использовать .test()метод. Метод .test()принимает регулярное выражение,
применяет его к строке (которая помещается в круглые скобки) и возвращает trueили false, если ваш шаблон что-то находит или нет.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
Метод testздесь возвращает true.

Примените регулярное выражение myRegexк строке, myStringиспользуя .test()метод.*/

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);// Change this line

//task 2
/*Совпадение с литеральными строками
В последнем задании вы искали слово, Helloиспользуя регулярное выражение /Hello/. Это регулярное выражение искало буквальное совпадение строки Hello. 
Вот еще один пример поиска буквального совпадения строки Kevin:

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
Этот testвызов вернется true.

Любые другие формы Kevinне будут соответствовать. Например, регулярное выражение /Kevin/не будет соответствовать kevinили KEVIN.

let wrongRegex = /kevin/;
wrongRegex.test(testStr);
Этот testвызов вернется false.

Будущая задача покажет, как сопоставить и эти другие формы.

Завершите регулярное выражение waldoRegex, чтобы найти "Waldo"в строке waldoIsHidingбуквальное совпадение.*/

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);


//task 3
/*Сопоставьте литеральную строку с различными возможностями
Используя регулярные выражения, такие как /coding/, вы можете искать шаблон codingв другой строке.

Это мощный инструмент для поиска отдельных строк, но он ограничен только одним шаблоном. Вы можете искать несколько шаблонов, 
используя оператор alternationили OR: |.

Этот оператор сопоставляет шаблоны либо до, либо после него. Например, если вы хотите сопоставить строки yesили no, 
вам нужно регулярное выражение /yes|no/.

Вы также можете искать более двух шаблонов. Вы можете сделать это, добавив больше шаблонов с большим количеством ORоператоров, 
разделяющих их, например /yes|no|maybe/.

Заполните регулярное выражение petRegex, чтобы оно соответствовало домашним животным dog, cat, birdили fish.*/

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

//task 4
/*Игнорировать регистр при сопоставлении
До сих пор вы рассматривали регулярные выражения для буквального сопоставления строк. Но иногда вы можете захотеть также сопоставить различия в регистре.

Регистр (или иногда регистр букв) — это разница между прописными и строчными буквами. Примеры прописных букв: A, B, и C. 
Примерами нижнего регистра являются a, bи c.

Вы можете сопоставить оба случая, используя так называемый флаг. Есть и другие флаги, но здесь вы сосредоточитесь на флаге, 
который игнорирует регистр — флаг i.
Вы можете использовать его, добавив в регулярное выражение. Пример использования этого флага /ignorecase/i.
Это регулярное выражение может соответствовать строкам ignorecase, 
igNoreCaseи IgnoreCase.

Напишите регулярное выражение fccRegexдля соответствия freeCodeCampнезависимо от регистра. 
Ваше регулярное выражение не должно соответствовать никаким аббревиатурам или
вариациям с пробелами.*/

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);


//task 5
/*Извлечь совпадения
До сих пор вы только проверяли, существует ли шаблон в строке или нет. Вы также можете извлечь фактические совпадения, которые вы нашли с помощью .match()метода.

Чтобы использовать .match()метод, примените метод к строке и передайте регулярное выражение в круглых скобках.

Вот пример:

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
matchЗдесь вернется первый ["Hello"]и вернется второй ["expressions"].

Обратите внимание, что .matchсинтаксис является «противоположным» методу, .testкоторый вы использовали до сих пор:

'string'.match(/regex/);
/regex/.test('string');
Примените .match()метод для извлечения строки coding.*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line


//task 6
/*Найдите больше, чем первое совпадение
До сих пор вы могли извлекать или искать шаблон только один раз.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
Вот matchбы вернуться ["Repeat"].

Чтобы искать или извлекать шаблон более одного раза, вы можете использовать флаг глобального поиска: g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
И здесь matchвозвращает значение["Repeat", "Repeat", "Repeat"]

Используя регулярное выражение starRegex, найдите и извлеките оба Twinkleслова из строки twinkleStar.

Примечание.
В регулярном выражении может быть несколько флагов, например/search/gi*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line // флаг g ищет все совпадения, флаг i - объявляет поиск независимо от регистра.
let result = twinkleStar.match(starRegex); // Change this line


//task 7
/*Сопоставьте что угодно с точкой подстановки
Иногда вы не будете (или не должны) знать точные символы в своих шаблонах. Обдумывание всех слов, которые соответствуют, 
скажем, орфографической ошибке, заняло бы много времени. К счастью, вы можете сэкономить время, используя подстановочный знак:.

Подстановочный знак .будет соответствовать любому одному символу. Подстановочный знак также называется dotи period. 
Вы можете использовать подстановочный знак так же, как и любой другой символ в регулярном выражении. Например,
если вы хотите сопоставить hug, huh, hutи hum, вы можете использовать регулярное выражение /hu./для сопоставления всех четырех слов.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
Оба этих testвызова вернутся true.

Завершите регулярное выражение unRegex, чтобы оно соответствовало строкам run, sun, fun, pun, nunи bun. 
Ваше регулярное выражение должно использовать подстановочный знак.*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

//task 8
/*Сопоставьте одного персонажа с несколькими возможностями
Вы узнали, как сопоставлять литеральные шаблоны ( /literal/) и подстановочные знаки ( /./). Это крайности регулярных выражений,
когда одно находит точные совпадения, а другое — все. Есть варианты, представляющие собой баланс между двумя крайностями.

Вы можете искать буквальный шаблон с некоторой гибкостью с помощью классов символов . Классы символов позволяют вам определить 
группу символов, которые вы хотите сопоставить, поместив их в квадратные ( [и ]) скобки.

Например, вы хотите сопоставить bag, bigи , bugно не bog. Вы можете создать регулярное выражение /b[aiu]g/для этого. Это [aiu]класс 
символов, который будет соответствовать только символам a, iили u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
По порядку четыре matchвызова вернут значения ["big"], ["bag"], ["bug"]и null.

Используйте класс символов с гласными ( a, e, i, o, u) в регулярном выражении vowelRegex, чтобы найти все гласные в строке quoteSample.

Примечание. Убедитесь, что гласные в верхнем и нижнем регистре совпадают.*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line


//task 9
/*Совпадение букв алфавита
Вы видели, как можно использовать наборы символов , чтобы указать группу символов для сопоставления, но это требует много времени, 
когда вам нужно сопоставить большой диапазон символов (например, каждую букву алфавита). К счастью, есть встроенная функция, которая
делает это коротким и простым.

Внутри набора символов вы можете определить диапазон символов для соответствия с помощью символа дефиса: -.

Например, чтобы сопоставить строчные буквы, вы должны aиспользовать .e[a-e]

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
По порядку три matchвызова вернут значения ["cat"], ["bat"]и null.

Сопоставьте все буквы в строке quoteSample.

Примечание . Убедитесь, что совпадают как прописные, так и строчные буквы.*/

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//task 10
/*Совпадение чисел и букв алфавита
Использование дефиса ( -) для соответствия диапазону символов не ограничивается буквами. Он также работает, чтобы соответствовать диапазону чисел.

Например, /[0-5]/соответствует любому числу между 0и 5, включая 0и 5.

Кроме того, можно комбинировать диапазон букв и цифр в одном наборе символов.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
Создайте одно регулярное выражение, которое соответствует диапазону букв между hи sи диапазону чисел между 2и 6. 
Не забудьте включить соответствующие флаги в регулярное выражение.*/

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line


//task 11
/*Совпадение с отдельными символами, не указанными
До сих пор вы создали набор символов, которые вы хотите сопоставить, но вы также можете создать набор символов, которые вы не хотите сопоставлять.
Эти типы наборов символов называются наборами символов с отрицанием .

Чтобы создать набор символов с отрицанием, вы помещаете символ вставки ( ^) после открывающей скобки и перед символами, которые не должны совпадать.

Например, /[^aeiou]/giсоответствует всем символам, не являющимся гласными. Обратите внимание, что такие символы, 
как ., !, [, @, /и пробел совпадают — набор символов с отрицанием гласных исключает только символы гласных.

Создайте одно регулярное выражение, которое соответствует всем символам, не являющимся числом или гласной. 
Не забудьте включить соответствующие флаги в регулярное выражение.*/

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line


//task 12
/*Сопоставьте символы, которые встречаются один или несколько раз
Иногда вам нужно сопоставить символ (или группу символов), который появляется один или несколько раз подряд. 
Это означает, что это происходит хотя бы один раз и может повторяться.

Вы можете использовать +символ, чтобы проверить, так ли это. Помните, что символ или шаблон должны присутствовать последовательно.
То есть персонаж должен повторяться один за другим.

Например, /a+/gнайдет одно совпадение abcи вернет ["a"]. Из-за +, он также найдет одно совпадение aabcи вернет ["aa"].

Если бы он вместо этого проверял строку abab, он нашел бы два совпадения и вернул бы результат ["a", "a"], 
потому что aсимволы не стоят в строке — bмежду ними есть знак. aНаконец, поскольку в строке нет bcd, совпадение не будет найдено.

Вы хотите найти совпадения, когда буква sвстречается один или несколько раз в Mississippi. Напишите регулярное выражение, использующее +знак.*/

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

//task 13
/*Соответствие символам, которые встречаются ноль или более раз
В последней задаче +знак «плюс» использовался для поиска символов, встречающихся один или несколько раз. Существует также параметр,
который соответствует символам, встречающимся ноль или более раз.

Символ для этого — звездочка или звездочка: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
По порядку три matchвызова вернут значения ["goooooooo"], ["g"]и null.

Для этой задачи chewieQuoteбыла инициализирована строка Aaaaaaaaaaaaaaaarrrgh!за кулисами. Создайте регулярное выражение chewieRegex, которое использует 
  *символ для соответствия Aсимволу верхнего регистра, за которым непосредственно следует ноль или более aсимволов нижнего регистра в chewieQuote. 
  Вашему регулярному выражению не нужны флаги или классы символов, и оно не должно совпадать ни с какими другими кавычками.*/

  // Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

//task 14
/*Найдите символы с ленивым сопоставлением
В регулярных выражениях жадное совпадение находит максимально длинную часть строки, которая соответствует шаблону регулярного выражения, 
и возвращает ее как совпадение. Альтернатива называется ленивым сопоставлением, которое находит наименьшую возможную часть строки, 
удовлетворяющую шаблону регулярного выражения.

Вы можете применить регулярное выражение /t[a-z]*i/к строке "titanic". Это регулярное выражение в основном представляет собой шаблон,
который начинается с t, заканчивается на iи имеет несколько букв между ними.

Регулярные выражения по умолчанию являются жадными, поэтому совпадение возвращает ["titani"]. Он находит самую большую подстроку, соответствующую шаблону.

Однако вы можете использовать ?символ, чтобы изменить его на ленивое сопоставление.
"titanic"сопоставляется с скорректированным регулярным выражением /t[a-z]*?i/return ["ti"].

Примечание. Следует избегать синтаксического анализа HTML с помощью регулярных выражений,
но сопоставление шаблона строки HTML с регулярными выражениями вполне допустимо.

Исправьте регулярное выражение /<.*>/, чтобы оно возвращало тег HTML <h1>, а не текст "<h1>Winter is coming</h1>". 
Помните, что подстановочный знак .в регулярном выражении соответствует любому символу.
*/

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

//task 15
/*Найдите одного или нескольких преступников на охоте
Время сделать паузу и проверить свои новые навыки написания регулярных выражений. Группа преступников сбежала из тюрьмы и сбежала,
но вы не знаете, сколько. Однако вы знаете, что они держатся вместе, когда находятся рядом с другими людьми. Вы несете ответственность 
за обнаружение всех преступников сразу.

Вот пример, чтобы рассмотреть, как это сделать:

Регулярное выражение /z+/соответствует букве z, когда она появляется один или несколько раз подряд. Он найдет совпадения во всех следующих строках:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
Но он не находит совпадений в следующих строках, так как в них нет буквенных zсимволов:

""
"ABC"
"abcabc"
Напишите жадное регулярное выражение, которое находит одного или нескольких преступников в группе других людей. Преступника изображают с большой буквы C.*/

let reCriminals = /C+/; // Change this line

//task 16
/*Совпадение с шаблонами начальных строк
Предыдущие испытания показали, что регулярные выражения можно использовать для поиска ряда совпадений. 
Они также используются для поиска шаблонов в определенных позициях в строках.

В более ранней задаче вы использовали символ вставки ( ^) внутри набора символов
для создания набора символов с отрицанием в форме [^thingsThatWillNotBeMatched]. 
Вне набора символов знак вставки используется для поиска шаблонов в начале строк.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
Первый testвызов вернется true, а второй вернется false.

Используйте символ вставки в регулярном выражении для поиска Calтолько в начале строки rickyAndCal.*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

//task 17
/*Совпадение с шаблонами конечных строк
В последнем задании вы научились использовать символ вставки для поиска шаблонов в начале строк. Существует также способ поиска шаблонов в конце строк.

Вы можете искать конец строки, используя символ доллара $в конце регулярного выражения.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
Первый testвызов вернется true, а второй вернется false.

Используйте символ привязки ( $) для сопоставления строки cabooseв конце строки caboose.
*/
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

//task 18
/*Сопоставьте все буквы и цифры
Используя классы символов, вы могли искать все буквы алфавита с помощью [a-z]. Этот тип класса символов достаточно распространен, 
поэтому для него есть ярлык, хотя он также включает в себя несколько дополнительных символов.

Ближайший класс символов в JavaScript, соответствующий алфавиту, — это \w. Этот ярлык равен [A-Za-z0-9_]. 
Этот класс символов соответствует прописным и строчным буквам, а также цифрам. Обратите внимание, что этот класс символов также включает 
символ подчеркивания ( _).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
Все четыре из этих testвызовов вернутся true.

Эти классы сокращенных символов также известны как классы сокращенных символов .

Используйте класс сокращенных символов \wдля подсчета количества буквенно-цифровых символов в различных кавычках и строках.*/

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

//task 19
/*Сопоставьте все, кроме букв и цифр
Вы узнали, что можно использовать ярлык для сопоставления буквенно-цифровых символов [A-Za-z0-9_]с помощью \w.
Естественный шаблон, который вы, возможно, захотите найти, противоположен буквенно-цифровому.

Вы можете искать противоположное \wwith \W. Обратите внимание, что в противоположном шаблоне используется заглавная буква.
Этот ярлык такой же, как [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
Первый matchвызов вернет значение ["%"], а второй вернет ["!"].

Используйте класс сокращенных символов \Wдля подсчета количества не буквенно-цифровых символов в различных кавычках и строках.*/

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

//task 20
/*Совпадение со всеми числами
Вы изучили сочетания клавиш для распространенных шаблонов строк, таких как буквенно-цифровые символы. 
Другой распространенный шаблон — поиск только цифр или чисел.

Ярлык для поиска цифровых символов — \dстрочные буквы d. Это равно классу символов [0-9], который ищет один символ любого числа от нуля до девяти.

Используйте класс сокращенных символов \dдля подсчета количества цифр в названиях фильмов. Выписанные цифры ("шесть" вместо 6) не засчитываются.*/
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

//task 21
/*Совпадение со всеми нечисловыми значениями
В последнем задании было показано, как искать цифры с помощью сочетания клавиш \dсо строчной буквой d.
Вы также можете искать нецифры, используя аналогичный ярлык, который Dвместо этого использует верхний регистр.

Ярлык для поиска нецифровых символов — \D. Это равно классу символов [^0-9], который ищет единственный символ,
который не является числом от нуля до девяти.

Используйте класс сокращенных символов для нецифр, \Dчтобы подсчитать, сколько нецифр в названиях фильмов.*/

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

//task 22
/*Ограничить возможные имена пользователей
Имена пользователей используются повсюду в Интернете. Это то, что дает пользователям уникальную идентичность на их любимых сайтах.

Вам нужно проверить все имена пользователей в базе данных. Вот несколько простых правил,
которым должны следовать пользователи при создании своего имени пользователя.

Имена пользователей могут использовать только буквенно-цифровые символы.

Единственные цифры в имени пользователя должны быть в конце. В конце их может быть ноль или больше. Имя пользователя не может начинаться с цифры.

Буквы имени пользователя могут быть строчными и прописными.

Имя пользователя должно быть не менее двух символов. Двухсимвольное имя пользователя может использовать только буквы алфавита в качестве символов.

Измените регулярное выражение userCheck, чтобы оно соответствовало перечисленным выше ограничениям.*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)


//task 23
/*Совпадение с пробелами
До сих пор задачи касались сопоставления букв алфавита и цифр. Вы также можете сопоставить пробелы или пробелы между буквами.

Вы можете искать пробелы \s, используя строчные буквы s. Этот шаблон соответствует не только пробелам, но и символам возврата каретки, 
табуляции, перевода страницы и новой строки. Вы можете думать об этом как о классе символов [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
Этот matchзвонок вернется [" ", " "].

Измените регулярное выражение countWhiteSpaceдля поиска нескольких пробельных символов в строке.
*/


let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s+/g; // Change this line
let result = sample.match(countWhiteSpace);

//task 24
/*Совпадение с непробельными символами
Вы узнали о поиске пробелов \sс помощью строчных букв s. Вы также можете искать все, кроме пробелов.

Ищите непробельные символы \S, используя прописные буквы s. Этот шаблон не будет соответствовать пробелам, возврату каретки, табуляции, 
переводу формы и символам новой строки. Вы можете думать, что это похоже на класс символов [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
Значение, возвращаемое методом, .lengthбудет 32.

Измените регулярное выражение countNonWhiteSpace, чтобы оно искало в строке несколько символов, отличных от пробелов.*/

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);


//task 25
/*Укажите верхнее и нижнее количество совпадений
Вспомните, что вы используете знак «плюс» +для поиска одного или нескольких символов и звездочку *для поиска нуля или более символов. 
Это удобно, но иногда вы хотите сопоставить определенный диапазон шаблонов.

Вы можете указать нижнее и верхнее количество паттернов с помощью спецификаторов количества . 
Спецификаторы количества используются с фигурными скобками ( {и }). Вы ставите между фигурными скобками две цифры - для нижнего и верхнего номера узора.

Например, чтобы соответствовать только букве, aпоявляющейся между 3и 5раз в строке ah, ваше регулярное выражение будет /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
Первый testвызов вернется true, а второй вернется false.

Измените регулярное выражение ohRegex, чтобы оно соответствовало всей фразе Oh noтолько тогда, когда она должна 3содержать 6буквы h.*/
//task 26
/**/
//task 27
/**/
//task 28
/**/
//task 29
/**/
//task 30
/**/


