import * as actions from '../HomeActions';

describe('HomeActions', () => {
  const value = 'someValue';

  test('Should dispatch someValue', () => {
    setHeader().
    expect(wrapper.find('CustomInput').prop('value')).toBe(headerProp);
    expect(wrapper.find('CustomInput').prop('onChange')).toBeTruthy();
    // expect(wrapper.find('CustomInput').prop('onChange'))
    //   .toBe(expect.any(Function));
  });
});
