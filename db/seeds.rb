User.create!([
  {email: "guest@codeblocks.us", session_token: "hVjJwe42mp-5NmuGKz6iBw", password_digest: "$2a$10$335BSl36KgUzfaY/9Iwj/uTG8YOu3e0pXVDU1CYJipDS6E64/u02e"}
])
Language.create!([
  {name: "javascript"},
  {name: "ruby"},
  {name: "c"},
  {name: "clojure"},
  {name: "c++"},
  {name: "c#"},
  {name: "css3"},
  {name: "elixir"},
  {name: "elm"},
  {name: "haskell"},
  {name: "html5"},
  {name: "java"},
  {name: "perl"},
  {name: "php"},
  {name: "python"},
  {name: "sass"},
  {name: "r"},
  {name: "shell"},
  {name: "docker"},
  {name: "git"}
])
Concept.create!([
  {name: "syntax"},
  {name: "scope"},
  {name: "closure"},
  {name: "instantiation"},
  {name: "inheritance"},
  {name: "strict-mode"},
  {name: "this"},
  {name: "arguments"},
  {name: "ES6"},
  {name: "spread"},
  {name: "default-value"},
  {name: "apply"},
  {name: "call"},
  {name: "async"},
  {name: "callback"},
  {name: "prototype"},
  {name: "module"},
  {name: "export"}
])
Block.create!([
  {codeblock: {"allLines"=>["let result = [];", "for (let i = 1; i < 10; i++) {", "  if (i % 3 === 0) {", "    continue;", "  }", "  result.push(i);", "}", "", "console.log(result);"], "editLines"=>[], "editRanges"=>[[3, 4, 3, 12]], "keywordLines"=>["let result = [];", "for (let i = 1; i < 10; i++) {", "  if (i % 3 === 0) {", "            ;", "  }", "  result.push(i);", "}", "", "console.log(result);"], "keywordRanges"=>[[0, 0, 3, 4], [3, 12, 9, 20]]}, output: "[1, 2, 4, 5, 7, 8]", prompt: "Fill in the blanks to produce the specified output.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["let result = [];", "for (let i = 1; i < 10; i++) {", "  if (i % 3 === 0) {", "    break;", "  }", "  result.push(i);", "}", "", "console.log(result);"], "editLines"=>[], "editRanges"=>[[3, 4, 3, 9]], "keywordLines"=>["let result = [];", "for (let i = 1; i < 10; i++) {", "  if (i % 3 === 0) {", "         ;", "  }", "  result.push(i);", "}", "", "console.log(result);"], "keywordRanges"=>[[0, 0, 3, 4], [3, 9, 9, 20]]}, output: "[1, 2]", prompt: "Fill in the blanks to produce the specified output.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function blockScope() {", "  if (true) {", "    var x = 'var';", "    let y = 'let';", "  }", "  return y;", "}", "", "blockScope();"], "editLines"=>[], "editRanges"=>[]}, output: "ReferenceError: y is not defined", prompt: "What is the output of the following code block?", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function blockScope() {", "  if (true) {", "    var x = 'var';", "    let y = 'let';", "    console.log(x);", "    console.log(y);", "  }", "  return x;", "}", "", "blockScope();"], "editLines"=>[], "editRanges"=>[]}, output: "\"var\"", prompt: "What is the output of the following code block?", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["const favFood = \"cheeseboard pizza\"", "console.log(favFood);", "", "if (true) {  ", "  const favFood = \"noodles\";", "}", "", "favFood;"], "editLines"=>[], "editRanges"=>[]}, output: "\"cheeseboard pizza\"", prompt: "What is the output of the following code block?", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function good() {", "  let x = 5;", "}", "", "function bad() {", "  y = \"Expect the unexpected\";", "}", "", "function why() {", "  return x;", "}", "", "good();", "bad();", "why();"], "editLines"=>[], "editRanges"=>[[1, 2, 1, 5]], "keywordLines"=>["function good() {", "      x = 5;", "}", "", "function bad() {", "  y = \"Expect the unexpected\";", "}", "", "function why() {", "  return x;", "}", "", "good();", "bad();", "why();"], "keywordRanges"=>[[0, 0, 1, 2], [1, 5, 15, 6]]}, output: "ReferenceError", prompt: "Fill in the blanks to make the code produce the specified output.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function good() {", "  let x = 5;", "}", "", "function bad() {", "  y = \"Expect the unexpected\";", "}", "", "function why() {", "  return y;", "}", "", "good();", "bad();", "why();"], "editLines"=>[], "editRanges"=>[]}, output: "\"Expect the unexpected\"", prompt: "What is the output of the following code block?", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function sayHelloNTimes(name, n) {", "  function greet() {", "    console.log( `Hi, ${name}!`);", "  }", "", "  for (let i = 0; i < n; i++) {", "    greet();", "  }", "}", "", "sayHelloNTimes(\"Bob\", 3);"], "editLines"=>[], "editRanges"=>[[2, 17, 2, 31]], "keywordLines"=>["function sayHelloNTimes(name, n) {", "  function greet() {", "    console.log(               );", "  }", "", "  for (let i = 0; i < n; i++) {", "    greet();", "  }", "}", "", "sayHelloNTimes(\"Bob\", 3);"], "keywordRanges"=>[[0, 0, 2, 17], [2, 31, 11, 25]]}, output: "=> \"Hi, Bob!\" => \"Hi, Bob!\" => \"Hi, Bob!\" => undefined", prompt: "Fill in the blanks to make the code produce the specified output.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function sum(nums) {", "  let count = 0;", "", "  function addNum(num) {", "    count += num;", "  }", "", "  for (let i = 0; i < nums.length; i++){", "    addNum(nums[i]);", "  }", "", "  return count;", "}", "", "sum([1, 3, 5]);"], "editLines"=>[4], "editRanges"=>[], "logicLines"=>["function sum(nums) {", "  let count = 0;", "", "  function addNum(num) {", "   ", "  }", "", "  for (let i = 0; i < nums.length; i++){", "    addNum(nums[i]);", "  }", "", "  return count;", "}", "", "sum([1, 3, 5]);"], "logicRanges"=>[[0, 0, 4, 0], [5, 0, 14, 15]]}, output: "\"9\"", prompt: "Fill in the missing code to produce the specified output.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function Counter() {", "  let count = 1;", "", "  return () => count++;", "}", "", "let counter = new Counter();", "counter();", "counter();"], "editLines"=>[3], "editRanges"=>[[6, 14, 6, 27]], "keywordLines"=>["function Counter() {", "  let count = 1;", "", "  return () => count++;", "}", "", "let counter =              ;", "counter();", "counter();"], "keywordRanges"=>[[0, 0, 6, 14], [6, 27, 9, 10]], "logicLines"=>["function Counter() {", "  let count = 1;", "", "   ", "}", "", "let counter = new Counter();", "counter();", "counter();"], "logicRanges"=>[[0, 0, 3, 0], [4, 0, 8, 10]]}, output: "2", prompt: "Fill in the missing code to make the code block produce the specified output.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function Counter () {", "  this._count = 0;", "}", "", "Counter.prototype.fire = function () {", "  this._count += 1;", "  return this._count;", "}", "", "let counter = new Counter();", "counter.fire();", "counter.fire();", "counter._count;"], "editLines"=>[5, 6], "editRanges"=>[[1, 2, 1, 13]], "keywordLines"=>["function Counter () {", "              = 0;", "}", "", "Counter.prototype.fire = function () {", "  this._count += 1;", "  return this._count;", "}", "", "let counter = new Counter();", "counter.fire();", "counter.fire();", "counter._count;"], "keywordRanges"=>[[0, 0, 1, 2], [1, 13, 13, 15]], "logicLines"=>["function Counter () {", "  this._count = 0;", "}", "", "Counter.prototype.fire = function () {", "   ", "   ", "}", "", "let counter = new Counter();", "counter.fire();", "counter.fire();", "counter._count;"], "logicRanges"=>[[0, 0, 5, 0], [7, 0, 12, 15]]}, output: "2", prompt: "FIll in the blanks to make the code block produce the specified output.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function theBest() {", "  window.realMVP = 'you';", "}", "", "theBest();", "", "function whoDaBest() {", "  return realMVP;", "}", "", "whoDaBest();"], "editLines"=>[], "editRanges"=>[[1, 2, 1, 16]], "keywordLines"=>["function theBest() {", "                 = 'you';", "}", "", "theBest();", "", "function whoDaBest() {", "  return realMVP;", "}", "", "whoDaBest();"], "keywordRanges"=>[[0, 0, 1, 2], [1, 16, 11, 12]]}, output: "\"you\"", prompt: "Fill in the missing declaration to make the code block produce the specified output.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["window.local; // undefined", "", "function subroutine(){", "  local = 'oops';", "}", "", "subroutine();", "", "window.local;"], "editLines"=>[], "editRanges"=>[[3, 2, 3, 7]], "keywordLines"=>["window.local; // undefined", "", "function subroutine(){", "        = 'oops';", "}", "", "subroutine();", "", "window.local;"], "keywordRanges"=>[[0, 0, 3, 2], [3, 7, 9, 13]]}, output: "\"oops\"", prompt: "Fill in the missing declaration to create a global variable.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["\"use strict\";", "", "window.local; // undefined", "", "function subRoutine(){", "  local = 'oops';", "}", "", "subRoutine();"], "editLines"=>[], "editRanges"=>[[0, 0, 0, 12]], "keywordLines"=>["            ;", "", "window.local; // undefined", "", "function subRoutine(){", "  local = 'oops';", "}", "", "subRoutine();"], "keywordRanges"=>[[0, 12, 9, 13]]}, output: "ReferenceError: 'local' is not defined", prompt: "Fill in the missing keyword to prevent accidental creation of global variables.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function args() {", "  let args = Array.prototype.slice.call(arguments);  ", "  args.forEach((arg)=> console.log(arg));", "}", "", "args(5, 6, 7);"], "editLines"=>[], "editRanges"=>[[1, 13, 1, 39]], "keywordLines"=>["function args() {", "  let args =                           (arguments);  ", "  args.forEach((arg)=> console.log(arg));", "}", "", "args(5, 6, 7);"], "keywordRanges"=>[[0, 0, 1, 13], [1, 39, 6, 14]]}, output: "=> 5 => 6 => 7 => undefined", prompt: "Fill in the missing logic to convert arguments into a proper array.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function times(num, fun) {", "  for (let i = 0; i < num; i++) {", "    fun(); // call is made \"function-style\"", "  }", "}", "", "const cat = {", "  age: 5,", "", "  ageOneYear: function () {", "    this.age += 1;", "  }", "};", "", "times(10, cat.ageOneYear);"], "editLines"=>[], "editRanges"=>[]}, output: "ReferenceError; this.age is not defined", prompt: "What is the output of the following code block?", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function SumCalculator() {", "  this.sum = 0;", "}", "", "SumCalculator.prototype.addNumbers = function (numbers) {", "  const sumCalculator = this;", "", "  numbers.forEach(function (number) {", "    sumCalculator.sum += number;", "  });", "", "  return this.sum;", "};"], "editLines"=>[8], "editRanges"=>[[5, 24, 5, 28]], "keywordLines"=>["function SumCalculator() {", "  this.sum = 0;", "}", "", "SumCalculator.prototype.addNumbers = function (numbers) {", "  const sumCalculator =     ;", "", "  numbers.forEach(function (number) {", "    sumCalculator.sum += number;", "  });", "", "  return this.sum;", "};"], "keywordRanges"=>[[0, 0, 5, 24], [5, 28, 13, 2]], "logicLines"=>["function SumCalculator() {", "  this.sum = 0;", "}", "", "SumCalculator.prototype.addNumbers = function (numbers) {", "  const sumCalculator = this;", "", "  numbers.forEach(function (number) {", "   ", "  });", "", "  return this.sum;", "};"], "logicRanges"=>[[0, 0, 8, 0], [9, 0, 12, 2]]}, output: "", prompt: "Fill in the missing logic to make SumCalculator return the sum of an array of numbers.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function restWay(firstArg, ...otherArgs) {", "  console.log(`The first arg is ${firstArg}!`);", "", "  console.log(`The other args are:`);", "", "  otherArgs.forEach((arg) => {", "    console.log(arg);", "  });", "}", "", "restWay(1, 2, \"banana\");"], "editLines"=>[6, 5, 7], "editRanges"=>[[0, 27, 0, 39]], "keywordLines"=>["function restWay(firstArg,             ) {", "  console.log(`The first arg is ${firstArg}!`);", "", "  console.log(`The other args are:`);", "", "  otherArgs.forEach((arg) => {", "    console.log(arg);", "  });", "}", "", "restWay(1, 2, \"banana\");"], "keywordRanges"=>[[0, 0, 0, 27], [0, 39, 11, 24]], "logicLines"=>["function restWay(firstArg, ...otherArgs) {", "  console.log(`The first arg is ${firstArg}!`);", "", "  console.log(`The other args are:`);", "", "   ", "   ", "   ", "}", "", "restWay(1, 2, \"banana\");"], "logicRanges"=>[[0, 0, 5, 0], [8, 0, 10, 24]]}, output: "=> The first arg is 1! => The other args are: => 2 => banana => undefined", prompt: "Fill in the missing code to leverage the spread operator and produce the specified result.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["const obj = {", "  name: \"Earl Watts\"", "};", "", "// weird function; how is `this` supposed to be set if we don't call", "// `greet` method style?", "function greet(msg) {", "  return `${msg}: ${this.name}`;", "}", "", "greet.apply(obj, [\"Hello\"]);"], "editLines"=>[10], "editRanges"=>[], "logicLines"=>["const obj = {", "  name: \"Earl Watts\"", "};", "", "// weird function; how is `this` supposed to be set if we don't call", "// `greet` method style?", "function greet(msg) {", "  return `${msg}: ${this.name}`;", "}", "", "   "], "logicRanges"=>[[0, 0, 10, 0]]}, output: "\"Hello: Earl Watts\"", prompt: "Invoke greet with the proper \"this\" reference to produce the specified output.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["class Bicycle {", "  constructor(model) {", "    this.model = model;", "  }", "", "  ride() {", "    console.log(", "      `The ${this.model} goes \"whoosh\"!`", "    );    ", "  }", "", "  static parade() {", "    Bicycle.funBicycles.forEach(bike => bike.ride());", "  }", "}", "", "const cruiser = new Bicycle(\"Schwinn\");", "const salsaFargo = new Bicycle(\"Salsa Fargo\");", "", "Bicycle.funBicycles = [cruiser, salsaFargo];", "", "Bicycle.parade();"], "editLines"=>[12], "editRanges"=>[[19, 22, 19, 43], [0, 0, 0, 5]], "keywordLines"=>["      Bicycle {", "  constructor(model) {", "    this.model = model;", "  }", "", "  ride() {", "    console.log(", "      `The ${this.model} goes \"whoosh\"!`", "    );    ", "  }", "", "  static parade() {", "    Bicycle.funBicycles.forEach(bike => bike.ride());", "  }", "}", "", "const cruiser = new Bicycle(\"Schwinn\");", "const salsaFargo = new Bicycle(\"Salsa Fargo\");", "", "Bicycle.funBicycles =                      ;", "", "Bicycle.parade();"], "keywordRanges"=>[[0, 5, 19, 22], [19, 43, 22, 17]], "logicLines"=>["class Bicycle {", "  constructor(model) {", "    this.model = model;", "  }", "", "  ride() {", "    console.log(", "      `The ${this.model} goes \"whoosh\"!`", "    );    ", "  }", "", "  static parade() {", "   ", "  }", "}", "", "const cruiser = new Bicycle(\"Schwinn\");", "const salsaFargo = new Bicycle(\"Salsa Fargo\");", "", "Bicycle.funBicycles = [cruiser, salsaFargo];", "", "Bicycle.parade();"], "logicRanges"=>[[0, 0, 12, 0], [13, 0, 21, 17]]}, output: "=> The Schwinn goes \"whoosh\" ! => The burnt orange Salsa Fargo goes \"whoosh\"!", prompt: "Fill in the missing logic to complete this inheritance example and produce the specified output.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["class Bicycle {", "  constructor(color, model) {", "    this.color = color;", "    this.model = model;", "  }", "", "  action() {", "    return \"rolls along\";", "  }", "}", "", "class RaceBicycle extends Bicycle {", "  constructor(color, model, gears) {", "    super(color, model);", "    this.gears = gears;", "  }", "", "  action() {", "    const oldAction = super.action();", "    return `${oldAction} at a blistering pace!`", "  }", "}"], "editLines"=>[], "editRanges"=>[[11, 18, 11, 25]], "keywordLines"=>["class Bicycle {", "  constructor(color, model) {", "    this.color = color;", "    this.model = model;", "  }", "", "  action() {", "    return \"rolls along\";", "  }", "}", "", "class RaceBicycle         Bicycle {", "  constructor(color, model, gears) {", "    super(color, model);", "    this.gears = gears;", "  }", "", "  action() {", "    const oldAction = super.action();", "    return `${oldAction} at a blistering pace!`", "  }", "}"], "keywordRanges"=>[[0, 0, 11, 18], [11, 25, 22, 1]]}, output: "", prompt: "Fill in the missing keyword to make RaceBicycle inherit from Bicycle using ES6 syntax.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["const cat = {", "  age: 5,", "", "  ageOneYear: function () {", "    this.age += 1;", "  }", "};", "", "cat.ageOneYear();", "cat.age;"], "editLines"=>[4], "editRanges"=>[], "logicLines"=>["const cat = {", "  age: 5,", "", "  ageOneYear: function () {", "   ", "  }", "};", "", "cat.ageOneYear();", "cat.age;"], "logicRanges"=>[[0, 0, 4, 0], [5, 0, 9, 8]]}, output: "6", prompt: "Fill in the missing logic to increment the cat's age.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function args() {", "  arguments.forEach((arg => console.log(arg)));", "}", "", "args();"], "editLines"=>[], "editRanges"=>[]}, output: "TypeError: arguments.forEach is not a function", prompt: "What is the output of the following code block?", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function madLib(verb, pluralNoun1, pluralNoun2, place) {", "  return `I like to ${verb} ${pluralNoun1} with ${pluralNoun2} by the ${place}.`;", "}", "", "const words = [\"eat\", \"socks\", \"rabbits\", \"sea\"];", "", "madLib(...words);"], "editLines"=>[], "editRanges"=>[[6, 7, 6, 15]], "keywordLines"=>["function madLib(verb, pluralNoun1, pluralNoun2, place) {", "  return `I like to ${verb} ${pluralNoun1} with ${pluralNoun2} by the ${place}.`;", "}", "", "const words = [\"eat\", \"socks\", \"rabbits\", \"sea\"];", "", "madLib(        );"], "keywordRanges"=>[[0, 0, 6, 7], [6, 15, 7, 17]]}, output: "\"I like to eat socks with rabbits by the sea.\"", prompt: "Fill in the missing keyword to pass in the contents of words as individual arguments.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["const readline = require('readline');", "", "const reader = readline.createInterface({", "  input: process.stdin,", "  output: process.stdout", "});", "", "function addTwoNumbers(callback) {", "  reader.question(\"Enter #1: \", function (numString1) { // Assume user types 5", "    reader.question(\"Enter #2: \", function (numString2) { // Assume user types 10", "      const num1 = parseInt(numString1);", "      const num2 = parseInt(numString2);", "", "      callback(num1 + num2);", "    });", "  });", "}", "", "addTwoNumbers(function (result) {", "  reader.close();", "  return `The result is: ${result}`;", "});"], "editLines"=>[13], "editRanges"=>[], "logicLines"=>["const readline = require('readline');", "", "const reader = readline.createInterface({", "  input: process.stdin,", "  output: process.stdout", "});", "", "function addTwoNumbers(callback) {", "  reader.question(\"Enter #1: \", function (numString1) { // Assume user types 5", "    reader.question(\"Enter #2: \", function (numString2) { // Assume user types 10", "      const num1 = parseInt(numString1);", "      const num2 = parseInt(numString2);", "", "   ", "    });", "  });", "}", "", "addTwoNumbers(function (result) {", "  reader.close();", "  return `The result is: ${result}`;", "});"], "logicRanges"=>[[0, 0, 13, 0], [14, 0, 21, 3]]}, output: "\"The result is : 15\"", prompt: "Fill in the missing line to produce the specified output, assuming the user types the numbers 5 and 10.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["// silly.js", "module.exports = \"THIS IS MY EXPORTED STRING\";", "", "// main.js", "const silly = require(\"./silly\");", "console.log(silly);"], "editLines"=>[], "editRanges"=>[[1, 0, 1, 14]], "keywordLines"=>["// silly.js", "               = \"THIS IS MY EXPORTED STRING\";", "", "// main.js", "const silly = require(\"./silly\");", "console.log(silly);"], "keywordRanges"=>[[0, 0, 1, 0], [1, 14, 6, 19]]}, output: "THIS IS MY EXPORTED STRING", prompt: "Fill in the missing keywords to make the silly string accessible in \"main.js\"", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function times(num, fun) {", "  for (let i = 0; i < num; i++) {", "    fun();", "  }", "}", "", "const cat = {", "  age: 5,", "", "  ageOneYear: function () {", "    this.age += 1;", "  }", "};", "", "// Function argument is different:", "times(10, function () {", "  cat.ageOneYear();", "});", "", "cat.age;"], "editLines"=>[16], "editRanges"=>[], "logicLines"=>["function times(num, fun) {", "  for (let i = 0; i < num; i++) {", "    fun();", "  }", "}", "", "const cat = {", "  age: 5,", "", "  ageOneYear: function () {", "    this.age += 1;", "  }", "};", "", "// Function argument is different:", "times(10, function () {", "   ", "});", "", "cat.age;"], "logicRanges"=>[[0, 0, 16, 0], [17, 0, 19, 8]]}, output: "15", prompt: "Fill in the missing logic to increment the cat's age to 15.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function logArguments(arg1, arg2) {", "  let result = [];", "", "  for (let i = 0; i < arguments.length; i++) {", "    result.push(arguments[i]);", "  }", "", "  return result;", "}", "", "logArguments(\"boop\", \"candle\", 3);"], "editLines"=>[], "editRanges"=>[[3, 22, 3, 38], [4, 16, 4, 28]], "keywordLines"=>["function logArguments(arg1, arg2) {", "  let result = [];", "", "  for (let i = 0; i <                 ; i++) {", "    result.push(            );", "  }", "", "  return result;", "}", "", "logArguments(\"boop\", \"candle\", 3);"], "keywordRanges"=>[[0, 0, 3, 22], [3, 38, 4, 16], [4, 28, 11, 34]]}, output: "[\"boop\", \"candle\", 3]", prompt: "Fill in the missing keywords to produce the specified output.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function add(x, y = 17) {", "  return x + y;", "}", "", "add(3);"], "editLines"=>[], "editRanges"=>[[0, 18, 0, 22]], "keywordLines"=>["function add(x, y     ) {", "  return x + y;", "}", "", "add(3);"], "keywordRanges"=>[[0, 0, 0, 18], [0, 22, 5, 7]]}, output: "20", prompt: "Fill in the missing code to produce the specified output.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function Kitten(name, age) {", "  this.name = name;", "  this.age = age;", "}", "", "Kitten.prototype.meow = function () {", "  return (this.name + ' says \"meow!\"');", "};", "", "k1 = new Kitten(\"Earl\", 2);", "k1.meow();"], "editLines"=>[6], "editRanges"=>[[9, 5, 9, 26]], "keywordLines"=>["function Kitten(name, age) {", "  this.name = name;", "  this.age = age;", "}", "", "Kitten.prototype.meow = function () {", "  return (this.name + ' says \"meow!\"');", "};", "", "k1 =                      ;", "k1.meow();"], "keywordRanges"=>[[0, 0, 9, 5], [9, 26, 11, 10]], "logicLines"=>["function Kitten(name, age) {", "  this.name = name;", "  this.age = age;", "}", "", "Kitten.prototype.meow = function () {", "   ", "};", "", "k1 = new Kitten(\"Earl\", 2);", "k1.meow();"], "logicRanges"=>[[0, 0, 6, 0], [7, 0, 10, 10]]}, output: "'Earl says \"meow!\"'", prompt: "Fill in the missing code to make k1 an instance of Kitten and produce the specified output.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function Animal (name) {", "  this.name = name;", "}", "", "Animal.prototype.sayHello = function () {", "  console.log(\"Hello, my name is \" + this.name);", "};", "", "function Dog () {}", "", "Dog.prototype = Object.create(Animal.prototype);", "", "Dog.prototype.constructor = Dog; // otherwise instances of Dog will have 'instance.prototype.constructor === Animal'", "", "Dog.prototype.bark = function () {", "  console.log(\"Bark!\");", "};", "", "const liesel = new Dog(\"Liesel\");", "", "liesel.bark();", "liesel.sayHello();"], "editLines"=>[10, 12, 11], "editRanges"=>[[4, 7, 4, 16], [14, 4, 14, 13]], "keywordLines"=>["function Animal (name) {", "  this.name = name;", "}", "", "Animal.         .sayHello = function () {", "  console.log(\"Hello, my name is \" + this.name);", "};", "", "function Dog () {}", "", "Dog.prototype = Object.create(Animal.prototype);", "", "Dog.prototype.constructor = Dog; // otherwise instances of Dog will have 'instance.prototype.constructor === Animal'", "", "Dog.         .bark = function () {", "  console.log(\"Bark!\");", "};", "", "const liesel = new Dog(\"Liesel\");", "", "liesel.bark();", "liesel.sayHello();"], "keywordRanges"=>[[0, 0, 4, 7], [4, 16, 14, 4], [14, 13, 22, 18]], "logicLines"=>["function Animal (name) {", "  this.name = name;", "}", "", "Animal.prototype.sayHello = function () {", "  console.log(\"Hello, my name is \" + this.name);", "};", "", "function Dog () {}", "", "   ", "   ", "   ", "", "Dog.prototype.bark = function () {", "  console.log(\"Bark!\");", "};", "", "const liesel = new Dog(\"Liesel\");", "", "liesel.bark();", "liesel.sayHello();"], "logicRanges"=>[[0, 0, 10, 0], [13, 0, 21, 18]]}, output: "=> Bark! => Hello, my name is Liesel => undefined", prompt: "Fill in the missing code to make Dog inherit from Animal and produce the specified output.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["const obj = {", "  name: \"Earl Watts\"", "};", "", "function greet(msg1, msg2) {", "  return `${msg1} and ${msg2}: ${this.name}`;", "}", "", "greet.call(obj, \"Hello\", \"Goodbye\");"], "editLines"=>[9, 8], "editRanges"=>[], "logicLines"=>["const obj = {", "  name: \"Earl Watts\"", "};", "", "function greet(msg1, msg2) {", "  return `${msg1} and ${msg2}: ${this.name}`;", "}", "", "   ", "   "], "logicRanges"=>[[0, 0, 8, 0]]}, output: "\"Hello and Goodbye: Earl Watts\"", prompt: "Invoke the greet function in the proper manner to produce the specified output.", public: true, author_id: 1, language_id: 1},
  {codeblock: {"allLines"=>["function Animal (name) {", "  this.name = name;", "}", "", "Animal.prototype.sayHello = function () {", "  console.log(\"Hello, my name is \" + this.name);", "};", "", "function Dog (name, coatColor) {", "  Animal.call(this, name);", "", "  this.coatColor = coatColor;", "}", "", "", "function Surrogate () {}", "Surrogate.prototype = Animal.prototype;", "", "// Set `Dog.prototype` to a `Surrogate` instance.", "Dog.prototype = new Surrogate();", "", "const liesel = new Dog(\"Liesel\", \"Black\");", "", "liesel.sayHello();"], "editLines"=>[16, 17, 18, 19], "editRanges"=>[[4, 7, 4, 16]], "keywordLines"=>["function Animal (name) {", "  this.name = name;", "}", "", "Animal.         .sayHello = function () {", "  console.log(\"Hello, my name is \" + this.name);", "};", "", "function Dog (name, coatColor) {", "  Animal.call(this, name);", "", "  this.coatColor = coatColor;", "}", "", "", "function Surrogate () {}", "Surrogate.prototype = Animal.prototype;", "", "// Set `Dog.prototype` to a `Surrogate` instance.", "Dog.prototype = new Surrogate();", "", "const liesel = new Dog(\"Liesel\", \"Black\");", "", "liesel.sayHello();"], "keywordRanges"=>[[0, 0, 4, 7], [4, 16, 24, 18]], "logicLines"=>["function Animal (name) {", "  this.name = name;", "}", "", "Animal.prototype.sayHello = function () {", "  console.log(\"Hello, my name is \" + this.name);", "};", "", "function Dog (name, coatColor) {", "  Animal.call(this, name);", "", "  this.coatColor = coatColor;", "}", "", "", "function Surrogate () {}", "   ", "   ", "   ", "   ", "", "const liesel = new Dog(\"Liesel\", \"Black\");", "", "liesel.sayHello();"], "logicRanges"=>[[0, 0, 16, 0], [20, 0, 23, 18]]}, output: "=> Hello, my name is Liesel", prompt: "Fill in the missing logic to create a surrogate-based inheritance chain and produce the specified output.", public: true, author_id: 1, language_id: 1}
])
BlockConcept.create!([
  {block_id: 3, concept_id: 3},
  {block_id: 4, concept_id: 3},
  {block_id: 5, concept_id: 3},
  {block_id: 5, concept_id: 4},
  {block_id: 6, concept_id: 3},
  {block_id: 6, concept_id: 4},
  {block_id: 7, concept_id: 3},
  {block_id: 7, concept_id: 4},
  {block_id: 8, concept_id: 3},
  {block_id: 8, concept_id: 4},
  {block_id: 9, concept_id: 4},
  {block_id: 10, concept_id: 4},
  {block_id: 11, concept_id: 5},
  {block_id: 12, concept_id: 5},
  {block_id: 12, concept_id: 3},
  {block_id: 12, concept_id: 6},
  {block_id: 13, concept_id: 5},
  {block_id: 13, concept_id: 7},
  {block_id: 14, concept_id: 4},
  {block_id: 15, concept_id: 4},
  {block_id: 16, concept_id: 4},
  {block_id: 16, concept_id: 8},
  {block_id: 18, concept_id: 4},
  {block_id: 18, concept_id: 9},
  {block_id: 19, concept_id: 4},
  {block_id: 19, concept_id: 9},
  {block_id: 20, concept_id: 4},
  {block_id: 20, concept_id: 9},
  {block_id: 20, concept_id: 5},
  {block_id: 21, concept_id: 9},
  {block_id: 21, concept_id: 5},
  {block_id: 22, concept_id: 10},
  {block_id: 23, concept_id: 10},
  {block_id: 24, concept_id: 10},
  {block_id: 25, concept_id: 3},
  {block_id: 25, concept_id: 11},
  {block_id: 26, concept_id: 3},
  {block_id: 26, concept_id: 11},
  {block_id: 26, concept_id: 12},
  {block_id: 27, concept_id: 3},
  {block_id: 27, concept_id: 11},
  {block_id: 27, concept_id: 13},
  {block_id: 28, concept_id: 14},
  {block_id: 28, concept_id: 9},
  {block_id: 29, concept_id: 15},
  {block_id: 29, concept_id: 9},
  {block_id: 30, concept_id: 16},
  {block_id: 30, concept_id: 17},
  {block_id: 31, concept_id: 7},
  {block_id: 31, concept_id: 6},
  {block_id: 31, concept_id: 18},
  {block_id: 32, concept_id: 3},
  {block_id: 32, concept_id: 11},
  {block_id: 32, concept_id: 7},
  {block_id: 32, concept_id: 6},
  {block_id: 33, concept_id: 19},
  {block_id: 33, concept_id: 20},
  {block_id: 33, concept_id: 3},
  {block_id: 34, concept_id: 7},
  {block_id: 34, concept_id: 18},
  {block_id: 35, concept_id: 7},
  {block_id: 35, concept_id: 18},
  {block_id: 36, concept_id: 7},
  {block_id: 36, concept_id: 11}
  ])
