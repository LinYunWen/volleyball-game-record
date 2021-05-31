import { defaultState } from "../defaultState";

export function recordReducer(state = defaultState.record, action) {
    switch (action.type) {
        default:
            return state;
    }
}
