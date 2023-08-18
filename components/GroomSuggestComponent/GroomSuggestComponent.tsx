import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import styles from './Style';
import useGroomingSuggest from '../../hooks/useGroomingSuggest/useGroomingSuggest';

const GroomSuggestComponent = () => {
	const { isLoading } = useGroomingSuggest();

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.mainTitle}>Grooming</Text>
				<TouchableWithoutFeedback onPress={() => {}}>
					<View>
						<Text style={styles.seeMorebtn}>See All</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
			<></>
		</View>
	);
};

export default GroomSuggestComponent;
