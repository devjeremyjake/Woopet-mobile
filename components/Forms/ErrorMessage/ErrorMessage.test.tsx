import React from 'react';
import { render } from '@testing-library/react-native';
import ErrorMessage from './ErrorMessage';

interface ErrorMessageProps {
	visible: boolean;
	error: string;
}

describe('<ErrorMessage/>', () => {
	const setUpErrorMessage = (props: ErrorMessageProps) =>
		render(<ErrorMessage {...props} />);

	it('should show errormessage and style when visible and error is true', () => {
		const valueProp = { error: 'Email is a required field', visible: true };
		const { getByText } = setUpErrorMessage(valueProp);
		const errorMessageValue = getByText(valueProp.error);
		expect(errorMessageValue).toBeOnTheScreen();
		expect(errorMessageValue).toHaveStyle({
			color: 'rgba(255,0,0, 1)',
		});
	});
	it('should hide error message when visible and error are false', () => {
		const valueProp = { error: '', visible: false };
		const { queryByText } = setUpErrorMessage(valueProp);
		const errorMessageValue = queryByText(valueProp.error);
		expect(errorMessageValue).not.toBeOnTheScreen();
	});
	it('should not render error message when visible is false', () => {
		const valueProp = {
			error: 'Email is a required field',
			visible: false,
		};
		const { queryByText } = setUpErrorMessage(valueProp);
		const errorMessageValue = queryByText(valueProp.error);
		expect(errorMessageValue).not.toBeOnTheScreen();
	});
});
