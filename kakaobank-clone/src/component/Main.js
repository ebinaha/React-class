import {Component} from 'react';
import {Table} from 'reactstrap';
import Section0 from './Section0';

class Main extends Component {
    render(){
        return(
            <div className="main">
                <Table borderless size='sm'>
                    <tbody>
                        {/* tr : 각각의 컴포넌트가 행으로 취급*/}
                        {/* 0번째 행 : tRow 0 */}
                            <Section0/>
                        
                    </tbody>
                </Table>
            </div>
        )
        
    }
}

export default Main;