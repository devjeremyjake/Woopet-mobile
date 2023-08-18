import { configureStore } from '@reduxjs/toolkit';
import nearYouSliceReducer from './slices/nearYouSlice';
import groomingSuggestSliceReducer from './slices/groomingSuggestSlice';

const store = configureStore({
	reducer: {
		nearYouList: nearYouSliceReducer,
		groomingSuggestion: groomingSuggestSliceReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
