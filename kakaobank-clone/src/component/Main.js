import {Component} from 'react';
import {Table} from 'reactstrap';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

class Main extends Component {
    render(){
        return(
            <div className="main">
                <Table borderless size='sm'>
                    <tbody>
                        {/* tr : 각각의 컴포넌트가 행으로 취급*/}
                        {/* 0번째 행 : tRow 0 */}
                            <Section0/>
                            <Section1/>
                            <Section2/>
                            <Section3/>
                            <Section4/>
                            <Section5/>
                            <Section6/>
                        
                    </tbody>
                </Table>
            </div>
        )
        
    }
}

export default Main;