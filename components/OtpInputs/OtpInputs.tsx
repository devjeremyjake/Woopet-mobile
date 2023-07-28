import React, { FC, useRef } from 'react';
import OTPTextView from 'react-native-otp-textinput';

interface OtpInputProps {
	onPress: (e: string) => void;
}

const OtpInputs: FC<OtpInputProps> = ({ onPress }) => {
	const input = useRef<OTPTextView>(null);
	return (
		<>
			<OTPTextView
				ref={input}
				containerStyle={{ marginBottom: 20 }}
				handleTextChange={onPress}
				inputCount={4}
				tintColor="rgba(251, 114, 76, 1)"
				keyboardType="numeric"
			/>
		</>
	);
};

export default OtpInputs;
