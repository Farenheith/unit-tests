import * as getDoubleLib from 'src/get-double';
import { main } from 'src/main';

describe(main.name, () => {
  beforeEach(() => {
    // Arrange
    jest.spyOn(console, 'log').mockReturnValue(undefined);
    jest.spyOn(getDoubleLib, 'getDouble').mockReturnValue(99);
  });

  it('should print the getDouble result of 11', () => {
    // Arrange

    // Act
    const result = main();

    // Assert
    expect(getDoubleLib.getDouble).toHaveCallsLike([11]);
    expect(console.log).toHaveCallsLike([99]);
    expect(result).toBeUndefined();
  });

  it('should print the getDouble result of the received parameter when one is informed', () => {
    // Arrange
    const param = 29;

    // Act
    const result = main(param);

    // Assert
    expect(getDoubleLib.getDouble).toHaveCallsLike([param]);
    expect(console.log).toHaveCallsLike([99]);
    expect(result).toBeUndefined();
  });
});
