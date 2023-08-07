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
import { useFormikContext } from 'formik';
import { formikContextProps } from '../../../types/custom';

export interface PickerProps {
	items: any[];
	numberOfColumns: number;
	onSelectItem: (e: any) => void;
	placeholder: string;
	selectedItem: any;
	width: string;
	name: string;
}

interface SingleItem {
	item: any;
}

const Picker: FC<PickerProps> = ({
	items,
	name,
	numberOfColumns = 1,
	onSelectItem,
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
			<PickerItem
				item={item}
				onPress={() => {
					setModalVisible(false);
					onSelectItem(item);
				}}
			/>
		);
	}, []);
	const { errors, touched } = useFormikContext<formikContextProps>();

	const errorBorder =
		touched?.[name] && errors?.[name] && styles.inputRedBorder;

	return (
		<>
			<TouchableWithoutFeedback onPress={modalState}>
				<View style={[styles.inputContainer, errorBorder as any]}>
					<View style={[styles.container, { width }]}>
						{selectedItem ? (
							<Text style={styles.text}>{selectedItem.label}</Text>
						) : (
							<Text style={styles.placeholder}>{placeholder}</Text>
						)}
						<View style={{ marginLeft: 'auto' }}>
							<ArrowDownSvg />
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
			<Modal
				visible={modalVisible}
				animationType="slide"
				presentationStyle="pageSheet"
				statusBarTranslucent={false}
			>
				<>
					<Button title="Close" onPress={() => setModalVisible(false)} />
					<FlatList
						data={items}
						keyExtractor={(item) => item.id.toString()}
						numColumns={numberOfColumns}
						renderItem={renderItem}
					/>
				</>
			</Modal>
		</>
	);
};

export default Picker;
