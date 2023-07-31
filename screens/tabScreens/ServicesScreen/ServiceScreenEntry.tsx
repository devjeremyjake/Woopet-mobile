import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SafeAreaComponent from '../../../components/SafeAreaComponent/SafeAreaComponent';
import MarketStandSvg from '../../../assets/svgs/MarketStandSvg';
import ButtonComponent from '../../../components/ButtonComponent/ButtonComponent';
import styles from './Style';
import { MyNavigationProp } from '../../../types/custom';
import routes from '../../../navigations/routes';

const ServiceScreenEntry = () => {
	const navigation = useNavigation<MyNavigationProp>();
	return (
		<SafeAreaComponent>
			<View style={styles.container}>
				<View style={styles.centerContainer}>
					<MarketStandSvg />
					<View>
						<Text style={styles.mainHeading}>Services Headquaters</Text>
						<Text style={styles.subheading}>Put your service out there</Text>
					</View>
				</View>
				<View style={{ marginTop: 'auto' }}>
					<ButtonComponent
						title="Get Started"
						onPress={() => navigation.navigate(routes.TAB_SERVICE_ADD_NEW)}
					/>
				</View>
			</View>
		</SafeAreaComponent>
	);
};

export default ServiceScreenEntry;
