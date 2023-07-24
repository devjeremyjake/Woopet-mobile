import React from 'react';
import { render } from '@testing-library/react-native';

import LoadingComponent from './LoadingComponent';

jest.mock('../../assets/svgs/Logo', () => 'MockedLogo');

describe('<LoadingComponent />', () => {
	it('renders loading component when isLoading is true', () => {
		const { getByTestId } = render(<LoadingComponent isLoading={true} />);
		const loadingComponent = getByTestId('loading-component');
		expect(loadingComponent).toBeOnTheScreen();
	});
	it('renders no component when isLoading is false', () => {
		const { queryByTestId } = render(<LoadingComponent isLoading={false} />);
		const loadingComponent = queryByTestId('loading-component');
		expect(loadingComponent).not.toBeOnTheScreen();
	});
	it('should animate when loading is true', () => {
		jest.useFakeTimers();
		const { getByTestId } = render(<LoadingComponent isLoading={true} />);
		const logo = getByTestId('logo');
		expect(logo.props.style.transform[0].scale).toBe(0);
		jest.advanceTimersByTime(1000);
		expect(logo.props.style.transform[0].scale).toBe(1);
		jest.advanceTimersByTime(1000);
		expect(logo.props.style.transform[0].scale).toBe(0);
		jest.advanceTimersByTime(1000);
		expect(logo.props.style.transform[0].scale).toBe(1);
		jest.useRealTimers();
	});
});
