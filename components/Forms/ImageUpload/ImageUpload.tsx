import { useFormikContext } from 'formik';
import { FC, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { TouchableWithoutFeedback, View, Image } from 'react-native';
import { formikContextProps } from '../../../types/custom';
import * as ImagePicker from 'expo-image-picker';
// import { Image } from 'react-native-expo-image-cache';
import CameraSvg from '../../../assets/svgs/CameraSvg';
import styles from './Style';

interface FormFieldProp {
	name: string;
}

const ImageUpload: FC<FormFieldProp> = ({ name }) => {
	useEffect(() => {
		requestPermisison();
	}, []);

	const requestPermisison = async () => {
		const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (!granted) alert('You need to enable permission to access the library');
	};

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			if (!result.canceled) {
				setFieldValue(name, result?.assets[0].uri);
			}
		} catch (error) {
			console.log('Error reading an image', error);
		}
	};

	const { setFieldValue, errors, touched, values } =
		useFormikContext<formikContextProps>();

	const errorBorder =
		touched?.[name] && errors?.[name] && styles.inputRedBorder;
	return (
		<>
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={selectImage}>
					<View style={[styles.containerCamera, errorBorder as any]}>
						<CameraSvg />
					</View>
				</TouchableWithoutFeedback>

				<>
					{values[name] ? (
						<View style={styles.imageContainer}>
							<Image
								source={{ uri: values[name] }}
								resizeMode="cover"
								style={{ width: '100%', height: '100%' }}
							/>
						</View>
					) : null}
				</>
			</View>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default ImageUpload;
