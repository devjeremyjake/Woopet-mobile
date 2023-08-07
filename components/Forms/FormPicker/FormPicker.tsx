import { FC } from 'react';
import Picker, { PickerProps } from './Picker';
import { useFormikContext } from 'formik';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { formikContextProps } from '../../../types/custom';
interface FormPickerProp {
	items: any[];
	numberOfColumns: number;
	name: string;
	placeholder: string;
	width: string;
}

const FormPicker: FC<FormPickerProp> = ({
	items,
	numberOfColumns,
	name,
	placeholder,
	width,
}) => {
	const { errors, setFieldValue, touched, values } =
		useFormikContext<formikContextProps>();
	return (
		<>
			<Picker
				items={items}
				numberOfColumns={numberOfColumns}
				onSelectItem={(item) => setFieldValue(name, item)}
				placeholder={placeholder}
				selectedItem={values[name]}
				width={width}
				name={name}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default FormPicker;
