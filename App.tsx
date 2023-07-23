import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoadedAssets from './components/LoadedAssets';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Entry from './Entry';

const fonts = {
	CerealBook: require('./assets/fonts/AirbnbCerealBook.ttf'),
	CerealMedium: require('./assets/fonts/AirbnbCerealMedium.ttf'),
	CerealLight: require('./assets/fonts/AirbnbCerealLight.ttf'),
};
const assets: any[] = [require('./assets/ONBOARDINGPICTURE.png')];

export default function App() {
	return (
		<LoadedAssets {...{ assets, fonts }}>
			<SafeAreaProvider>
				<Entry />
				<StatusBar style="auto" />
			</SafeAreaProvider>
		</LoadedAssets>
	);
}
