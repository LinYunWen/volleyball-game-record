import { defaultState } from "../defaultState";

export function recordReducer(state = defaultState.record, action) {
    let newState = { ...state };
    switch (action.type) {
        case "MODIFY_SCORE": {
            newState.score[action.payload.side] += action.payload.delta;
            return newState;
        }
        case "TOGGLE_RECORD_DRAWER": {
            newState.drawer.isOpen = action.payload;
            return newState;
        }
        case "ADD_RECORD": {
            newState.drawer.records.push({
                isGet: action.payload.isGet,
                athlete: action.payload.athlete,
                type: action.payload.reason,
            });
            return newState;
        }
        case "SHOW_RECORD_SNACKBAR": {
            newState.snackbar.isOpen = true;
            newState.snackbar.isGet = action.payload.isGet;
            newState.snackbar.message = action.payload.message;
            return newState;
        }
        case "CLOSE_RECORD_SNACKBAR": {
            newState.snackbar.isOpen = false;
            return newState;
        }
        default:
            return state;
    }
}
