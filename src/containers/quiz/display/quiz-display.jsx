import { Box, Card, CardContent, CardMedia, Grid, InputAdornment, TextField, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react"
import QuizCard from "../game/quiz-card";
import { Link } from "react-router-dom";

const DisplayQuiz = ({quiz}) => {
    const [allQuiz,setAllQuiz] = useState(quiz)
	const [backupQuiz,setBackupQuiz] = useState(quiz)

    const handleSearch = (value) => {
        if (value.length <= 0) {
        	setAllQuiz(backupQuiz);
        } else {
        	const newQuiz = allQuiz.filter((quiz) => {
        		switch (true) {
        			case quiz.name.toLowerCase().startsWith(value.toLowerCase()):
        				return quiz;
        		}
        	});
        	setAllQuiz(newQuiz);
        }
    }

    return (
        <Box sx={{ marginLeft: 30, flexGrow: 1 }}>
            <TextField
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            label="Search"
            variant="outlined"
            onChange={({ target }) => handleSearch(target.value)}
        />
        <br /><br />
            <Grid container>
                <Grid
                    item
                    sx={{
                        m: 1,
                        width: 275,
                        boxShadow: 6,
                        ':hover': {
                            boxShadow: 20,
                        },
                    }}
                    
                >
                    <Card
                        component={Link}
                        to="/quiz/add"
                    >
                        <CardMedia component="img" alt="quiz img" height="200" image="" />
                        <CardContent>
                            <Typography sx={{ fontSize: 18 }} variant="h5" component="div" gutterBottom>
                                add
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {allQuiz.map((e) => (
                    <>
                        &nbsp; &nbsp; &nbsp;
                        <Grid
                            item
                            sx={{
                                m: 1,
                                width: 275,
                                boxShadow: 6,
                                ':hover': {
                                    boxShadow: 20,
                                },
                            }}
                        >
                            <QuizCard quiz={e} />
                        </Grid>
                    </>
                ))}
            </Grid>
        </Box>
    );
}

export default DisplayQuiz