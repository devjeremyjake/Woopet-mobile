import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import OnboardingNavigator from './navigations/OnboardingNavigator';

const Entry = () => {
	return (
		<View style={{ flex: 1 }}>
			<OnboardingNavigator />
		</View>
	);
};

export default Entry;
