import { Component } from "react";
import {Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

class PopoverEx extends Component {
    render(){
        return(
            <>
                <Button id="popover_id" type="button">
                    Popover button 
                </Button>

                <UncontrolledPopover placement="right" target="popover_id">
                    <PopoverHeader> React start </PopoverHeader>
                    <PopoverBody>
                        Aenean id magna id risus congue ornare.
                        Vestibulum sed diam et pulvinar facilisis sed eu rusus.
                    </PopoverBody>
                </UncontrolledPopover>
            </>
        )
    }

}

export default PopoverEx;