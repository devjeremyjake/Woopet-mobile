import React, { FC } from 'react';
import { Formik } from 'formik';

export interface FormValuesProp {
	fullname: string;
	email: string;
	password: string;
	price: number;
	description: string;
	category: any;
	image: string;
	passwordConfirmation: string;
}

type formProp = {
	onSubmit: (e: FormValuesProp) => void;
	children: React.ReactNode;
	initialValues: FormValuesProp;
	validationSchema: object;
};

const Form: FC<formProp> = ({
	initialValues,
	onSubmit,
	validationSchema,
	children,
}) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{() => <>{children}</>}
		</Formik>
	);
};

export default Form;
