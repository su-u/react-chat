import * as React from "react";
import styled from 'styled-components';

export default class Message extends React.Component {
    render() {
        return (
            <Header><Title>チャット</Title></Header>
        );
    }
}
const Header = styled.div`
    top: 0;
    width: 100%;
    background-color: #202124;
    height: 60px;
    color: white;
    display: flex;
`;

const Title = styled.div`
    padding-left: 30px;
    padding-top: 10px;
    font-weight: 600;
    font-size: 30px;
`;
