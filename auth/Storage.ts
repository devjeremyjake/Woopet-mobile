import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { FetchProfile } from '../apis/auth/Auth';
import { useCallback } from 'react';
import { UserInfo } from '../types/custom';

export const authKey = 'authToken';

const storeToken = async (token: string) => {
	try {
		await AsyncStorage.setItem(authKey, token);
	} catch (error) {
		console.log('Error storing auth token');
	}
};

const getToken = async () => {
	try {
		const token = await AsyncStorage.getItem(authKey);

		if (token) {
			axios.defaults.headers.common['Authorization'] = `${token}`;
		} else {
			delete axios.defaults.headers.common['Authorization'];
		}
		return token;
	} catch (error) {
		console.log('Error getting the token');
	}
};

const getUser = async (): Promise<UserInfo | undefined> => {
	await getToken();
	const response = await FetchProfile();
	return response;
};

const removeToken = async () => {
	try {
		await AsyncStorage.removeItem('authToken');
	} catch (error) {
		console.log('Error removing the token');
	}
};

export default {
	storeToken,
	getToken,
	removeToken,
	getUser,
};
