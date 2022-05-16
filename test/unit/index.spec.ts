import * as mainLib from 'src/main';

describe.skip('index.ts', () => {
	beforeEach(() => {
		jest.spyOn(mainLib, 'main');
	});

	afterEach(() => {
		delete require.cache[require.resolve('../../src/index')];
	});

	it('should call bootstrap', () => {
		require('../../src/index');

		expect(mainLib.main).toHaveCallsLike([]);
	});
});
