import { View, Text, SafeAreaView } from 'react-native';
import React, { FC } from 'react';
import styles from './Style';

interface SafeAreaProp {
	children: React.ReactElement;
}

const SafeAreaComponent: FC<SafeAreaProp> = ({ children }) => {
	return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default SafeAreaComponent;
