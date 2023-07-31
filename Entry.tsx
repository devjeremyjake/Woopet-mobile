import { View, Text, SafeAreaView } from 'react-native';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import OnboardingNavigator from './navigations/OnboardingNavigator';
import { AuthContextUser } from './context/UserContext';
import authStorage from './auth/Storage';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import MainNavigator from './navigations/MainNavigator';

SplashScreen.preventAutoHideAsync();

const fonts = {
	CerealBook: require('./assets/fonts/AirbnbCerealBook.ttf'),
	CerealMedium: require('./assets/fonts/AirbnbCerealMedium.ttf'),
	CerealLight: require('./assets/fonts/AirbnbCerealLight.ttf'),
	AirbnbCerealBold: require('./assets/fonts/AirbnbCerealBold.ttf'),
};
const assets: number[] = [require('./assets/ONBOARDINGPICTURE.png')];

export type FontSource = Parameters<typeof Font.loadAsync>[0];
const usePromiseAll = (promises: Promise<any>[], callback: () => void) => {
	useEffect(() => {
		Promise.all(promises)
			.then(() => callback())
			.catch((error) => {
				// Handle errors if needed
				console.error(error);
			});
	}, []);
};

const useLoadAssets = (assets: number[], fonts: FontSource): boolean => {
	const [ready, setReady] = useState(false);
	usePromiseAll(
		[Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))],
		() => setReady(true)
	);
	return ready;
};

const Entry = () => {
	const { user, setUser } = useContext(AuthContextUser);

	const ready = useLoadAssets(assets || [], fonts || {});

	const fetchUserToken = useCallback(() => {
		const token = authStorage.getToken();
		return token;
	}, []);

	const restoreUser = useCallback(async () => {
		try {
			const userToken = await authStorage.getUser();
			if (userToken) {
				console.log('reached here first', userToken);
				setUser(userToken);
				SplashScreen.hideAsync();
			} else {
				console.log('reached here instead');
				SplashScreen.hideAsync();
			}
		} catch (error) {
			console.log('Error:', error);
			return false;
		}
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (ready) {
			restoreUser();
		}
	}, [ready, fetchUserToken, restoreUser]);

	if (!ready) {
		return null;
	}

	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			{user ? <MainNavigator /> : <OnboardingNavigator />}
		</View>
	);
};

export default Entry;
