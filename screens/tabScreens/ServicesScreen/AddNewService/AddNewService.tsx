import { View, Text, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import {
	Form,
	FormField,
	SubmitButton,
	FormPicker,
	ImagePicker,
} from '../../../../components/Forms';
import * as Yup from 'yup';
import SafeAreaComponent from '../../../../components/SafeAreaComponent/SafeAreaComponent';
import styles from './Style';
import useLocation from '../../../../hooks/useLocation/useLocation';
import { AuthContextUser } from '../../../../context/UserContext';

const validationSchema = Yup.object().shape({
	price: Yup.number().required().min(5).max(10000).label('Price'),
	description: Yup.string().required().label('Description'),
	category: Yup.object().required().nullable().label('Category'),
	image: Yup.string().min(1).required().label('Image'),
});

const AddNewService = () => {
	const { locationCoords } = useLocation();
	const { user } = useContext(AuthContextUser);
	const handleSubmit = async ({
		price,
		description,
		category,
		image,
	}: {
		price: number;
		description: string;
		category: any;
		image: string;
	}) => {
		const stringedObject = JSON.stringify({
			userId: user?.id,
			categoryId: category?.id,
			price: price,
			description,
			providerLatitude: locationCoords?.latitude,
			providerLongitude: locationCoords?.longitude,
			imageUrl: image,
		});
		console.log('Object', stringedObject);
	};

	return (
		<SafeAreaComponent>
			<View style={styles.container}>
				<Text style={styles.mainHeading}>Set Up a Account.</Text>
				<Text style={styles.subheading}>Provide some information</Text>
				<ScrollView>
					<>
						<Form
							initialValues={{
								email: '',
								fullname: '',
								password: '',
								price: 0,
								description: '',
								category: '',
								image: '',
							}}
							onSubmit={handleSubmit}
							validationSchema={validationSchema}
						>
							<ImagePicker name="image" />
							<FormField
								autoCorrect={false}
								name="price"
								placeholder="Enter price per hour"
								textContentType="none"
								keyboardType="default"
								isPassword={false}
								fieldName="Price($)"
							/>
							<FormPicker
								items={[
									{ id: 1, label: 'Dog Walking' },
									{ id: 2, label: 'Dog Grooming' },
								]}
								numberOfColumns={1}
								name="category"
								placeholder="Pick Service Category"
								width="100%"
							/>
							<FormField
								autoCorrect={false}
								name="description"
								placeholder="Enter Your Description"
								textContentType="none"
								keyboardType="default"
								isPassword={false}
								fieldName="Description"
								maxLength={250}
								multiline
							/>
							<View style={styles.submitButton}>
								<SubmitButton title="Register Service" />
							</View>
						</Form>
					</>
				</ScrollView>
			</View>
		</SafeAreaComponent>
	);
};

export default AddNewService;
