import { createSlice } from '@reduxjs/toolkit';

export const { reducer, actions: cartActions } = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        setQuantity: (state, { payload: { dishId, quantity } }) => {
            state[dishId] = quantity;
        }
    }
})

export default reducer;