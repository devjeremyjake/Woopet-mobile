import React from 'react';
import MomentSvg from '../../assets/svgs/MomentSvg';

const MomentTabIcon = ({ focused }: { focused: boolean }) => (
	<MomentSvg color={focused ? '#000' : '#AEAEB2'} />
);

export default MomentTabIcon;
