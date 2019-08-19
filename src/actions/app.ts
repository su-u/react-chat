export function login(name: string) {
  return {
    type: "APP_LOGIN",
    login_user_name: name
  };
}

export function SendMessage(text: string, date: string) {
  return {
    type: "SEND_MESSAGE",
    send_message: text,
    send_date: date
  };
}

export function ReceiveMessage(messageList: {[data: string]: string}) {
  return {
    type: "RECEIVE_MESSAGE",
    message_list: messageList,
  };
}
