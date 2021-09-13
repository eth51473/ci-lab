const {getGreeting, getSum} = require('./project');


test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('Can get a sum', ()=>{
  expect(getSum(3,8)).toBe(11)
})