import { useEffect } from 'react';
import { useJwt } from 'react-jwt';
import { useRecoilState } from 'recoil';
import { adminAtom, jwtAtom, userIdAtom } from '../atoms/jwtAtom';

export const useJwtAdmin = () => {
	const [isAdmin, setIsAdmin] = useRecoilState(adminAtom);
	const [userId, setUserId] = useRecoilState(userIdAtom);
	const [token, setToken] = useRecoilState(jwtAtom);

	const { decodedToken, isExpired } = useJwt(token);

	useEffect(() => {
		setIsAdmin(false);
	}, [token]);

	useEffect(() => {
		if (decodedToken) {
			setIsAdmin(decodedToken.isAdmin);
			setUserId(decodedToken.userID);
		}
	}, [decodedToken]);

	useEffect(() => {
		if (isExpired) {
			setToken(null);
		}
	}, [isExpired]);

	return { isAdmin };
};
