import {Map} from "immutable";
import {Actions as type} from "../actions";

export default function (state, action) {
    switch (action.type) {
        case type.APP_LOGIN:
            return state.set("login_user_name", action.login_user_name);
        case type.RECEIVE_MESSAGE:
            console.log("R_M")
            return state.set("message_list", action.message_list);
        default:
    }
    return state || Map({login_user_name: "", message_list: []});
}
