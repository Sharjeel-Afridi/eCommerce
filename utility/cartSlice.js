import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        ids: []
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
            state.ids.push(action.payload.id);
            console.log(Array.from(state.items))
        },
        removeItem: (state, action) => {
            let index = state.items.findIndex(obj => obj["id"] === action.payload);
            state.items.splice(index, 1);
            state.ids.splice(index, 1);
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const { addItems, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;