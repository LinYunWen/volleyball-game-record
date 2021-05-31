import { defaultState } from "../defaultState";

export function recordReducer(state = defaultState.record, action) {
    let newState = { ...state };
    switch (action.type) {
        case "CHANGE_SELECTED_ATHLETE": {
            newState.athlete.selected = action.payload;
            return newState;
        }
        case "TOGGLE_RECORD_DRAWER": {
            newState.drawer.isOpen = action.payload;
            return newState;
        }
        default:
            return state;
    }
}
