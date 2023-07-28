import React, { createContext, useState, ReactNode } from 'react';
import { UserInfo } from '../types/custom';

type WrapperProps = {
	children: ReactNode;
};

type AuthContextType = {
	user: UserInfo | undefined;
	setUser: React.Dispatch<React.SetStateAction<UserInfo | undefined>>;
};

export const AuthContextUser = createContext<AuthContextType>({
	user: undefined,
	setUser: () => {},
});

const AuthProviderContext = ({ children }: WrapperProps) => {
	const [user, setUser] = useState<UserInfo | undefined>();

	return (
		<AuthContextUser.Provider value={{ user, setUser }}>
			{children}
		</AuthContextUser.Provider>
	);
};

export default AuthProviderContext;
