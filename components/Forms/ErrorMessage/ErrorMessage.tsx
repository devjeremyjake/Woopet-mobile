import { Text } from 'react-native';
import React, { FC } from 'react';
import styles from './Style';

interface ErrorMessageProps {
	error: any;
	visible: any;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ error, visible }) => {
	if (!visible || !error) {
		return null;
	}
	return (
		<>
			<Text style={styles.errorText}>{error}</Text>
		</>
	);
};

export default ErrorMessage;
