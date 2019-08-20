import * as React from "react"
import {bindActionCreators} from "redux";
import * as Actions from "../actions/app";
import {connect, Dispatch} from "react-redux";
import Message from "../components/message";

import {firebaseDb} from '../firebase/index';

const messagesRef = firebaseDb.ref('messages');

interface Props {
    message_list: any;
    app_actions: any;
}

export class MessageList extends React.Component<Props> {
    componentDidMount(){
        const {app_actions} = this.props;
        console.log("start");
        app_actions.receiveMessage();
    }
    render() {
        const {message_list, app_actions} = this.props;

        return (
            <div>
                {/*<button onClick={() => app_actions.receiveMessage()}>Fetch</button>*/}
                {message_list ?
                    message_list.map(message => (
                    <Message key={message.id} name={message.name} message={message.message} timestamp={message.date}  />
                )):"a"}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
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
)(MessageList);