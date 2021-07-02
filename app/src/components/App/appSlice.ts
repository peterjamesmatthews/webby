import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    now: new Date(),
  },
  reducers: {
    refreshNow: (state) => {
      state.now = new Date();
    },
  },
});

// Action creators are generated for each case reducer function
export const { refreshNow } = appSlice.actions;

export default appSlice.reducer;
