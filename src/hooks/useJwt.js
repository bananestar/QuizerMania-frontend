import axios from 'axios';
import { useEffect, useState } from 'react';
import { useJwt } from 'react-jwt';
import { useRecoilState } from 'recoil';
import { adminAtom, jwtAtom, userAtom, userIdAtom } from '../atoms/jwtAtom';

const URL_USER = import.meta.env.VITE_API_USERS;

export const useJwtAdmin = () => {
	const [isAdmin, setIsAdmin] = useRecoilState(adminAtom);
	const [userId, setUserId] = useRecoilState(userIdAtom);
	const [token, setToken] = useRecoilState(jwtAtom);

	const [user, setUser] = useRecoilState(userAtom);
	const [isLoading, setLoading] = useState(true);
	const [errors, setErrors] = useState();

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

	useEffect(() => {
		if (userId != null) {
			axios
				.get(URL_USER + userId)
				.then(({ data }) => {
					setUser(data.result);
				})
				.catch((errors) => {
					setErrors(errors);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [userId]);

	return { isAdmin };
};
