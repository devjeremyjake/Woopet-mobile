import {
	View,
	Text,
	SafeAreaView,
	TouchableWithoutFeedback,
	ScrollView,
} from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { Image } from 'react-native-expo-image-cache';
import styles from './Style';
import CloseSvg from '../../../assets/svgs/CloseSvg';
import { MyNavigationProp } from '../../../types/custom';
import { ListingDetailScreenProps } from '../../../navigations/ListingNavigator';

const ListingDetailScreen: FC<ListingDetailScreenProps> = (props: any) => {
	const { item } = props.route.params;
	const navigation = useNavigation<MyNavigationProp>();
	return (
		<ScrollView>
			<View style={styles.container}>
				<View>
					<SharedElement id={`item.${item.id}`}>
						<Image
							style={styles.imageStyle}
							tint="light"
							preview={{ uri: item.picture }}
							uri={item?.picture}
						/>
					</SharedElement>
					<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
						<View style={styles.backBtn}>
							<CloseSvg />
						</View>
					</TouchableWithoutFeedback>
				</View>
<View>
	<Text>ListingDetailScreen</Text>
	<View></View>
</View>
				
			</View>
		</ScrollView>
	);
};

export default ListingDetailScreen;
