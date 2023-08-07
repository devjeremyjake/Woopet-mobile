import { SafeAreaView } from 'react-native';
import React, { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './Style';

interface SafeAreaProp {
	children: React.ReactElement;
}

const SafeAreaComponent: FC<SafeAreaProp> = ({ children }) => {
	const insets = useSafeAreaInsets();
	return (
		<SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
			{children}
		</SafeAreaView>
	);
};

export default SafeAreaComponent;
