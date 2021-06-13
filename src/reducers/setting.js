import { defaultState } from "../defaultState";

export function settingReducer(state = defaultState.setting, action) {
    let newState = { ...state };
    switch (action.type) {
        case "SET_CUP": {
            newState.cup = action.payload;
            return newState;
        }
        case "SET_COMPETITOR": {
            newState.competitor = action.payload;
            return newState;
        }
        case "SET_COMMENT": {
            newState.comment = action.payload;
            return newState;
        }
        default:
            return state;
    }
}
