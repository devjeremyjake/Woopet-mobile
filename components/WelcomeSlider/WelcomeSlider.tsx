import { View, Text, FlatList, Animated } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
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

const Pagination = ({ indexNumber }: { indexNumber: number }) => (
	<View style={styles.pagination}>
		{SLIDER_DATA?.map((_, index) => (
			<View style={styles.outerCover} key={index}>
				<View
					style={
						indexNumber === index
							? [styles.outerCover, styles.activeStyle]
							: [styles.outerCover, styles.defaultStyle]
					}
				/>
			</View>
		))}
	</View>
);

const WelcomeSlider = () => {
	const [indexPosition, setIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	const renderItem = useCallback(
		({ item }: itemRenderedProp) => <SliderText item={item} />,
		[]
	);

	const handleOnScroll = useCallback((event: any) => {
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
	}, []);

	const handleOnViewableItemsChanged = useRef(({ viewableItems }: any) => {
		setIndex(viewableItems[0].index);
	}).current;

	const viewabilityConfig = useRef({
		itemVisiblePercentThreshold: 50,
	}).current;

	return (
		<>
			<Pagination indexNumber={indexPosition} />
			<FlatList
				data={SLIDER_DATA}
				renderItem={renderItem}
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
