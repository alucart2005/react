import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const counterSlice = createSlice({
		name: 'counter',
    initialState: 0,
    reducers: {
        
    }
})

export const {  } = counterSlice.actions;

export default counterSlice.reducer;