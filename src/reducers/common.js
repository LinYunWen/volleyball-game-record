import { defaultState } from "../defaultState";

export function commonReducer(state = defaultState.common, action) {
    let newState = { ...state };
    switch (action.type) {

        case "CHANGE_SELECTED_ATHLETE": {
            newState.athlete.selected = action.payload;
            return newState;
        }
        case "SET_DATE_AND_TIME": {
            newState.date = action.payload.date;
            newState.time = action.payload.time;
            return newState;
        }
        case "SET_ATHLETES": {
            let { normals, liberos } = action.payload;
            newState.athlete.position.normals = normals;
            newState.athlete.position.liberos = liberos;
            newState.athlete.nums = normals.concat(liberos);
            return newState;
        }
        default:
            return state;
    }
}
