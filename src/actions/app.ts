import {Actions as type } from "../actions"

export function login(name: string) {
  return {
    type: type.APP_LOGIN,
    login_user_name: name
  };
}

export function SendMessage(text: string, name: string, date: string) {
  return {
    type: type.SEND_MESSAGE,
    send_date: date,
    send_name: name,
    send_message: text
  };
}

export function ReceiveMessage(messageList: {[data: string]: string}) {
  return {
    type: type.RECEIVE_MESSAGE,
    message_list: messageList,
  };
}
