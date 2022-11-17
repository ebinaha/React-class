import { Component } from "react";
import { ListGroup, ListGroupItem, Badge, List } from 'reactstrap';

class ListGroupEx extends Component {
    render(){
        return(
            <ListGroup>
                <ListGroupItem color="danger" className="justify-content-between">
                    Badge 
                    <Badge pill> react </Badge>
                </ListGroupItem>

                <ListGroupItem disabled tag='a' href='#'>
                    Disabled
                </ListGroupItem>

                <ListGroupItem tag='a' href="http://naver.com">
                    Link
                </ListGroupItem>

                <ListGroupItem tag='button' action onClick={e=> alert("button")}>
                    Button
                </ListGroupItem>

            </ListGroup>
        )
    }
}

export default ListGroupEx;