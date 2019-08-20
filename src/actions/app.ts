import {Actions as type } from "../actions"
import {firebaseDb} from '../firebase/index';
const messagesRef = firebaseDb.ref('messages');

export function login(name: string) {
  return {
    type: type.APP_LOGIN,
    login_user_name: name
  };
}

export function sendMessage(name: string, text: string, date: string) {
    console.log("send");
    return dispatch => {
        messagesRef.push({name: name, text: text, date: date});
    }
}

export function receiveMessage() {
    messagesRef.on('message',(snapshot) => {
        let messageList=[];
        snapshot.docs.forEach((doc) => {
            const message = doc.data();
            messageList.push({
                id: doc.id,
                ...message
            });
        });
        return dispatch => ({
            type: type.RECEIVE_MESSAGE,
            message_list: messageList
        })
    })
}