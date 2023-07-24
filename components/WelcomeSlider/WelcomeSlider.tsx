import { View, Text, FlatList, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import { SLIDER_DATA } from './DATA';
import styles from './Style';

type itemRenderedProp = { item: { id: number; title: string } };

const SliderText = ({ item }: itemRenderedProp) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{item?.title}</Text>
		</View>
	);
};

const WelcomeSlider = () => {
	const [indexPosition, setIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	const handleOnScroll = (event: any) => {
		Animated.event(
			[
				{
					nativeEvent: {
						contentOffset: {
							x: scrollX,
						},
					},
				},
			],
			{
				useNativeDriver: false,
			}
		)(event);
	};

	const handleOnViewableItemsChanged = useRef(({ viewableItems }: any) => {
		setIndex(viewableItems[0].index);
	}).current;

	const viewabilityConfig = useRef({
		itemVisiblePercentThreshold: 50,
	}).current;

	return (
		<>
			<View style={styles.pagination}>
				{SLIDER_DATA?.map((_, index) => (
					<View style={styles.outerCover} key={index}>
						<View
							style={
								indexPosition === index
									? [styles.outerCover, styles.activeStyle]
									: [styles.outerCover, styles.defaultStyle]
							}
						/>
					</View>
				))}
			</View>
			<FlatList
				data={SLIDER_DATA}
				renderItem={({ item }: itemRenderedProp) => <SliderText item={item} />}
				horizontal
				pagingEnabled
				snapToAlignment="center"
				showsHorizontalScrollIndicator={false}
				onScroll={handleOnScroll}
				onViewableItemsChanged={handleOnViewableItemsChanged}
				viewabilityConfig={viewabilityConfig}
			/>
		</>
	);
};

export default WelcomeSlider;
