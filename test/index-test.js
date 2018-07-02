var a, b
adds(1+80); 
subtract(60-40);
multiply(2*3.4);
divide(5.0/2.5);

var number = 5;
number++;
number//;
number--;
number;

parseInt('2' , 10);
parseInt('nonsense!' , 10);
parseFloat('80.123999');

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

('add(a, b) adds two numbers and returns the result', function() {
  expect(add(a, b)).toEqual(a + b)
})

('subtract(a, b) subtracts b from a and returns the result', function() {
  expect(subtract(a, b)).toEqual(a - b)
})

('multiply(a, b) multiplies two numbers and returns the result', function() {
  expect(multiply(a, b)).toEqual(a * b)
})

('divide(a, b) divides a by b and returns the result', function() {
  expect(divide(a, b)).toEqual(a / b)
})

('inc(n) increments n and returns the result', function() {
  expect(inc(a)).toEqual(a + 1)
})

('dec(n) decrements n and returns the result', function() {
  expect(dec(a)).toEqual(a - 1)
})

('makeInt(n)', function() {
('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0);
  })

('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})

('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})
