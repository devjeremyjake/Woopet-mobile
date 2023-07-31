import {
	View,
	Text,
	Modal,
	FlatList,
	Button,
	TouchableWithoutFeedback,
} from 'react-native';
import React, { FC, useCallback, useState } from 'react';
import styles from './Style';
import ArrowDownSvg from '../../../assets/svgs/ArrowDownSvg';
import PickerItem from './PickerItem';

export interface PickerProps {
	items: any[];
	numberOfColumns: number;
	onSelectItem: () => void;
	PickerItemComponent: React.ReactElement;
	placeholder: string;
	selectedItem: string;
	width: string;
}

interface SingleItem {
	item: any;
}

const Picker: FC<PickerProps> = ({
	items,
	numberOfColumns = 1,
	onSelectItem,
	PickerItemComponent = PickerItem,
	placeholder,
	selectedItem,
	width = '100%',
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	const modalState = useCallback(() => {
		setModalVisible(true);
	}, []);

	const renderItem = useCallback(({ item }: SingleItem) => {
		return (
			//     <PickerItemComponent
			//     item={item}
			//     label={item.label}
			//     onPress={() => {
			//       setModalVisible(false);
			//       onSelectItem(item);
			//     }}
			//   />
			<View>
				<Text>Here</Text>
			</View>
		);
	}, []);

	return (
		<>
			<TouchableWithoutFeedback onPress={modalState}>
				<View style={[styles.container, { width }]}>
					{selectedItem ? (
						<Text style={styles.text}>{selectedItem}</Text>
					) : (
						<Text style={styles.placeholder}>{placeholder}</Text>
					)}
					<View style={{ marginLeft: 'auto' }}>
						<ArrowDownSvg />
					</View>
				</View>
				<Text>Picker</Text>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<>
					<Button title="Close" onPress={() => setModalVisible(false)} />
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						numColumns={numberOfColumns}
						renderItem={renderItem}
					/>
				</>
			</Modal>
		</>
	);
};

export default Picker;
