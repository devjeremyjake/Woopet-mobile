import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

type locationValueProp = {
	latitude: number;
	longitude: number;
};

interface ReverseLocationProps {
	city: string;
	country: string;
	district: any;
	isoCountryCode: string;
	name: string;
	postalCode: string;
	region: string;
	street: string;
	streetNumber: string;
	subregion: string;
	timezone: string;
}

const useLocation = () => {
	const [locationCoords, setLocationCords] = useState<locationValueProp>();
	const [address, setAddress] = useState<ReverseLocationProps[]>([]);

	const fetchLocation = async () => {
		try {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') return;
			const location = await Location.getLastKnownPositionAsync();
			if (location !== null) {
				const { latitude, longitude } = location.coords;
				setLocationCords({ latitude, longitude });
				const address = await Location.reverseGeocodeAsync({
					latitude,
					longitude,
				});
				setAddress(address as any);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchLocation();
	}, []);

	return { locationCoords, address };
};

export default useLocation;
