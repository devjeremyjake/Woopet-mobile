import { View, Text, TouchableWithoutFeedback, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import SafeAreaComponent from '../../../components/SafeAreaComponent/SafeAreaComponent';
import styles from './Style';
import LocationIconSvg from '../../../assets/svgs/LocationIconSvg';
import { AuthContextUser } from '../../../context/UserContext';
import NearYouComponent from '../../../components/NearYouComponent/NearYouComponent';
import GroomSuggestComponent from '../../../components/GroomSuggestComponent/GroomSuggestComponent';

const HomeScreen = () => {
	const { user } = useContext(AuthContextUser);
	return (
		<SafeAreaComponent>
			<View style={styles.container}>
				<View style={styles.headingContainer}>
					<View>
						<Text style={styles.headingMainText}>Home</Text>
						<Text style={styles.headingSubText}>Explore our services</Text>
					</View>
				</View>
				<ScrollView>
					<View style={styles.locationWrapper}>
						<LocationIconSvg />
						<Text style={styles.locationText}>
							{user?.country !== null
								? `${user?.city}, ${user?.country}`
								: 'Your location'}
						</Text>
					</View>

					<NearYouComponent />
					<GroomSuggestComponent />
				</ScrollView>
			</View>
		</SafeAreaComponent>
	);
};

export default HomeScreen;
