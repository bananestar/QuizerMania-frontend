import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { jwtAtom, userAtom, userIdAtom } from '../atoms/jwtAtom';

const URL_LOGIN = import.meta.env.VITE_API_LOGIN;
const URL_REGISTRATION = import.meta.env.VITE_API_REGISTER;
const URL_USER = import.meta.env.VITE_API_USERS;
const URL_SCORE = import.meta.env.VITE_API_SCORE;

export const useQuery = (url, id) => {
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);
	const [errors, setErrors] = useState();

	const [token, setToken] = useRecoilState(jwtAtom);

	useEffect(() => {
		if (id) {
			axios
				.get(url + id, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then(({ data }) => {
					setData(data);
				})
				.catch((errors) => {
					setErrors(errors);
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			axios
				.get(url, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then(({ data }) => {
					setData(data);
				})
				.catch((errors) => {
					setErrors(errors);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [url]);

	return { data, isLoading, errors };
};

export const useAdd = (url, dt) => {
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);
	const [errors, setErrors] = useState();

	const [token, setToken] = useRecoilState(jwtAtom);

	useEffect(() => {
		if (dt) {
			axios
				.post(url, dt, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then(({ data }) => {
					setData(data);
				})
				.catch((errors) => {
					setErrors(errors);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [dt]);

	return { data, isLoading, errors };
};

export const useUpdated = (url, datas, id) => {
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);
	const [errors, setErrors] = useState();

	const [token, setToken] = useRecoilState(jwtAtom);

	useEffect(() => {
		if (datas) {
			axios
				.put(url + id, datas, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then(({ data }) => {
					setData(data);
				})
				.catch((errors) => {
					setErrors(errors);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [data]);

	return { data, isLoading, errors };
};

export const useScoreAddUpdate = (datas) => {
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);
	const [errors, setErrors] = useState();

	const [token, setToken] = useRecoilState(jwtAtom);

	useEffect(() => {
		if (datas) {
			axios
				.put(URL_SCORE + 'addByUser', datas, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then(() => {
					setData(true);
				})
				.catch((errors) => {
					setErrors(errors);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [datas]);

	return { data, isLoading, errors };
};
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
	return { user, isLoading, errors };
};

export const useUpdatedAccount = (file) => {
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);
	const [errors, setErrors] = useState();

	const [token, setToken] = useRecoilState(jwtAtom);
	const [userId, setUserId] = useRecoilState(userIdAtom);
	const url = URL_USER + 'updatedIMG/' + userId;

	const formData = new FormData();
	formData.append('avatar', file);

	useEffect(() => {
		if (formData.get('avatar')) {
			axios
				.post(url, formData, {
					headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
				})
				.then(({ data }) => {
					setData(data);
				})
				.catch((errors) => {
					setErrors(errors);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [file]);

	return { data, isLoading, errors };
};
