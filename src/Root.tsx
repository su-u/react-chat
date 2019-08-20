// Redux の更新があったときに React を呼ぶ処理です
// このファイルについては理解できなくて OK です

import * as React from "react";
import {Provider} from "react-redux";
import App from "./containers/App";
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

export default ({store}) => (
    <Provider store={store}>
        <App/>
    </Provider>
);
