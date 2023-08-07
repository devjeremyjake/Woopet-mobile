import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { BASE_BLACK, FONT_SIZE_4, TEXT_FONT } from '../../../constants';

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
		paddingHorizontal: 20,
		paddingVertical: 13,
		color: BASE_BLACK,
		fontSize: FONT_SIZE_4,
		fontWeight: '700',
		fontFamily: TEXT_FONT,
	},
});

export default PickerItem;
