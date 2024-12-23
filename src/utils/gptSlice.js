import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        gptToggle(state) {
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

export const { gptToggle } = gptSlice.actions;
export default gptSlice.reducer;