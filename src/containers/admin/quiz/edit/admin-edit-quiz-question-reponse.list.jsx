import { Collapse, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import AdminEditQuizQuestionReponseItem from "./admin-edit-quiz-question-reponse-item";

const AdminEditQuizQuestionReponseList = ({reponses, update, error}) => {
	// console.log(reponses);
	const [data, setData] = useState(reponses)

	const handleUpdate = (el) => {
		if (el) {
			const dt = data.map((e)=>{
				if (e.reponseID === el.reponseID) {
					return el
				}
				return e
			})
			setData(dt)
		}
	}

	useEffect(()=>{
		update(data)
	},[data])

    return (
		<TableRow>
			<TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
				<Collapse in={true} timeout="auto" unmountOnExit>
					<Box sx={{ margin: 1 }}>
						<Grid container>
							<Grid item xs={11}>
								<Typography variant="h6" gutterBottom component="div">
									Reponses
								</Typography>
							</Grid>
						</Grid>
						<Table size="small" aria-label="reponses">
							<TableHead>
								<TableRow>
									<TableCell width="10%">ReponseID</TableCell>
									<TableCell width="10%">IsValid</TableCell>
									<TableCell>Libelle</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{data.map((reponse) => {
									return <AdminEditQuizQuestionReponseItem key={reponse.reponseID} reponse={reponse} update={(e)=>{handleUpdate(e)}} error={(e)=>{error(e)}} />;
								})}
							</TableBody>
						</Table>
					</Box>
				</Collapse>
			</TableCell>
		</TableRow>
	);
}

export default AdminEditQuizQuestionReponseList