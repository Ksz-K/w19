"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//Exercise 1
var partA = "Hello ";
var partB = "World";
Date.now() % 2 == 0 ? console.log("" + partA + partB) : console.log(partB + " -- " + partA);

//Exercise 2 - trochę po polsku
var a = prompt("Podaj mnożną");
var b = prompt("Podaj mnożnik");
var multiply = function multiply(mnozna) {
  var mnoznik = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  console.log(mnozna * mnoznik);
};
b !== "" && !isNaN(b) ? multiply(a, b) : multiply(a);

//Exercise 3
var arr = prompt("Wpisz liczby oddzielając je przecinkami.").split(",");
arr = arr.map(Number);
var average = function average() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  var sum = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var number = _step.value;
      sum += number;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log(sum / numbers.length);
};
average.apply(undefined, arr);
//average(arr); //to nie działa
//average(1, 2, 3, 4, 5, 6, 7); //to działa

//Exercise 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);

//Exercise 5
strangeData = [1, 4, "Iwona", false, "Nowak"];

var _strangeData = strangeData,
    _strangeData2 = _slicedToArray(_strangeData, 5),
    FirstName = _strangeData2[2],
    Lastname = _strangeData2[4];

console.log(FirstName + " " + Lastname);
