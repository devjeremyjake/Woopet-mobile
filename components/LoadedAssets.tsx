import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export type FontSource = Parameters<typeof Font.loadAsync>[0];
const usePromiseAll = (promises: Promise<void | void[]>[], cb: () => void) =>
	useEffect(() => {
		(async () => {
			await Promise.all(promises);
			cb();
		})();
	});

const useLoadAssets = (assets: number[], fonts: FontSource): boolean => {
	const [ready, setReady] = useState(false);
	usePromiseAll(
		[Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))],
		() => setReady(true)
	);
	return ready;
};

interface LoadAssetsProps {
	fonts?: FontSource;
	assets?: number[];
	children: ReactElement | ReactElement[];
}

export default ({ assets, fonts, children }: LoadAssetsProps) => {
	const ready = useLoadAssets(assets || [], fonts || {});

	const onLayoutRootView = useCallback(async () => {
		if (ready) {
			await SplashScreen.hideAsync();
		}
	}, [ready]);

	if (!ready) {
		return null;
	}
	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			{children}
		</View>
	);
};
