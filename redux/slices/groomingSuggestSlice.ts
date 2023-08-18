import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASEURL } from '../../helpers/BASEURL';

interface SuggestionState {
	isLoading: boolean;
}

const initialState = {
	isLoading: false,
} as SuggestionState;

export const groomingServiceFetch = createAsyncThunk(
	'grommingServiceFetch',
	async (value: any) => {
		try {
			const response = await axios.get(
				`${BASEURL}/api/users/services/suggested?page=${value.page}&page_size=${value.pageSize}&category=Dog-Walking`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			console.log('Grooming Fetch', response.data);
			return response.data;
		} catch (error) {
			console.log('Error near you slice', error);
		}
	}
);

const groomingSuggestSlice = createSlice({
	name: 'Grooming',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(groomingServiceFetch.pending, (state: SuggestionState) => {
			state.isLoading = true;
		});
		builder.addCase(
			groomingServiceFetch.fulfilled,
			(state: SuggestionState) => {
				state.isLoading = false;
			}
		);
		builder.addCase(groomingServiceFetch.rejected, (state: SuggestionState) => {
			state.isLoading = false;
		});
	},
});

export default groomingSuggestSlice.reducer;
