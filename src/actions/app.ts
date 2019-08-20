import {Map} from "immutable";
import {firebaseDb} from '../firebase/index';

import {Actions, Actions as type} from "../actions"
import {Dispatch} from "redux";

const messagesRef = firebaseDb.ref('messages');

export function login(name: string) {
    return {
        type: type.APP_LOGIN,
        login_user_name: name
    };
}

export const sendMessage = (name: string, text: string, date: string) => dispatch =>{
    console.log("send");
    const article = {name: name, text: text, date: date};
    messagesRef.push(article);
    dispatch({
        type: type.SNED_MESSAGE,
    })
};

function fetchTodoSuccess(list) {
    return {
        type: type.RECEIVE_MESSAGE,
        message_list: list,
    }
};

export const receiveMessage = () => dispatch => {
    messagesRef.off();
    messagesRef.on("value", (snapshot) => {
        let messageList= [];
        snapshot.forEach((doc) => {
            const key = doc.key;
            const value = doc.val();
            messageList.push({
                id: key,
                name: value.name,
                message: value.text,
                date: value.date
            });
        });
        console.log(messageList.length);
        return dispatch(fetchTodoSuccess(messageList));
    });
};