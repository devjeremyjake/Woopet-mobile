import { NavigationProp } from '@react-navigation/native';
export type MyNavigationProp = NavigationProp<Record<string, any>>;

export interface UserInfo {
	id: string;
	name: string;
	email: string;
	emailVerified: boolean | null;
	image: string | null;
	long: number | null;
	lat: number | null;
	city: string | null;
	country: string | null;
	createdAt: Date;
	updatedAt: Date;
	favoriteIds: any[];
}
