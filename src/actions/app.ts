import {firebaseDb} from '../firebase';

import {Actions as type} from "../actions";

const messagesRef = firebaseDb.ref('messages');

export const login = (name: string) => {
    return {
        type: type.APP_LOGIN,
        login_user_name: name,
    };
};

export const sendMessage = (name: string, text: string, date: string) => dispatch => {
    const message = {name: name, text: text, date: date};
    messagesRef.push(message);
    dispatch({
        type: type.SEND_MESSAGE,
        message: "",
    })
};

function messageSuccess(list) {
    return {
        type: type.RECEIVE_MESSAGE,
        message_list: list,
    }
};

export const receiveMessage = () => dispatch => {
    messagesRef.off();
    messagesRef.on("value", (snapshot) => {
        let messageList = [];
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
        return dispatch(messageSuccess(messageList.reverse()));
    });
};