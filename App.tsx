import './wdyr';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Entry from './Entry';
import NavigationTheme from './navigations/NavigationTheme';
import AuthProviderContext, { AuthContextUser } from './context/UserContext';

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<NavigationContainer theme={NavigationTheme}>
					<AuthProviderContext>
						<Entry />
					</AuthProviderContext>
					<StatusBar style="auto" />
				</NavigationContainer>
			</SafeAreaProvider>
		</>
	);
}
