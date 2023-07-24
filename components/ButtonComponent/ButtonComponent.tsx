import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { FC } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Style';

interface ButtonProp {
	title: string;
	onPress: () => void;
}

const ButtonComponent: FC<ButtonProp> = ({ title, onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View>
				<LinearGradient
					colors={['#FE8F4B', '#FB724C']}
					style={styles.container}
				>
					<Text style={styles.actionText}>{title}</Text>
				</LinearGradient>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ButtonComponent;
