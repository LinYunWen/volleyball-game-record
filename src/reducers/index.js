import { combineReducers } from "redux";
import { commonReducer } from "./common";
import { settingReducer } from "./setting";
import { recordReducer } from "./record";

export const rootReducer = combineReducers({
    common: commonReducer,
    setting: settingReducer,
    record: recordReducer,
});
