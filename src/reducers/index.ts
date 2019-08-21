// 複数の reducer を合体するメソッドです。
// このファイルについては理解できなくて OK です

import {combineReducers} from "redux";
import app from "./app";

export default combineReducers({
    app,
});
