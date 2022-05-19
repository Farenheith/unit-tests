import { getValue } from './get-value';
/* eslint-disable @typescript-eslint/no-magic-numbers */
import { getDouble } from './get-double';

export function main(param?: string) {
	console.log(getDouble(param !== undefined ? Number(param) : 11));
  if (param !== undefined) {
    console.log(getValue(param));
  }
}
