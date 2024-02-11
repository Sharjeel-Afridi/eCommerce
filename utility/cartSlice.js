import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        sizes: []
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
            console.log(Array.from(state.items))
        },
        addSize: (state, action) => {
            state.sizes.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const { addItems, addSize, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;