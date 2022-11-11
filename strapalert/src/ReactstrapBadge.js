import {Component} from "react";
import {Badge, Button} from 'reactstrap';

class ReactstrapBadge extends Component{
    render(){
        return(
            <>
                <h1> PRODUCT NAME <Badge color="secondary">hit</Badge> </h1>
                <Button color="secondary" outline>
                    Accessor <Badge color="dark">4</Badge>
                </Button>
                <br></br>

                <Badge color="danger" pill>pill</Badge>
                <Badge href="http://naver.com" color="info">GoLink</Badge>
            </>
        )
    }
}

export default ReactstrapBadge;