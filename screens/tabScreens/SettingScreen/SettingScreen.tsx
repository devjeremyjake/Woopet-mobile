import { View, Text, TouchableWithoutFeedback, FlatList } from 'react-native';
import React, { useCallback, useContext } from 'react';
import { Image } from 'react-native-expo-image-cache';
import SafeAreaComponent from '../../../components/SafeAreaComponent/SafeAreaComponent';
import { AuthContextUser } from '../../../context/UserContext';
import authStorage from '../../../auth/Storage';
import styles from './Style';
import BellIconSvg from '../../../assets/svgs/BellIconSvg';
import EditPenSvg from '../../../assets/svgs/EditPenSvg';
import LocationIconSvg from '../../../assets/svgs/LocationIconSvg';
import SettingsCard, {
	SettingCardProp,
} from '../../../components/SettingsCard/SettingsCard';
import PetsSvg from '../../../assets/svgs/PetsSvg';
import LogoutSvg from '../../../assets/svgs/LogoutSvg';
import BookMarkSvg from '../../../assets/svgs/BookMarkSvg';

const SettingScreen = () => {
	const { user, setUser } = useContext(AuthContextUser);

	const handleLogoOut = useCallback(async () => {
		await authStorage.removeToken();
		setUser(undefined);
	}, []);

	const redirectToPets = () => {};
	const redirectToOrders = () => {};

	const DATA = [
		{
			id: 1,
			icon: <PetsSvg />,
			title: 'My Pets',
			navigation: () => redirectToPets(),
		},
		{
			id: 2,
			icon: <BookMarkSvg />,
			title: 'My Orders',
			navigation: () => redirectToOrders(),
		},
		{
			id: 3,
			icon: <LogoutSvg />,
			title: 'Log out',
			navigation: () => handleLogoOut(),
		},
	];

	const renderItem = useCallback(({ item }: SettingCardProp) => {
		return (
			<TouchableWithoutFeedback onPress={item?.navigation}>
				<View>
					<SettingsCard item={item} />
				</View>
			</TouchableWithoutFeedback>
		);
	}, []);

	const ItemSeparatorComponent = useCallback(() => {
		return <View style={{ marginBottom: 20 }} />;
	}, []);

	return (
		<SafeAreaComponent>
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={() => {}}>
					<View style={styles.notificationCotainer}>
						<BellIconSvg />
					</View>
				</TouchableWithoutFeedback>

				<View style={styles.profileContainer}>
					<Image
						style={styles.imageTag}
						tint="light"
						preview={{
							uri: `https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg`,
						}}
						uri={
							user?.image !== null
								? (user?.image as any)
								: `https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg`
						}
					/>
					<View style={styles.nameContainer}>
						<Text style={styles.nameTag}>{user?.name}</Text>
						<TouchableWithoutFeedback onPress={() => {}}>
							<View>
								<EditPenSvg />
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.locationContainer}>
						<LocationIconSvg />
						<Text style={styles.locationTag}>
							{user?.country !== null
								? `${user?.city}, ${user?.country}`
								: 'Your location'}
						</Text>
					</View>
				</View>
				<FlatList
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					scrollEnabled={false}
					data={DATA}
					renderItem={renderItem}
					ItemSeparatorComponent={ItemSeparatorComponent}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>
			{/* <TouchableWithoutFeedback onPress={handleLogoOut}>
				<View>
					<Text>Log out</Text>
				</View>
			</TouchableWithoutFeedback> */}
		</SafeAreaComponent>
	);
};

export default SettingScreen;
