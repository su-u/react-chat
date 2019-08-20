import * as React from "react";
import {bindActionCreators} from "redux";
import {connect, Dispatch} from "react-redux";
import styled from 'styled-components';
import * as Actions from "../actions/app";
import ChatBox from "./ChatBox";
import MessageList from "./MessageList";



interface Props {
    name: string;
    app_actions: any;
    text: string;
    message_list: any;
}

export class App extends React.Component<Props> {
    render() {
        const {app_actions, name, message_list} = this.props;

        return (
            <div>
                <Container>
                    {name ?
                        `${name} さん、こんにちは。` :
                        (<button onClick={() => {app_actions.login('test');console.log("hello")}}>こんにちは</button>)
                    }
                    <ChatBox />
                    <MessageList />
                </Container>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.app.get("login_user_name"),
        text: state.app.get("send_message"),
        message_list: state.app.get("message_list"),
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        app_actions: bindActionCreators(Actions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;