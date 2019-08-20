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

export function sendMessage(name: string, text: string, date: string) {
    console.log("send");
    return dispatch => {
        messagesRef.push({name: name, text: text, date: date});
    }
}

function fetchTodoSuccess(list) {
    return {
        type: type.RECEIVE_MESSAGE,
        message_list: list,
    }
};

export function receiveMessage() {
    return dispatch => {
        let messageList = [];
        console.log("receive");
        messagesRef.off();
        messagesRef.on("value", (snapshot) => {
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
            return dispatch(fetchTodoSuccess(messageList));
        });
    }
};