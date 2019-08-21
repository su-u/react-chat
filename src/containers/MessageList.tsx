import * as React from "react";
import {bindActionCreators} from "redux";
import * as Actions from "../actions/app";
import {connect, Dispatch} from "react-redux";

import Message from "../components/message";

interface Props {
    message_list: any;
    app_actions: any;
}

export class MessageList extends React.Component<Props> {
    componentDidMount() {
        const {app_actions} = this.props;
        app_actions.receiveMessage();
    }

    render() {
        const {message_list} = this.props;

        return (
            <div>
                {message_list &&
                    message_list.map(message => (
                        <Message key={message.id} name={message.name} message={message.message}
                                 timestamp={message.date}/>
                    ))}
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