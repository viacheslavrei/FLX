var data = [{
  "_id": "5b5e3168c6bf40f2c1235cd6",
  "index": 0,
  "age": 39,
  "eyeColor": "green",
  "name": "Stein",
  "favoriteFruit": "apple"
}, {
  "_id": "5b5e3168e328c0d72e4f27d8",
  "index": 1,
  "age": 38,
  "eyeColor": "blue",
  "name": "Cortez",
  "favoriteFruit": "strawberry"
}, {
  "_id": "5b5e3168cc79132b631c666a",
  "index": 2,
  "age": 2,
  "eyeColor": "blue",
  "name": "Suzette",
  "favoriteFruit": "apple"
}, {
  "_id": "5b5e31682093adcc6cd0dde5",
  "index": 3,
  "age": 19,
  "eyeColor": "green",
  "name": "George",
  "favoriteFruit": "banana"
}]

function findTypes() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args[i] = (typeof(arguments[i]));
  }
  return args;
}
findTypes(null, 5, 'hello')

function executeforEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}
executeforEach([1, 2, 3], function(el) {
  console.log(el)
})

function mapArray(arr, func) {
  var transformed = [];
  executeforEach(arr, function(el) {
    transformed.push(func(el))
  });
  return transformed;
}
mapArray([2, 5, 8], function(el) {
  return el + 3
})

function filterArray(arr, func) {
  var transformed = [];
  executeforEach(arr, function(el) {
    if (func(el)) {
      transformed.push(el);
    }
  });
  return transformed;
}
filterArray([2, 5, 8], function(el) {
  return el > 3
})

function getAmountOfAdultPeople(insertData) {
  return filterArray(insertData, function(el) {
    return el.age > 18
  }).length;
}
getAmountOfAdultPeople(data);

function getGreenAdultBananaLovers(insertData) {
  var filterPeople = filterArray(insertData, function(el) {
    return el.age > 18 && el.favoriteFruit === "banana" && el.eyeColor === "green"
  });
  return mapArray(filterPeople, function(el) {
   return el.name
  });
}
getGreenAdultBananaLovers(data);

function keys(arr) {
  var ids = Object.keys(arr);
  return ids;
}
keys({ keyOne: 1, keyTwo: 2, keyThree: 3 })

function values(arr) {
  var ids = Object.values(arr);
  return ids;
}
values({ keyOne: 1, keyTwo: 2, keyThree: 3})

function showFormattedDate(date) {
  var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return 'Date: ' + date.getDate() + ' of ' + month[date.getMonth()] + ', ' + date.getFullYear();
}
showFormattedDate(new Date('2019-01-27T01:10:00'))

function isEvenYear(date) {
  var year = date.getFullYear();
  return (year) % 2 === 0;
}
isEvenYear(new Date('2019-01-27T01:10:00'))

function isEvenMonth(date) {
  var month = date.getMonth();
  return (month + 1) % 2 === 0;
}
isEvenMonth(new Date('2019-02-27T01:10:00'))
