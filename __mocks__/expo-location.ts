const mockedLocation = {
	coords: {
		latitude: 37.33233141,
		longitude: -122.0312186,
	},
};
const mockedAddress = [{ city: 'San Francisco', country: 'United States' }];

export const requestForegroundPermissionsAsync = jest.fn().mockResolvedValue({
	status: 'granted',
	granted: true,
	canAskAgain: false,
	expires: 'never',
});

export const getLastKnownPositionAsync = jest
	.fn()
	.mockResolvedValue(mockedLocation);

export const reverseGeocodeAsync = jest.fn().mockResolvedValue(mockedAddress);
