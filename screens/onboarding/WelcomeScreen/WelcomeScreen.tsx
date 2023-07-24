import {
	View,
	Text,
	ImageBackground,
	TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import SafeAreaComponent from '../../../components/SafeAreaComponent/SafeAreaComponent';
import LogoSvg from '../../../assets/svgs/Logo';
import styles from './Style';
import ButtonComponent from '../../../components/ButtonComponent/ButtonComponent';
import WelcomeSlider from '../../../components/WelcomeSlider/WelcomeSlider';

const WelcomeScreen = () => {
	return (
		<ImageBackground
			blurRadius={0}
			source={require('../../../assets/ONBOARDINGPICTURE.png')}
			style={styles.container}
		>
			<SafeAreaComponent>
				<View style={styles.contentWrapper}>
					<LogoSvg />
					<View>
						<View style={styles.contentPading}>
							<WelcomeSlider />
						</View>
						<ButtonComponent title="Join our community" onPress={() => {}} />
						<View style={styles.signInAction}>
							<Text style={styles.questionText}>Already a member?</Text>
							<TouchableWithoutFeedback>
								<Text style={styles.actionText}>Sign in</Text>
							</TouchableWithoutFeedback>
						</View>
					</View>
				</View>
			</SafeAreaComponent>
		</ImageBackground>
	);
};

export default WelcomeScreen;
