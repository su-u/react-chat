import * as React from "react";
import './App.css';
import { firebaseDb } from './firebase/index'


const messagesRef = firebaseDb.ref('messages')

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text : "",
            user_name: "",
            profile_image: "",
            messages : []
        }
    }

    render() {
        return (
            <div className="App">
            <div className="App-header">
                <h2>Chat</h2>
                </div>
                <div className="MessageList">
            </div>
        </div>
    );
    }
}

export default App;