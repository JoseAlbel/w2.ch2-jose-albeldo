/*
Escribe una función llamada strictEquals(valueA, valueB) que devuelva el mismo valor que valueA === valueB. Tu implementación no puede usar los operadores === ni !==, tampoco == ni !=.

Testea la función con este set de pruebas:

Dada la función strictEquals
Cuando se comparan <valueA> y <valueB>
Entonces el resultado será <Result>

| valueA  | valueB | RESULT |                   |
| ------- |------- |----------------- |
| 1       | 1      | true   |                   |
| NaN     | NaN    | false  | // Rule Exception |
| 0       | -0     | true   | // Rule Exception |
| -0      | 0      | true   | // Rule Exception |
| 1       | "1"    | false  |                   |
| true    | false  | false  |                   |
| false   | false  | true   |                   |
| "Water" | "oil"  | false  |
*/

// const strictEquals = (valueA, valueB) => {
//   if(Object.is( valueA,valueB)) {
//     return true;
//   } else {
//     return false;
//   }
// };

//   strictEquals();


// module.exports = strictEquals;
const strictEquals = (valueA, valueB) => {
  if (Object.is(valueA,))
}
