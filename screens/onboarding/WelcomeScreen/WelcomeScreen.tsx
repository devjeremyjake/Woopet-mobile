import {
	View,
	Text,
	ImageBackground,
	TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SafeAreaComponent from '../../../components/SafeAreaComponent/SafeAreaComponent';
import LogoSvg from '../../../assets/svgs/Logo';
import styles from './Style';
import ButtonComponent from '../../../components/ButtonComponent/ButtonComponent';
import WelcomeSlider from '../../../components/WelcomeSlider/WelcomeSlider';
import { MyNavigationProp } from '../../../types/custom';
import routes from '../../../navigations/routes';

const WelcomeScreen = () => {
	const navigation = useNavigation<MyNavigationProp>();
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
						<ButtonComponent
							title="Join our community"
							onPress={() => navigation.navigate(routes.SIGN_UP_SCREEN)}
						/>
						<View style={styles.signInAction}>
							<Text style={styles.questionText}>Already a member?</Text>
							<TouchableWithoutFeedback
								onPress={() => navigation.navigate(routes.SIGN_IN_SCREEN)}
							>
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
