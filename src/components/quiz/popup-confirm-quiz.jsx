import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import RequestQuizAdd from './request/request-quiz-add';

const PopupConfirm = ({ send, data }) => {
	const [open, setOpen] = useState(true);
	const [quiz, setQuiz] = useState();
	const [sendData, setSendData] = useState(false);

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	const handleClose = () => {
		setOpen(false);
		send(false);
	};

	const handleDataPreparation = () => {
		console.log(data);

		const rawQuizName = data[0].quiz;
		const rawQuestion = data[1].questions;

		const questions = rawQuestion.map(({ libelle, themeID, reponses }) => {
			const reponse = reponses.map(({ libelle, isValid }) => {
				return { libelle: libelle, isValid: isValid };
			});
			return { libelle: libelle, themeID: themeID, reponse: reponse };
		});

		const rawQuiz = {
			name: rawQuizName,
			question: questions,
		};

		setQuiz(rawQuiz);
		setSendData(true);
	};

	return (
		<div>
			{sendData ? (
				<Dialog
					fullScreen={fullScreen}
					open={true}
					onClose={handleClose}
					aria-labelledby="responsive-dialog-title"
				>
					<DialogTitle id="responsive-dialog-title">Saving the Quiz : {data[0].quiz} </DialogTitle>
					<DialogContent>
						<RequestQuizAdd quiz={quiz} />
					</DialogContent>
					<DialogActions>
						<Button autoFocus onClick={handleClose} endIcon={<CloseIcon />} />
					</DialogActions>
				</Dialog>
			) : (
				<Dialog
					fullScreen={fullScreen}
					open={open}
					onClose={handleClose}
					aria-labelledby="responsive-dialog-title"
				>
					<DialogTitle id="responsive-dialog-title">Are you sure to save this quiz?</DialogTitle>
					<DialogContent>
						<DialogContentText>
							The backup will be permanent! No changes after that!
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button autoFocus onClick={handleClose}>
							No
						</Button>
						<Button onClick={handleDataPreparation} autoFocus>
							Yes
						</Button>
					</DialogActions>
				</Dialog>
			)}
		</div>
	);
};

export default PopupConfirm;

// {
//     "result": [
//       {
//         "quizID": "91903389-2582-428e-9af7-9bc7ab21eb1e",
//         "name": "Culture générale 1",
//         "createdAt": "2022-09-14T10:40:03.000Z",
//         "updatedAt": "2022-09-14T10:40:03.000Z",
//         "questions": [
//           {
//             "questionID": 1,
//             "libelle": "Qui a peint la Joconde ?",
//             "themeID": 1,
//             "reponses": [
//               {
//                 "reponseID": 1,
//                 "isValid": false,
//                 "libelle": "Michel-Ange",
//                 "questionID": 1
//               },
//               {
//                 "reponseID": 2,
//                 "isValid": true,
//                 "libelle": "Léonard de Vinci",
//                 "questionID": 1
//               },
//               {
//                 "reponseID": 3,
//                 "isValid": false,
//                 "libelle": "Vincent Van Gogh",
//                 "questionID": 1
//               },
//               {
//                 "reponseID": 4,
//                 "isValid": false,
//                 "libelle": "Jean-Michel Le Louvre",
//                 "questionID": 1
//               }
//             ]
//           },
//           {
//             "questionID": 2,
//             "libelle": "Quelle est la valeur du nombre Pi, arrondie au dix millième ?",
//             "themeID": 1,
//             "reponses": [
//               {
//                 "reponseID": 5,
//                 "isValid": false,
//                 "libelle": "3,14",
//                 "questionID": 2
//               },
//               {
//                 "reponseID": 6,
//                 "isValid": false,
//                 "libelle": "3,142",
//                 "questionID": 2
//               },
//               {
//                 "reponseID": 7,
//                 "isValid": true,
//                 "libelle": "3,1416",
//                 "questionID": 2
//               },
//               {
//                 "reponseID": 8,
//                 "isValid": false,
//                 "libelle": "3,14159",
//                 "questionID": 2
//               }
//             ]
//           },
//           {
//             "questionID": 3,
//             "libelle": "Qui est l'auteur du roman \"le Rouge et le Noir\" ?",
//             "themeID": 1,
//             "reponses": [
//               {
//                 "reponseID": 9,
//                 "isValid": false,
//                 "libelle": "Jeanne Mas",
//                 "questionID": 3
//               },
//               {
//                 "reponseID": 10,
//                 "isValid": false,
//                 "libelle": "Baudelaire",
//                 "questionID": 3
//               },
//               {
//                 "reponseID": 11,
//                 "isValid": false,
//                 "libelle": "Dostoïevski",
//                 "questionID": 3
//               },
//               {
//                 "reponseID": 12,
//                 "isValid": true,
//                 "libelle": "Stendhal",
//                 "questionID": 3
//               }
//             ]
//           },
//           {
//             "questionID": 4,
//             "libelle": "Quel film d'animation de Disney raconte l'histoire d'une jeune Chinoise qui part combattre les Huns à la place de son vieux père ?",
//             "themeID": 1,
//             "reponses": [
//               {
//                 "reponseID": 13,
//                 "isValid": true,
//                 "libelle": "Mulan",
//                 "questionID": 4
//               },
//               {
//                 "reponseID": 14,
//                 "isValid": false,
//                 "libelle": "Alladin",
//                 "questionID": 4
//               },
//               {
//                 "reponseID": 15,
//                 "isValid": false,
//                 "libelle": "Pocahontas",
//                 "questionID": 4
//               },
//               {
//                 "reponseID": 16,
//                 "isValid": false,
//                 "libelle": "Kung Fu Panda",
//                 "questionID": 4
//               }
//             ]
//           },
//           {
//             "questionID": 5,
//             "libelle": "Qui interprète le titre \"Je ne suis pas un héros\" en 1980 ?",
//             "themeID": 1,
//             "reponses": [
//               {
//                 "reponseID": 17,
//                 "isValid": false,
//                 "libelle": "Michel Berger",
//                 "questionID": 5
//               },
//               {
//                 "reponseID": 18,
//                 "isValid": false,
//                 "libelle": "Véronique Sanson",
//                 "questionID": 5
//               },
//               {
//                 "reponseID": 19,
//                 "isValid": true,
//                 "libelle": "Daniel Balavoine",
//                 "questionID": 5
//               },
//               {
//                 "reponseID": 20,
//                 "isValid": false,
//                 "libelle": "Justin Bieber",
//                 "questionID": 5
//               }
//             ]
//           },
//           {
//             "questionID": 6,
//             "libelle": "Quelle série des années 2000 raconte les tribulations de 4 femmes au foyer américaines, habitantes du quartier de Wisteria Lane ?",
//             "themeID": 1,
//             "reponses": [
//               {
//                 "reponseID": 21,
//                 "isValid": true,
//                 "libelle": "Desperate Housewives",
//                 "questionID": 6
//               },
//               {
//                 "reponseID": 22,
//                 "isValid": false,
//                 "libelle": "Grey's Anatomy",
//                 "questionID": 6
//               },
//               {
//                 "reponseID": 23,
//                 "isValid": false,
//                 "libelle": "Super Nanny",
//                 "questionID": 6
//               },
//               {
//                 "reponseID": 24,
//                 "isValid": false,
//                 "libelle": "Malcolm",
//                 "questionID": 6
//               }
//             ]
//           },
//           {
//             "questionID": 7,
//             "libelle": "Qui a été élu Président de la République en France en 2012 ?",
//             "themeID": 1,
//             "reponses": [
//               {
//                 "reponseID": 25,
//                 "isValid": false,
//                 "libelle": "Nicolas Sarkozy",
//                 "questionID": 7
//               },
//               {
//                 "reponseID": 26,
//                 "isValid": false,
//                 "libelle": "Jean-Pierre Pernault",
//                 "questionID": 7
//               },
//               {
//                 "reponseID": 27,
//                 "isValid": false,
//                 "libelle": "Ségolène Royale",
//                 "questionID": 7
//               },
//               {
//                 "reponseID": 28,
//                 "isValid": true,
//                 "libelle": "François Hollande",
//                 "questionID": 7
//               }
//             ]
//           },
//           {
//             "questionID": 8,
//             "libelle": "De combien de joueurs est composée une équipe de football ?",
//             "themeID": 1,
//             "reponses": [
//               {
//                 "reponseID": 29,
//                 "isValid": false,
//                 "libelle": "9",
//                 "questionID": 8
//               },
//               {
//                 "reponseID": 30,
//                 "isValid": true,
//                 "libelle": "11",
//                 "questionID": 8
//               },
//               {
//                 "reponseID": 31,
//                 "isValid": false,
//                 "libelle": "13",
//                 "questionID": 8
//               },
//               {
//                 "reponseID": 32,
//                 "isValid": false,
//                 "libelle": "15",
//                 "questionID": 8
//               }
//             ]
//           },
//           {
//             "questionID": 9,
//             "libelle": "Quelle est la capitale de l'Australie ?",
//             "themeID": 1,
//             "reponses": [
//               {
//                 "reponseID": 33,
//                 "isValid": true,
//                 "libelle": "Canberra",
//                 "questionID": 9
//               },
//               {
//                 "reponseID": 34,
//                 "isValid": false,
//                 "libelle": "Sydney",
//                 "questionID": 9
//               },
//               {
//                 "reponseID": 35,
//                 "isValid": false,
//                 "libelle": "Adélaïde",
//                 "questionID": 9
//               },
//               {
//                 "reponseID": 36,
//                 "isValid": false,
//                 "libelle": "Kangaroo City",
//                 "questionID": 9
//               }
//             ]
//           },
//           {
//             "questionID": 10,
//             "libelle": "Qui est le créateur de l'univers de science-fiction \"Star Wars\" ?",
//             "themeID": 1,
//             "reponses": [
//               {
//                 "reponseID": 37,
//                 "isValid": false,
//                 "libelle": "Steven Spielberg",
//                 "questionID": 10
//               },
//               {
//                 "reponseID": 38,
//                 "isValid": false,
//                 "libelle": "Luke Skywalker",
//                 "questionID": 10
//               },
//               {
//                 "reponseID": 39,
//                 "isValid": true,
//                 "libelle": "George Lucas",
//                 "questionID": 10
//               },
//               {
//                 "reponseID": 40,
//                 "isValid": false,
//                 "libelle": "David Lynch",
//                 "questionID": 10
//               }
//             ]
//           },
//           {
//             "questionID": 11,
//             "libelle": "En 2007, les Etats-Unis ont fait face à la terrible crise :",
//             "themeID": 1,
//             "reponses": [
//               {
//                 "reponseID": 41,
//                 "isValid": false,
//                 "libelle": "Du pétrole",
//                 "questionID": 11
//               },
//               {
//                 "reponseID": 42,
//                 "isValid": true,
//                 "libelle": "Des subprimes",
//                 "questionID": 11
//               },
//               {
//                 "reponseID": 43,
//                 "isValid": false,
//                 "libelle": "De foie",
//                 "questionID": 11
//               },
//               {
//                 "reponseID": 44,
//                 "isValid": false,
//                 "libelle": "Du Covid-19",
//                 "questionID": 11
//               }
//             ]
//           },
//           {
//             "questionID": 12,
//             "libelle": "Où se sont déroulés les Jeux Olympiques d'hiver de 2014 ?",
//             "themeID": 1,
//             "reponses": [
//               {
//                 "reponseID": 45,
//                 "isValid": false,
//                 "libelle": "À Vancouver au Canada",
//                 "questionID": 12
//               },
//               {
//                 "reponseID": 46,
//                 "isValid": false,
//                 "libelle": "À Marseille en France",
//                 "questionID": 12
//               },
//               {
//                 "reponseID": 47,
//                 "isValid": false,
//                 "libelle": "À Séoul en Corée du Sud",
//                 "questionID": 12
//               },
//               {
//                 "reponseID": 48,
//                 "isValid": true,
//                 "libelle": "À Sotchi en Russie",
//                 "questionID": 12
//               }
//             ]
//           },
//           {
//             "questionID": 13,
//             "libelle": "Qui sont les fondateurs de la multinationale informatique \"Microsoft\"",
//             "themeID": 1,
//             "reponses": [
//               {
//                 "reponseID": 49,
//                 "isValid": false,
//                 "libelle": "Steve Jobs et Steve Wozniack",
//                 "questionID": 13
//               },
//               {
//                 "reponseID": 50,
//                 "isValid": false,
//                 "libelle": "Wallace et Gromit",
//                 "questionID": 13
//               },
//               {
//                 "reponseID": 51,
//                 "isValid": true,
//                 "libelle": "Bill Gates et Paul Allen",
//                 "questionID": 13
//               },
//               {
//                 "reponseID": 52,
//                 "isValid": false,
//                 "libelle": "Chuck Norris, seul l'unique",
//                 "questionID": 13
//               }
//             ]
//           },
//           {
//             "questionID": 14,
//             "libelle": "Pour mesurer la magnitude d'un séisme, on utilise l’échelle",
//             "themeID": 1,
//             "reponses": [
//               {
//                 "reponseID": 53,
//                 "isValid": false,
//                 "libelle": "De Beaufort",
//                 "questionID": 14
//               },
//               {
//                 "reponseID": 54,
//                 "isValid": true,
//                 "libelle": "De Richter",
//                 "questionID": 14
//               },
//               {
//                 "reponseID": 55,
//                 "isValid": false,
//                 "libelle": "Du voisin d'en face",
//                 "questionID": 14
//               },
//               {
//                 "reponseID": 56,
//                 "isValid": false,
//                 "libelle": "Télescopique",
//                 "questionID": 14
//               }
//             ]
//           },
//           {
//             "questionID": 15,
//             "libelle": "Comment dit-on \"Joyeux Noël\" en Anglais ?",
//             "themeID": 1,
//             "reponses": [
//               {
//                 "reponseID": 57,
//                 "isValid": false,
//                 "libelle": "Happy New Year",
//                 "questionID": 15
//               },
//               {
//                 "reponseID": 58,
//                 "isValid": false,
//                 "libelle": "Happy Christmas",
//                 "questionID": 15
//               },
//               {
//                 "reponseID": 59,
//                 "isValid": false,
//                 "libelle": "Marie qui se masse",
//                 "questionID": 15
//               },
//               {
//                 "reponseID": 60,
//                 "isValid": true,
//                 "libelle": "Merry Christmas",
//                 "questionID": 15
//               }
//             ]
//           }
//         ]
//       }
//     ],
//     "status": 200
//   }
