import { View, Text } from 'react-native';
import React, { FC } from 'react';
import styles from './Style';

export interface SettingCardProp {
	item: {
		id: number;
		icon: any;
		title: string;
		navigation: () => void;
	};
}
const SettingsCard: FC<SettingCardProp> = ({ item }) => {
	return (
		<View style={styles.container}>
			{item?.icon}
			<Text style={styles.textTag}>{item?.title}</Text>
		</View>
	);
};

export default SettingsCard;
