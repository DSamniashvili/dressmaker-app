import { RootState } from "../../../app/store/store";

export const selectCount = (state: RootState) => state.counter;