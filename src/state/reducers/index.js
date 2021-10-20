import tagFilterReducers from "./tagFilterReducers";

export default function rootReducer(state, action) {
    return tagFilterReducers(state, action)
}
