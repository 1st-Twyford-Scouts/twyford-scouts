import { createAction, createReducer } from '@reduxjs/toolkit'

const tagsInitialState = {
    selected: "*",
    list: []
}

const tagsReducer = createReducer(tagsInitialState, (builder)=>
{
    builder
        .addCase(createAction("tags/select"), (state, action) => { state.selected = action.value } )
        .addCase(createAction("tags/populate"), (state, action) => { state.list = action.tags })
});

export default tagsReducer
