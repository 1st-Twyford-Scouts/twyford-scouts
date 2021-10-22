// @ts-check

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Tag {
    id: string
    name: string
}

const tagsInitialState = {
    selected: "*",
    list: []
}

const tagsSlice = createSlice({
    name: 'tags',
    initialState: tagsInitialState,
    reducers: {
        select: {
            reducer: (state, action: PayloadAction<string>) => {
                state.selected = action.payload
            },
            prepare: (id: string) => {
                return { payload: id }
            },
        },
        populate: {
            reducer: (state, action: PayloadAction<Array<Tag>>) => {
                state.list = action.payload
            },
            prepare: (tags: Array<Tag>) => {
                return { payload: tags }
            }
        }
    }
})

export const { select, populate } = tagsSlice.actions

export default tagsSlice.reducer
