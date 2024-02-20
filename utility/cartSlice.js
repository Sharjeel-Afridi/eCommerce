import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        quantity: [],
        ids: []
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
            state.ids.push(action.payload.id);
            state.quantity.push(1);
            console.log(Array.from(state.items))
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const { addItems, addSize, addQuantity, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;