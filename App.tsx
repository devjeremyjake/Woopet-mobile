import { StatusBar } from 'expo-status-bar';
import LoadedAssets from './components/LoadedAssets';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Entry from './Entry';
import NavigationTheme from './navigations/NavigationTheme';

const fonts = {
	CerealBook: require('./assets/fonts/AirbnbCerealBook.ttf'),
	CerealMedium: require('./assets/fonts/AirbnbCerealMedium.ttf'),
	CerealLight: require('./assets/fonts/AirbnbCerealLight.ttf'),
	AirbnbCerealBold: require('./assets/fonts/AirbnbCerealBold.ttf'),
};
const assets: number[] = [require('./assets/ONBOARDINGPICTURE.png')];

export default function App() {
	return (
		<LoadedAssets {...{ assets, fonts }}>
			<SafeAreaProvider>
				<NavigationContainer theme={NavigationTheme}>
					<Entry />
					<StatusBar style="auto" />
				</NavigationContainer>
			</SafeAreaProvider>
		</LoadedAssets>
	);
}
