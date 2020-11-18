let unit = require('../src/sum')
test('1+1=2',()=>{
  expect(unit.sum(1,1)).toBe(2)
})
test('1+2=3',()=>{
  expect(unit.sum(1,2)).toBe(3)
})