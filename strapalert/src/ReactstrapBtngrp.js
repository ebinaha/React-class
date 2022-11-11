import {Component} from "react";
import {Button, ButtonGroup} from 'reactstrap';

class ReactstrapBtngrp extends Component {
    constructor(props){
        super(props);
        this.state = {number:0};
    }

    move = (type, e) => {
        if (type == 'Left'){
            this.setState({number:this.state.number-1})
        } else if (type == 'Right'){
            this.setState({number:this.state.number+1})
        }
    }

    render(){
        return (
            <>
                <ButtonGroup style={{padding:'0px'}}>
                    <Button onClick={(e=>this.move('Left'))}> Left </Button>
                    <Button onClick={(e=>this.move('Right'))}> Right </Button>
                </ButtonGroup>
                <br/> {this.state.number} <br/><br/>

                <Button color="primary">blue</Button>
                <Button color="info">teal</Button>
                <Button color="success">green</Button>
                <Button color="warning">yellow</Button>
                <Button color="danger">red</Button>
                <Button color="light">white</Button>
                <Button color="dark">black</Button>
                <Button color="secondary">grey</Button>


            </>
        )
    }
}

export default ReactstrapBtngrp ;
