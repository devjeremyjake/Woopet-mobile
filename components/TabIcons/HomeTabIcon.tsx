import React from 'react';
import HomeSvg from '../../assets/svgs/HomeSvg';

const HomeTabIcon = ({ focused }: { focused: boolean }) => (
	<HomeSvg color={focused ? '#000' : '#AEAEB2'} />
);

export default HomeTabIcon;
