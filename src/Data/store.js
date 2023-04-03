import { configureStore, createSlice } from '@reduxjs/toolkit'
import ListItem from './ListItem'

let item = createSlice({
    name: 'item',
    initialState: ListItem,
    reducers: {
        addItem(state) {
            return [...ListItem, state]
        }
    }
})

export let { addItem } = item.actions

export default configureStore({
    reducer: {
        item: item.reducer
    }
}) 