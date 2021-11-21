import { decrement, increment } from './actions';
import counterReducer from './reducers/index';
import { CounterState } from './type';

describe('counter reducer', () => {
  const initialState: CounterState = {
    counter: 3,
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
		counter: 0,
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.counter).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.counter).toEqual(2);
  });
});
