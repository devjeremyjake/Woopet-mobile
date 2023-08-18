import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASEURL } from '../../helpers/BASEURL';

interface NeatYouState {
	isLoading: boolean;
}

const initialState = {
	isLoading: false,
} as NeatYouState;

export const nearYouFetch = createAsyncThunk(
	'neatYouFetch',
	async (value: any) => {
		try {
			const response = await axios.get(
				`${BASEURL}/api/users/services/nearest?lat=${value.lat}&lng=${value.lng}&page=${value.page}&page_size=${value.pageSize}&distance=${value.distance}`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			console.log('Near you', response.data);
			return response.data;
		} catch (error) {
			console.log('Error near you slice', error);
		}
	}
);

const nearYouSlice = createSlice({
	name: 'nearYou',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(nearYouFetch.pending, (state: NeatYouState) => {
			state.isLoading = true;
		});
		builder.addCase(nearYouFetch.fulfilled, (state: NeatYouState) => {
			state.isLoading = false;
		});
		builder.addCase(nearYouFetch.rejected, (state: NeatYouState) => {
			state.isLoading = false;
		});
	},
});

export default nearYouSlice.reducer;
