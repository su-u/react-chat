import * as React from "react"

interface Props {
    name: string;
    message: string;
    timestamp: string;
}

export default class Message extends React.Component<Props> {
    render() {
        return (
            <div className="Message">
                <div className="">
                    <p className="">@{this.props.name}</p>
                    <p className="">{this.props.message}</p>
                    <p className="">{this.props.timestamp}</p>
                </div>
            </div>
        );
    }
}