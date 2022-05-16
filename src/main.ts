/* eslint-disable @typescript-eslint/no-magic-numbers */
import { getDouble } from './get-double';

export function main(param?: number) {
	console.log(getDouble(param !== undefined ? param : 11));
}
