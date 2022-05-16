/* eslint-disable @typescript-eslint/no-magic-numbers */
const map = new Map([
  ['a', 1],
  ['x', 2],
  ['s', 3],
]);

export function getValue(code: string): number {
  return map.get(code) || NaN;
}
