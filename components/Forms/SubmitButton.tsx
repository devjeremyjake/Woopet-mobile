import React, { FC } from 'react';
import { useFormikContext } from 'formik';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

type submitButtonProps = {
	title: string;
};

const SubmitButton: FC<submitButtonProps> = ({ title }) => {
	const { handleSubmit } = useFormikContext();
	return <ButtonComponent title={title} onPress={() => handleSubmit()} />;
};

export default SubmitButton;
