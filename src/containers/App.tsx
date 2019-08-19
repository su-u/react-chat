import * as React from "react";
import { bindActionCreators } from "redux";
import { connect, Dispatch } from "react-redux";
import styled from 'styled-components';
import {login, ReceiveMessage, SendMessage} from "../actions/app";
import { firebaseDb } from '../firebase/index';


const messagesRef = firebaseDb.ref('messages');

interface Props {
  name: string;
  app_actions: any;
}

export class App extends React.Component<Props> {
  render() {
    const { app_actions, name } = this.props;

    return (
      <Container>
        {name ?
          `${name} さん、こんにちは。` :
          (<button onClick={() => app_actions('test')}>こんにちは</button>)
        }
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.app.get('login_user_name')
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    app_actions: bindActionCreators(login, dispatch),

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;