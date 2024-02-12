import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        sizes: [],
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
        addSize: (state, action) => {
            state.sizes.push(action.payload);
        },
        addQuantity: (state, action) => {
            let { index } = action.payload;
            console.log("quantity added")
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