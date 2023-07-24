import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import React, { FC } from 'react';

interface KeyboardAvoidProp {
	children: React.ReactElement;
}

const KeyBoardAvoidView: FC<KeyboardAvoidProp> = ({ children }) => {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			{children}
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default KeyBoardAvoidView;
