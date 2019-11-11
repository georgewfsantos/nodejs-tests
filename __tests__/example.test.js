function soma(a, b) {
  return a + b;
}

test('if I call soma function passing 4 and 5 as parameters, it should return 9', () => {
  const result = soma(4, 5);
  expect(result).toBe(9);
});
