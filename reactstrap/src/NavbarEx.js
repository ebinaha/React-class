import { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class NavbarEx extends Component {
    constructor(props){
        super(props);
        this.state = { collapsed:false }
    }

    toggle = (e) => {
        this.setState({collapsed:!this.state.collapsed})
    }

    render(){
        return(
            <>
                <Navbar color="faded" light>
                    <label>
                        <NavbarBrand href="/" className="mr-auto">
                            Navbar
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2"/>
                    </label>
                    
                    <Collapse isOpen={this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                {/* # : 앵커태그? 같은 화면 내 특정 아이디를 가지고 있는 태그로 스크롤 */}
                                <NavLink href="#"> react </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="http://naver.com"> start </NavLink>
                            </NavItem>
                            
                        </Nav>
                    </Collapse>
                </Navbar>
        
            </>
        )
    }
     
}

export default NavbarEx;
