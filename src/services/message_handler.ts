// import { StoreType } from './../App';
// // NOTE: Always send a response with name and its message type

// export async function messageHandler(message: string, ws: WebSocket, store: StoreType, setStore: React.Dispatch<React.SetStateAction<StoreType>>) {
// // 
//     const jsonString: any = JSON.parse(message);
//     const type: string = jsonString.type;

//     console.log('Message received: ', jsonString);

//     switch(type) {

//       case 'add_user':
//         console.log('Adding user');
//         const success: boolean = jsonString.success;
//         if (!success) {
//           console.log("[JS] User already exists");
//         }
//         console.log("Store value as of now -> ", store);
//         let intialMessage = {type: 'getCurrentQuestion', 'name' : store.username};
//         console.log(intialMessage);
//         ws.send(JSON.stringify(intialMessage));
//         break;

//       case 'getCurrentQuestion':
//         const question: string = jsonString.question;
//         const questionId: string = jsonString.question_id;
//         console.log("Question: ", question);
//         console.log("Question ID: ", questionId);
//         let ques  = {
//           question: question,
//           id: questionId
//         }
//         let storeCopy = {...store};
//         storeCopy.currentQuestion = ques;
//         storeCopy.questions.push(ques);
//         setStore(storeCopy);
//         break;

//       case 'answer':
//         const correct: boolean = jsonString['success'];
//         if (correct) {
//           console.log("Correct answer");
//           let storeCopy = {...store};
//           storeCopy.currentQuestion = null;
//           setStore(storeCopy);
//           break;
//         }
//         // do something with correct
//         break;

//       case 'getLeaderboard':
//         const leaderboard: any = jsonString['leaderboard'];
//         // do something with leaderboard
//         break;

//       case 'newQuestion':
//         const newQuestion: string = jsonString['question'];
//         const newQuestionId: string = jsonString['question_id'];
//         // do something with newQuestion and newQuestionId
//         let storeCopy2 = {...store};
//         let ques2  = {
//           question: newQuestion,
//           id: newQuestionId
//         }
//         storeCopy2.questions.push(ques2);
//         storeCopy2.currentQuestion = ques2;
//         setStore(storeCopy2);
//         break;

//         case 'error':
//         // do something with error
//         console.log("Error from server");
//         console.log(message);
//         break;


//       default:
//         console.log("Default case type");
//         console.log(message);

//     }

//   }
//   catch (err) {
//     console.log('Error in messageHandler [inside catch block]: ', err);
//   }

// }



export {}