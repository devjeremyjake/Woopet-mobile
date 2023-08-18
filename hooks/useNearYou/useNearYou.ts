import { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import useLocation from '../useLocation/useLocation';
import { nearYouFetch } from '../../redux/slices/nearYouSlice';

const useNearYou = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [pageNumber, setPageNumber] = useState(1);
	const { locationCoords } = useLocation();

	const fetchHomeDetail = useCallback(async () => {
		const values = {
			lng: locationCoords?.longitude,
			lat: locationCoords?.latitude,
			page: pageNumber,
			pageSize: 10,
			distance: 10,
		};
		await dispatch(nearYouFetch(values));
	}, [dispatch]);

	useEffect(() => {
		fetchHomeDetail();
	}, [fetchHomeDetail]);

	const { isLoading } = useSelector((state: RootState) => state.nearYouList);

	return { isLoading };
};

export default useNearYou;
