export interface CounterState {
	counter: number;
}

export type IncrementAction = { type: 'INCREMENT' };
export type DecrementAction = { type: 'DECREMENT' };
