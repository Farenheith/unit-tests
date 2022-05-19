/* eslint-disable @typescript-eslint/no-magic-numbers */
const map = new Map([
  ['a', 1],
  ['x', 2],
  ['s', 3],
]);

async function *test(iterable: Iterable<string>) {
  for (const str of iterable) {
    yield await new Promise((resolve) => resolve(console.log(str)));
  }
}

export async function getValue(code: string): Promise<number> {
  for await (const item of test(code)) {
    console.log(item);
  }
  return map.get(code) || NaN;
}
