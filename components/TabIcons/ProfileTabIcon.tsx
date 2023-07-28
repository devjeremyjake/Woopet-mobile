import React from 'react';
import ProfileSvg from '../../assets/svgs/ProfileSvg';

const ProfileTabIcon = ({ focused }: { focused: boolean }) => (
	<ProfileSvg color={focused ? '#000' : '#AEAEB2'} />
);

export default ProfileTabIcon;
