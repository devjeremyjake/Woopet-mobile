import React, { ErrorInfo } from 'react';
import { Text } from 'react-native';
import SafeAreaComponent from './SafeAreaComponent/SafeAreaComponent';

interface ErrorBoundaryProps {
	children: React.ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
		};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// Handle the error
		console.error('Error Boundary:', error, errorInfo.componentStack);
		this.setState({
			hasError: true,
			error,
		});
	}

	render() {
		if (this.state.hasError) {
			// Render an error UI or fallback component
			return (
				<SafeAreaComponent>
					<Text>An error occurred: {this.state.error?.message}</Text>
				</SafeAreaComponent>
			);
		}

		// Render the children as is
		return this.props.children;
	}
}

export default ErrorBoundary;
