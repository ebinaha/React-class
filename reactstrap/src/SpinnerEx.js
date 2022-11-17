import { Component } from "react";
import { Spinner } from 'reactstrap';

class SpinnerEx extends Component {
    render(){
        return(
            <>
                <Spinner color="secondary"/>
                <Spinner color="success"/>
                <Spinner type="grow" color="dark"/>
                <Spinner type="grow" color="infodark"/>
                <Spinner size="sm" color="primary"/>
                {/* em : 배수 */}
                <Spinner style={{width:'10em', height:'0.5em'}} color="dark"/> <br/>
                <Spinner style={{width:'10em', height:'10em'}} color="secondary"/> <br/>
                <Spinner style={{width:'3em', height:'10em'}} type="grow" color="primary"/> <br/>
            </>
        )
    }

}

export default SpinnerEx;