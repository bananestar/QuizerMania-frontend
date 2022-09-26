import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';

const QuizFormTheme = ({ themes, themeID, theme, lock }) => {
	const [themeSelected, setThemeSelected] = useState();
	const ID = themeID;

	const themeSelectDefault = themes.map(({ themeID, name }) => {
		if (themeID === ID) {
			return themeID;
		}
	});

	useEffect(() => {
		setThemeSelected(themeSelectDefault[0]);
	}, []);

	const handleChange = (event) => {
		setThemeSelected(event.target.value);
	};

	useEffect(() => {
		theme(themeSelected);
	}, [themeSelected]);
	return (
		<>
			<FormControl sx={{ width: 200 }}>
				<InputLabel id="theme-select-label">Theme :</InputLabel>
				<Select
					disabled={lock}
					labelId="theme-select-label"
					id="theme-select"
					value={themeSelected}
					label="Theme"
					onChange={handleChange}
					margin="dense"
					variant="filled"
				>
					{themes.map(({ themeID, name }) => {
						return (
							<MenuItem key={themeID} value={themeID}>
								{name}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</>
	);
};

export default QuizFormTheme;
