import { configureStore } from '@reduxjs/toolkit';

import { appSlice } from '../components/App/appSlice';

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export default store;
