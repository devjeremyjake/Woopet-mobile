import axios, { AxiosResponse } from 'axios';
import { BASEURL } from '../../helpers/BASEURL';

const validationParams = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const FetchProfile = async () => {
	try {
		const response = await axios.get(
			`${BASEURL}/api/profile`,
			validationParams
		);
		return response.data.user;
	} catch (error) {
		console.log('Error Fetch', error);
	}
};

export const SignInUser = async (item: any): Promise<AxiosResponse<any>> => {
	try {
		const response = await axios.post(
			`${BASEURL}/api/auth/signin`,
			item,
			validationParams
		);
		return response;
	} catch (error) {
		console.log('Error Fetch', error);
		throw error;
	}
};
export const SignUpUser = async (item: any): Promise<AxiosResponse<any>> => {
	try {
		const response = await axios.post(
			`${BASEURL}/api/auth/signup`,
			item,
			validationParams
		);
		return response;
	} catch (error) {
		console.log('Error Fetch', error);
		throw error;
	}
};
export const VerifyUser = async (item: any): Promise<AxiosResponse<any>> => {
	try {
		const response = await axios.post(
			`${BASEURL}/api/auth/verifyUser`,
			item,
			validationParams
		);
		return response;
	} catch (error) {
		console.log('Error Fetch', error);
		throw error;
	}
};
