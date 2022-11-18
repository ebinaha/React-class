import { Component } from "react";
import { Button } from 'reactstrap';

class Section4 extends Component {
    render(){
        return(
            <tr>
                <td className={"w-50"}>
                    <div className="textBox" style={{paddingLeft:'200px'}}>
                        <span className='L-text'>
                            함께 도전해서 <br/>
                            재미있는 26주적금 <br/>
                        </span><br/>

                        <span className='S-text'>
                            26주동안 변화하는 재미에 빠져있는 사이  <br/>
                            어느덧 만기 달성 경험을 맛보게 됩니다. <br/>
                        </span> <br/>

                        <Button color='light' size='sm'> 26주적금 &gt; </Button> <br/>
                    </div>
                
                </td>

                <td className={"w-50"}>
                    <div className="imgBox">
                        <img src={require('../img/main-26weeks.png')} height="408px" width="520px" alt=""/>
                    </div>
                
                </td>

            </tr>
        )
    }
}

export default Section4;