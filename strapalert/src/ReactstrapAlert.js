
import {Component} from "react";
import {Alert, UncontrolledAlert} from 'reactstrap';

class ReactstrapAlert extends Component {
    render(){
        return(
            <>
                <>
                    <Alert color="primary">
                        Simple Alert [color : primary]
                    </Alert>

                    <UncontrolledAlert color="secondary">
                        Uncontrolled Alert [color : secondary]
                    </UncontrolledAlert>

                    <UncontrolledAlert color="dark">
                        Uncontrolled Alert [color : dark]
                    </UncontrolledAlert>
            
                    <UncontrolledAlert color="danger">
                        Uncontrolled Alert [color : danger]
                    </UncontrolledAlert>

                    <UncontrolledAlert color="warning">
                        Uncontrolled Alert [color : warning]
                    </UncontrolledAlert>

                    <UncontrolledAlert color="success">
                        Uncontrolled Alert [color : success]
                    </UncontrolledAlert>

                    <UncontrolledAlert color="info">
                        Uncontrolled Alert [color : info]
                    </UncontrolledAlert>
                </>
                
            </>
        )
    }
}

export default ReactstrapAlert;