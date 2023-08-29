let estudiantes = [
  { name: "Daniela", age: 25 },
  { name: "Andrea", age: 23 },
  { name: "José", age: 27 },
  { name: "Greg", age: 23 },
  { name: "Angel", age: 23 },
  { name: "Gabriel", age: 23 },
  { name: "Esteban", age: 28 },
  { name: "Daniel", age: 29 },
];

var valueArr = estudiantes.map(function (item) {
  return item.age;
});
var isDuplicate = valueArr.some(function (item, age) {
  return valueArr.indexOf(item) != age;
});
console.log(isDuplicate);
