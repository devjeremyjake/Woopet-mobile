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
			`${BASEURL}/api/users/profile`,
			validationParams
		);
		console.log(response);
		return response.data.user;
	} catch (error) {
		console.log('Error Fetch', error);
	}
};

export const SignInUser = async (item: any): Promise<AxiosResponse<any>> => {
	try {
		const response = await axios.post(
			`${BASEURL}/api/auth/login`,
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
			`${BASEURL}/api/auth/register`,
			item,
			validationParams
		);
		return response;
	} catch (error) {
		console.log('Error Fetch', error);
		throw error;
	}
};

export const RequestOtpApi = async (item: any): Promise<AxiosResponse<any>> => {
	try {
		const response = await axios.post(
			`${BASEURL}/api/auth/forgot-password`,
			item,
			validationParams
		);
		return response;
	} catch (error) {
		console.log('Error Fetch', error);
		throw error;
	}
};
export const VerifyOtpApi = async (item: any): Promise<AxiosResponse<any>> => {
	try {
		const response = await axios.post(
			`${BASEURL}/api/auth/verifyOtp`,
			item,
			validationParams
		);
		return response;
	} catch (error) {
		console.log('Error Fetch', error);
		throw error;
	}
};

export const VerifyNewUserApi = async (
	item: any
): Promise<AxiosResponse<any>> => {
	try {
		const response = await axios.post(
			`${BASEURL}/api/auth/user/verify`,
			item,
			validationParams
		);
		return response;
	} catch (error) {
		console.log('Error Fetch', error);
		throw error;
	}
};

export const SubmitNewPasswordApi = async (
	item: any
): Promise<AxiosResponse<any>> => {
	try {
		const response = await axios.post(
			`${BASEURL}/api/auth/reset-password`,
			item,
			validationParams
		);
		return response;
	} catch (error) {
		console.log('Error Fetch', error);
		throw error;
	}
};
