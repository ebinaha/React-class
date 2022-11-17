import { Component } from "react";
import { Button, Fade }from 'reactstrap';

class FadeEx extends Component{ 
    constructor(props){
        super(props);
        this.state = {fadeInOut:true} //fadein을 default = true
    }

    toggle = (e) => {
        this.setState({fadeInOut: !this.state.fadeInOut}) // 새로운 변수(객체로 엎어씀) : !기존변수(이미 있는 객체의 값)

    }

    render(){
        return(
            <>
                <Button color="success" onClick={this.toggle}>Fade In/Out</Button>
                <Fade in={this.state.fadeInOut} tag="p">
                    h1 태그로 감싸서 fadein fadeout
                </Fade>
            </>
        )
    }
   
}

export default FadeEx;