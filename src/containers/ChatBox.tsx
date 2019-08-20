import * as React from "react"
import {bindActionCreators} from "redux";
import * as Actions from "../actions/app"
import {connect, Dispatch} from "react-redux";;

interface Props {
    name: string;
    app_actions: any;
}

export class ChatBox extends React.Component<Props> {
    render() {
        const {name, app_actions} = this.props;
        let input: string;
        return (
            <div className="ChatBox">
                <div className="">
                        <p>{name}</p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                if (input) {
                                    app_actions.sendMessage(name, input, new Date().toString());
                                    input = '';
                                } else {
                                    return
                                }
                            }}
                    >
                        <input onChange={(e) => {input = e.target.value}} placeholder="メッセージ" />
                        <button type="submit">Send</button>
                    </form>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.app.get("login_user_name"),
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
)(ChatBox);