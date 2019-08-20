import * as React from "react"

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
            <div className="Message">
                <div className="">
                    <p className="">{name}</p>
                    <p className="">{message}</p>
                    <p className="">{timestamp}</p>
                </div>
            </div>
        );
    }
}