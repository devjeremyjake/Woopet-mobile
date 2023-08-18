import {
	View,
	Text,
	TouchableWithoutFeedback,
	FlatList,
	Dimensions,
} from 'react-native';
import React, { useCallback } from 'react';
import styles from './Style';
import useNearYou from '../../hooks/useNearYou/useNearYou';
import ListingCardHorizontal from '../ListingCardHorizontal/ListingCardHorizontal';

const listings: any[] = [
	{
		id: 'tiny-home',
		title: 'Tiny Home',
		subtitle: 'Entire Flat · 1 Bed',
		picture:
			'https://res.cloudinary.com/devjeremyjake/image/upload/v1691646781/woopet/pg1bifgfs5gjb6jkwiz1.png',
		rating: 4.93,
		ratingCount: 861,
	},
	{
		id: 'cook-house',
		title: 'Cook House',
		subtitle: 'Entire Flat · 1 Bed',
		picture:
			'https://res.cloudinary.com/devjeremyjake/image/upload/v1691646781/woopet/pg1bifgfs5gjb6jkwiz1.png',
		rating: 4.93,
		ratingCount: 861,
	},
];

const { width } = Dimensions.get('window');

const NearYouComponent = () => {
	const { isLoading } = useNearYou();

	const renderItem = useCallback(({ item, index }: any) => {
		return <ListingCardHorizontal item={item} />;
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.mainTitle}>Near you</Text>
				<TouchableWithoutFeedback onPress={() => {}}>
					<View>
						<Text style={styles.seeMorebtn}>See All</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
			<>
				<FlatList
					data={listings}
					keyExtractor={(item: any) => item.id}
					bounces={false}
					snapToInterval={width * 0.7 + 36}
					horizontal
					showsHorizontalScrollIndicator={false}
					decelerationRate={0}
					contentContainerStyle={styles.gap}
					renderItem={renderItem}
				/>
			</>
		</View>
	);
};

export default NearYouComponent;
