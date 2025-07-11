const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    expect(sum(14, 9)).toBe(23);
});


test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBeCloseTo(expected);
});


test("One dollar should be (1 / 1.07) * 156.5 yenes", () => {
    const yenes = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yenes).toBeCloseTo(expected);
});


test("156.5 yen should be (1 / 156.5) * 0.87 pounds", () => {
    const pounds = fromYenToPound(156.5);
    const expected = (1 / 156.5) * 0.87 * 156.5;
    expect(pounds).toBeCloseTo(0.87);
});