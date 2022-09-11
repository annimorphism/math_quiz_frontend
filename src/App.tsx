import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import LeaderBoardPage from "pages/LeaderBoardPage/LeaderBoardPage";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
// import { messageHandler } from 'services/message_handler';

export interface QuestionType {
	id: string;
	question: string;
}

export interface StoreType {
	username: string;
	score: number;
	questions: QuestionType[];
	currentQuestion: QuestionType | null;
}

export const intialState = {
	username: "",
	score: 0,
	questions: [],
	currentQuestion: null,
};

function App() {
	const [wsConn, setWebsocketConn] = useState<WebSocket | null>(null);

	const [question, setQuestion] = useState<QuestionType | null>(null);

	const [username, setUserName] = useState<string>("");

	// get score as json from a url
	const [score, setScore] = useState<number>(0);

	const [leaderboard, setLeaderboard] = useState<any>([]);

	const [connected, setConnected] = useState<boolean>(false);

	useEffect(() => {
		if (leaderboard.length > 0) {
			console.log(leaderboard);
			let user = leaderboard.find((user: any) => user.name === username);
			if (user) {
				setScore(user.score);
			} else {
				console.error("user not found");
			}
		}
	}, [leaderboard, username]);

	useEffect(() => {
		let ws = new WebSocket("ws://math-quiz-backend.herokuapp.com/ws");
		// Store the websocket connection in state
		ws.onopen = () => {
			setConnected(true);
			if (wsConn === null) {
				setWebsocketConn(ws);
			}
		};
		// On message pass the message to the message handler
		ws.onmessage = (e) => {
			const message = JSON.parse(e.data);

			const type = message.type;

			console.log("Message", message);

			if (type === "get_questions") {
				let question_id = message.question_id;
				let question = message.question;
				setQuestion({ id: question_id, question: question });
			}

			if (type === "answer") {
				let success = message.success;
				if (success) {
					setQuestion(null);
					toast.success(" Correct Answer! ");
				} else {
					toast.error(" Wrong Answer! ");
				}
			}

			if (type === "oldQuestion") {
				toast.error("Too late! The question has already been answered");
			}

			if (type === "score") {
				let score = message.score;
				setLeaderboard(score);
			}

			if (type === "newQuestion") {
				toast.dismiss();
				toast("New Question!");
				let question = message.question;
				setQuestion({ id: message.question_id, question: question });
			}
		};
		ws.onclose = () => {
			setConnected(false);
		};
	}, []);

	return (
		<div className="App">
			<Toaster />
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<HomePage
								ws={wsConn}
								question={question}
								username={username}
								setUserName={setUserName}
								connected={connected}
								score={score}
							/>
						}
					/>
					<Route
						path="/leaderboard"
						element={<LeaderBoardPage ws={wsConn} leaderboard={leaderboard} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
