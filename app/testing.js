// const strictEquals = require("./index");
// describe("Given a sum function", ()=> {
//   describe("When it receives --- and ---",()=>{
//     test("Then it should returns 5", ()=>{
//       const valueA = 1;
//       const ValueB = 1;
//       const resultTotal = --;

//       //ACT
//       const total = 
//     })
//   })
// })

import getEquality from "./juannitintest.js";

describe("Given a strictEquals function, ()=> {
  describe("When it receives as values, 1 and 1",()=>{
    test("Then it should returns true", ()=>{
      const valueA = 1;
      const ValueB = 1;
      const equality = getEquality(valueA, ValueB);
      const expectedBolean = true;

      expect(equality).toBe(expectedBoolean);
    });
  });
