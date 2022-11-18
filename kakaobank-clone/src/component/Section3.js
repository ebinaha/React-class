import { Component } from "react";
import {Badge, Button} from 'reactstrap';

class Section3 extends Component {
    render(){
        return(
            <tr>
                <td className={"w-50"}>
                    <div className="imgBox">
                        <img src={require('../img/main-moim.png')} height="750px" width="550px" alt=""/>
                    </div>
                </td>

                <td className={"w-50"}>
                    <div className="textBox">
                        <span className='L-text'>
                            함께 쓰고 같이 보는 <br/>
                            <Badge color="warning"> B </Badge> &nbsp;
                            모임통장 <br/>
                        </span><br/>

                        <span className='S-text'>
                            토토톡 친구를 바로 모임통장으로 초대하고  <br/>
                            친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다. <br/>
                            재미있는 메시지 카드로 회비 입금 요청도 해보세요. <br/>
                        </span> <br/>

                        <Button color='light' size='sm'> 모임통장 &gt; </Button> <br/>
                    </div>
                </td>
            </tr>

        )
    }
}

export default Section3;