import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

interface PickerItemProp {
	item: any;
	onPress: () => void;
}

const PickerItem: FC<PickerItemProp> = ({ item, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={styles.text}>{item.label}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	text: {
		padding: 20,
	},
});

export default PickerItem;
