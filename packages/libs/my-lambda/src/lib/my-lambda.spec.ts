import { myLambda } from './my-lambda';

describe('myLambda', () => {
  it('should work', () => {
    expect(myLambda()).toEqual('my-lambda');
  });
});
