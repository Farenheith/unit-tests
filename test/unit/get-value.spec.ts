import { getValue } from 'src/get-value';

describe(getValue.name, () => {
  it('should return 1 when value is "a"', () => {
    const result = getValue('a');

    expect(result).toBe(1);
  });

  it('should return 2 when value is "x"', () => {
    const result = getValue('x');

    expect(result).toBe(2);
  });

  it('should return 3 when value is "s"', () => {
    const result = getValue('s');

    expect(result).toBe(3);
  });

  it('should return NaN when value is invalid', () => {
    const result = getValue('z');

    expect(result).toBe(NaN);
  });
});
