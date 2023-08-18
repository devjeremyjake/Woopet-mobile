import { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import { groomingServiceFetch } from '../../redux/slices/groomingSuggestSlice';

const useGroomingSuggest = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [pageNumber, setPageNumber] = useState(1);

	const fetchHomeSuggest = useCallback(async () => {
		const values = {
			page: pageNumber,
			pageSize: 10,
		};
		await dispatch(groomingServiceFetch(values));
	}, [dispatch]);

	useEffect(() => {
		fetchHomeSuggest();
	}, [fetchHomeSuggest]);

	const { isLoading } = useSelector((state: RootState) => state.nearYouList);

	return { isLoading };
};

export default useGroomingSuggest;
