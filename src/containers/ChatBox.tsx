import * as React from "react"
import {bindActionCreators} from "redux";
import * as Actions from "../actions/app"
import {connect, Dispatch} from "react-redux";
import styled from 'styled-components';

import Input from "../components/Input";
import Button from "../components/Button";
import UserField from "../components/UserField";

interface Props {
    name: string;
    app_actions: any;
}

export class ChatBox extends React.Component<Props> {
    render() {
        const {name, app_actions} = this.props;
        let input: string;

        return (
            <UserField>
                <p>ようこそ {name} さん</p>
                <form>
                    <DisableInput/>
                    <Input type="text" onChange={(e) => {
                        input = e.target.value;
                    }} placeholder="メッセージ"
                    />
                    <Button type="reset" value="Submit" onClick={(e) => {
                        if (input) {
                            app_actions.sendMessage(name, input, dateToStr24HPad0(new Date(), 'YYYY/MM/DD hh:mm:ss'));
                            input = "";

                        } else {
                            return "";
                        }
                    }}>送信</Button>
                </form>

            </UserField>
        );
    }
}

function dateToStr24HPad0(date: any, format: string) {
    if (!format) {
        format = 'YYYY/MM/DD hh:mm:ss'
    }
    format = format.replace(/YYYY/g, date.getFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    return format.toString();
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


const DisableInput = styled.input.attrs({
    type: 'text',
})`
    display: none;
`;