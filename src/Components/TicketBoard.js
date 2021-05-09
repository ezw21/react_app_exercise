import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
class TicketBoard extends React.Component {
    render() {
        return (
            <Card style={{ width: "50rem", backgroundColor:'rgba(52, 52, 52, 0.4)' }}>
                {/* <Card.Img variant="top" src="favicon.png" />
                <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Simple Ticket Board</Card.Title>
                    <Card.Text>
                        A simple ticket board that have 3 buttons to perform
                        CRUD, create, update, delete
                    </Card.Text>
                </Card.Body>
                <button onClick={this.resetState}>Reset Question</button>
                <Card.Text style={{backgroundColor:'rgba(0, 0, 255, 0.4)' }}>{this.state.data}</Card.Text>
                <Card.Header>Featured</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item align="left">
                        Paste a new ticket on TicketBoard
                    </ListGroup.Item>
                    <Row align="left">
                        <Button variant="primary" onClick={this.updateState}>
                            Create ticket
                        </Button>
                    </Row >
                    <ListGroup.Item align="center">
                        Modify an existing ticket from TicketBoard
                    </ListGroup.Item>
                    <Row align="center">
                        <Button variant="primary"  onClick={this.updateState}>
                            Update Ticket
                        </Button>
                    </Row>
                    <ListGroup.Item align="right">
                        Remove a ticket from TicketBoard
                    </ListGroup.Item>
                    <Row align="right">
                        <Button variant="primary" onClick={this.updateState}>
                            Delete Ticket
                        </Button>
                    </Row>
                </ListGroup>
            </Card>
        );
    }

    constructor(props) {
        super(props);

        this.state = {
            data: "Guess Mr Piggy's gender...",
        };
        this.updateState = this.updateState.bind(this);
        this.resetState = this.resetState.bind(this);
    }
    updateState() {
        this.setState({ data: "isBoy" });
    }
    resetState() {
        this.setState({ data: "Guess Mr Piggy's gender..." });
    }
}
export default TicketBoard;
