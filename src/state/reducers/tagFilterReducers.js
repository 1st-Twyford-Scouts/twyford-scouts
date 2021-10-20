import { TAGFILTER_CHANGED } from "../actions/actionTypes"
import { createReducer } from '@reduxjs/toolkit'

const tagFilterChangedReducer = createReducer({}, {
    TAGFILTER_CHANGED: (state, action) => {
        state.tags.filter = action.value
    }
})

export default function tagFilterReducers (state, action){
    if (!state || !action || !action.type){
        return state
    }

    switch (action.type){
        case TAGFILTER_CHANGED:
            return tagFilterChangedReducer(state, action)

        default:
            return state
    }
}