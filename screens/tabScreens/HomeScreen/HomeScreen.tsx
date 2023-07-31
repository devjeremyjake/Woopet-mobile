import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import SafeAreaComponent from '../../../components/SafeAreaComponent/SafeAreaComponent';
import styles from './Style';
import LocationIconSvg from '../../../assets/svgs/LocationIconSvg';
import { AuthContextUser } from '../../../context/UserContext';

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
					<TouchableWithoutFeedback onPress={() => {}}>
						<LinearGradient
							colors={['#FE8F4B', '#FB724C']}
							style={styles.buttonWrapper}
						>
							<Text style={styles.buttonText}>Book a session</Text>
						</LinearGradient>
					</TouchableWithoutFeedback>
				</View>
				<View style={styles.locationWrapper}>
					<LocationIconSvg />
					<Text style={styles.locationText}>
						{user?.country !== null
							? `${user?.city}, ${user?.country}`
							: 'Your location'}
					</Text>
				</View>
			</View>
		</SafeAreaComponent>
	);
};

export default HomeScreen;
