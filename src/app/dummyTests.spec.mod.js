describe('<Dummy tests/>', () => {
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
  describe('Mock Functions', () => {
    let mockFn;
    beforeEach(() => {
      mockFn = jest.fn().mockName('mockFn');
    });

    test('mock fn', () => {
      expect(mockFn.mock.calls.length).toBe(0);
      // expect(mockFn.mock.instances.length).toBe(2);
      // expect(mockFn.mock.instances[0].name).toEqual('test');
      // The mock function was called at least once
      expect(mockFn).not.toBeCalled();

      // The mock function was called at least once with the specified args
      expect(mockFn).not.toBeCalledWith(1, 2);

      // The last call to the mock function was called with the specified args
      expect(mockFn).not.lastCalledWith(1, 2);

      // All calls and the name of the mock is written as a snapshot
      // expect(mockFn).toMatchSnapshot();
    });
    test('', () => {
      // To update state and get rendered children
      // wrapper.update();
      // usernameInput = wrapper.find('form')
      //   .find('CustomInput[name="username"]');

      // expect(usernameInput.prop('value')).toBe(testValue);
    });
  });
});
