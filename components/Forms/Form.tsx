import React, { FC } from 'react';
import { Formik } from 'formik';

type formProp = {
	onSubmit: (e: { fullname: string; email: string; password: string }) => void;
	children: React.ReactNode;
	initialValues: {
		fullname: string;
		email: string;
		password: string;
	};
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
