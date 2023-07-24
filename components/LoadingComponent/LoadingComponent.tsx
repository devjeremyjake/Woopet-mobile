import { View, Animated } from 'react-native';
import React, { FC, useRef, useEffect } from 'react';
import styles from './Style';
import Logo from '../../assets/svgs/Logo';

interface LoadingProp {
	isLoading: boolean;
}

const LoadingComponent: FC<LoadingProp> = ({ isLoading }) => {
	if (!isLoading) {
		return null;
	}
	const bounceValue = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(bounceValue, {
					toValue: 1,
					duration: 1000,
					useNativeDriver: true,
				}),
				Animated.timing(bounceValue, {
					toValue: 0,
					duration: 1000,
					useNativeDriver: true,
				}),
			])
		).start();
	}, [bounceValue]);

	const interpolateY = bounceValue.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1],
	});
	return (
		<View style={styles.container}>
			<View style={styles.spinnerContainer} testID="loading-component">
				<Animated.View
					style={{
						transform: [{ scale: interpolateY }],
					}}
					testID="logo"
				>
					<Logo />
				</Animated.View>
			</View>
		</View>
	);
};

export default LoadingComponent;
