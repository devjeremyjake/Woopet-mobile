import { View, Text, ScrollView } from 'react-native';
import React, { useCallback } from 'react';
import * as Yup from 'yup';
import SafeAreaComponent from '../../../../components/SafeAreaComponent/SafeAreaComponent';
import styles from './Style';

const AddNewService = () => {
	return (
		<SafeAreaComponent>
			<View style={styles.container}>
				<Text style={styles.mainHeading}>Set Up a Account.</Text>
				<Text style={styles.subheading}>Provide some information</Text>
				<ScrollView></ScrollView>
			</View>
		</SafeAreaComponent>
	);
};

export default AddNewService;
