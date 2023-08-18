// import './wdyr';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Entry from './Entry';
import store from './redux/store';
import { Provider } from 'react-redux';
import NavigationTheme from './navigations/NavigationTheme';
import AuthProviderContext, { AuthContextUser } from './context/UserContext';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<NavigationContainer theme={NavigationTheme}>
					<ErrorBoundary>
						<Provider store={store}>
							<AuthProviderContext>
								<Entry />
							</AuthProviderContext>
							<StatusBar style="auto" />
						</Provider>
					</ErrorBoundary>
				</NavigationContainer>
			</SafeAreaProvider>
		</>
	);
}
