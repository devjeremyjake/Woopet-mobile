import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { Image } from 'react-native-expo-image-cache';
import styles from './Style';
import LocationIconSvg from '../../assets/svgs/LocationIconSvg';
import StarSvg from '../../assets/svgs/StarSvg';
import routes from '../../navigations/routes';
import { MyNavigationProp } from '../../types/custom';

const ListingCardHorizontal = ({ item }: any) => {
	const navigation = useNavigation<MyNavigationProp>();
	return (
		<TouchableWithoutFeedback
			onPress={() =>
				navigation.navigate(routes.LISTING_DETAILS_SCREEN, { item })
			}
		>
			<View>
				<View>
					<SharedElement id={`item.${item.id}`}>
						<Image
							style={styles.cardImage}
							tint="light"
							preview={{ uri: item.picture }}
							uri={item?.picture}
						/>
					</SharedElement>
					<View style={styles.overlay} />
					<View style={styles.ratingContainer}>
						<StarSvg />
						<Text style={styles.ratingText}>4.2</Text>
					</View>
				</View>

				<View style={styles.contentContainer}>
					<View style={styles.contentLeft}>
						<Text style={styles.contentName}>FullName</Text>
						<View style={styles.locationContaniner}>
							<LocationIconSvg />
							<Text style={styles.locationText}>7 km from you</Text>
						</View>
					</View>
					<View style={styles.contentRight}>
						<Text style={styles.contentRightText}>$3 / hr</Text>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ListingCardHorizontal;
