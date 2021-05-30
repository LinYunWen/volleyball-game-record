import { combineReducers } from "redux";
import { recordReducer } from "./record";

export const rootReducer = combineReducers({
    record: recordReducer
});
