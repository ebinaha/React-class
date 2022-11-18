import {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);

        this.ulStyle = {
            listStyle:'none',
            margin:'0 auto',
        }
    }
    
    render(){
        return(
            <div>
                <ul style={this.ulStyle}>
                    <li>
                        {/* url 변경 */}
                        <Link to={'/'}> 나의 컴포넌트 1 </Link>
                    </li>
                    <li>
                        <Link to={'/mycom2'}> 나의 컴포넌트 2 </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;