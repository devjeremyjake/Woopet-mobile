export const formikMockValue = {
	handleChangeText: jest.fn(),
	handleBlur: jest.fn(),
	handleSubmit: jest.fn(),
	setFieldValue: jest.fn(),
	setFieldTouched: jest.fn(),
	values: { email: '' },
	errors: { email: '' },
	touched: { email: false },
};

export const useFormikContext = jest.fn().mockReturnValue(formikMockValue);
