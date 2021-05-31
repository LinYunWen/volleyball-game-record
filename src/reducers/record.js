import { defaultState } from "../defaultState";

export function recordReducer(state = defaultState.record, action) {
    let newState = { ...state };
    switch (action.type) {
        case "CHANGE_SELECTED_ATHLETE": {
            console.log(action)
            newState.athlete.selected = action.payload;
            return newState;
        }
        default:
            return state;
    }
}
