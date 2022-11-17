import { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';
// InputGroupAddon : reactstrap 9.0이상 버전 depricated

class InputGrouopEx extends Component{
    render(){
        return(
            <>
                <InputGroup>
                    <Input placeholder="userid"/>
                    <InputGroupAddon addonType="append">
                        <InputGroupText> @reactmail.com</InputGroupText>
                    </InputGroupAddon>
            
                </InputGroup>

                <InputGroup>
                    {/* input group 안 어디에 붙일지 */}
                    <InputGroupAddon addonType="prepend">
                        <Button> 버튼 </Button>
                    </InputGroupAddon>
                    <Input />
                </InputGroup>
            </>
        )
    }

}

export default InputGroup;