import { Component } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

class TabEx extends Component{
    // Nav를 Tab 형태로 변환
    constructor(props){
        super(props);
        this.state = {tabState:'React'}
    }

    toggle = (tabnum) => {
        if(this.state.tabState !== tabnum){
            this.setState({tabState:tabnum});
        }
    }

    render(){
        return(
            <>
                <Nav tabs>
                    <NavItem>
                        {/* click할 때 tabState를 바꿔주는 역할 */}
                        <NavLink onClick={()=>{this.toggle("React");}}>
                            First Tab
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={()=>{this.toggle("Start");}}>
                            Second Tab
                        </NavLink>
                    </NavItem>
                </Nav>

                {/* tabState(this.state에 연결됨) 변수가 tabID : React일 때 보여줄 내용 */}
                <TabContent activeTab={this.state.tabState}>
                    <TabPane tabId="React"><h3> React 내용 </h3></TabPane>
                    <TabPane tabId="Start"><h3> Start 내용 </h3></TabPane>
                </TabContent>
            </>
        
        )
    }

}

export default TabEx;
