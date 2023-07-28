import React from 'react';
import WorkSvg from '../../assets/svgs/WorkSvg';

const ServicesTabIcon = ({ focused }: { focused: boolean }) => (
	<WorkSvg color={focused ? '#000' : '#AEAEB2'} />
);

export default ServicesTabIcon;
