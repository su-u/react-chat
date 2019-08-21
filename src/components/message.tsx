import * as React from "react"
import styled from 'styled-components';


interface Props {
    key: string
    name: string;
    message: string;
    timestamp: string;
}

export default class Message extends React.Component<Props> {
    render() {
        const {name, message, timestamp} = this.props;

        return (
            <MessageContainer>
                <TopContainer>
                    <Name>{name}</Name>
                    <Time>{timestamp}</Time>
                </TopContainer>
                <MessageTextContainer><p>{message}</p></MessageTextContainer>
            </MessageContainer>
        );
    }
}
const MessageContainer = styled.div`
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
    display: block;
    padding: 0.5rem;
    margin-top: 0.5rem;
`;

const MessageTextContainer = styled.div`
  margin: 0 0.5rem;
`;
const TopContainer = styled.div`
    display: flex;
`;
const Name = styled.div`
    font-weight: 600;
    margin: 0 0.5rem;
`;

const Time = styled.div`
    font-size: 14px;
    margin-left: 1.5rem;
`;
