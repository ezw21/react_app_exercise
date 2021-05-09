import React from "react";

class Ticket extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                {/* <h1>Header</h1>
                <h2>Content</h2>
                <p>The content text!!!</p> */}
            </div>
        );
    }
}
export default Ticket;
