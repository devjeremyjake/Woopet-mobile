import { renderHook, act } from '@testing-library/react-hooks';
import useLocation from './useLocation';
import { requestForegroundPermissionsAsync } from '../../__mocks__/expo-location';

const mockedLocation = {
	coords: {
		latitude: 37.33233141,
		longitude: -122.0312186,
	},
};
const mockedAddress = [{ city: 'San Francisco', country: 'United States' }];

jest.mock('expo-location');

describe('useLocation hook', () => {
	describe('when foregroundPermssion is granted', () => {
		it('returns locationValue and address when fetchLocation is successful', async () => {
			await act(async () => {
				const { result, waitForNextUpdate } = renderHook(() => useLocation());
				await waitForNextUpdate();
				expect(result.current.locationCoords).toEqual(mockedLocation.coords);
				expect(result.current.address).toEqual(mockedAddress);
			});
		});
	});

	describe('when foregroundPermssion is granted', () => {
		beforeEach(() => {
			requestForegroundPermissionsAsync.mockReturnValue({
				status: 'denied',
				granted: false,
				canAskAgain: false,
				expires: 'never',
			});
		});
		it('does not return locationValue and address when Location.requestForegroundPermissionsAsync is not granted', async () => {
			await act(async () => {
				const { result, waitForNextUpdate } = renderHook(() => useLocation());
				await waitForNextUpdate();
				expect(result.current.locationCoords).toBeUndefined();
				expect(result.current.address).toEqual([]);
			});
		});
	});
});
