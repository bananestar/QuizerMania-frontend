import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { jwtAtom, userAtom } from '../atoms/jwtAtom';

const URL_LOGIN = import.meta.env.VITE_API_LOGIN;
const URL_REGISTRATION = import.meta.env.VITE_API_REGISTER;
const URL_USER = import.meta.env.VITE_API_USERS;

export const useLogin = (identifiers) => {
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);
	const [errors, setErrors] = useState();

	const [token, setToken] = useRecoilState(jwtAtom);

	useEffect(() => {
		axios
			.post(URL_LOGIN, identifiers)
			.then(({ data }) => {
				setData(data);
				setToken(data.result.token);
			})
			.catch((errors) => {
				setErrors(errors);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [identifiers]);

	return { data, isLoading, errors };
};

export const useRegister = (registers) => {
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);
	const [errors, setErrors] = useState();

	const [token, setToken] = useRecoilState(jwtAtom);

	useEffect(() => {
		axios
			.post(URL_REGISTRATION, registers)
			.then(({ data }) => {
				setData(data);
				setToken(data.result.token);
			})
			.catch((errors) => {
				setErrors(errors);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [registers]);

	return { data, isLoading, errors };
};

export const useAccount = (userId) => {
	const [isLoading, setLoading] = useState(true);
	const [errors, setErrors] = useState();
    const [user, setUser] = useRecoilState(userAtom);

	useEffect(() => {
		if (userId) {
			axios
				.get(URL_USER + userId)
				.then(({ data }) => {
					setUser(data.result)
                    
				})
				.catch((errors) => {
					setErrors(errors);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [userId]);
	return { isLoading, errors };
};
