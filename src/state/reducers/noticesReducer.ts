// @ts-check

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const noticesInitialState = {
    selected: "*",
    state: "notloaded",
    list: []
}

const noticesSlice = createSlice({
    name: 'notices',
    initialState: noticesInitialState,
    reducers: {
        select: {
            reducer: (state, action: PayloadAction<string>) => {
                state.selected = action.payload
            },
            prepare: (id: string) => {
                return { payload: id }
            }
        }
    }
})

export const { select } = noticesSlice.actions

export default noticesSlice.reducer
