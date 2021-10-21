import { createStore } from "redux"
import rootReducer from "./reducers/index"

const store = createStore(rootReducer, undefined)

export default store
