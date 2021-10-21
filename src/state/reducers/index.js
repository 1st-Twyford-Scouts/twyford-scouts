import { combineReducers } from "redux";
import tagsReducer from "./tagsReducer";
import noticesReducer from "./noticesReducer";

const rootReducer = combineReducers({
    tags: tagsReducer,
    notices: noticesReducer
})

export default rootReducer;
