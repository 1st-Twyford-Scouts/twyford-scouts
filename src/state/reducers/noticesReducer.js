import { createAction, createReducer } from '@reduxjs/toolkit'

const noticesInitialState = {
    selected: "*",
    list: []
}

const noticesReducer = createReducer(noticesInitialState, (builder)=>
{
    builder
        .addCase(createAction("notices/select"), (state, action) => { state.selected = action.value } )
});

export default noticesReducer
