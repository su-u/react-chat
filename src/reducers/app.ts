import {Map} from "immutable";
import {Actions as type} from "../actions";

export default function (state, action) {
    switch (action.type) {
        case type.APP_LOGIN:
            return state.set("login_user_name", action.login_user_name);
        case type.SEND_MESSAGE:
            return state
                .set("send_date", new Date().toString())
                .set("send_name", action.send_date)
                .set("send_message", action.send_message);
        case type.RECEIVE_MESSAGE:
            return state.set("message_list", action.message_list);
        default:
    }
    return state || Map({login_user_name: ""});
}
