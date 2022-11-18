import { Component } from "react";
import { Button } from 'reactstrap';

class Section5 extends Component {
    render(){
        return(
            <tr>
                <td className={"w-50"}>
                    <div className="imgBox">
                        <img src={require('../img/main-foreignRemittance-new.png')} height="850px" width="550px" alt=""/>
                    </div>
                </td>

                <td className={"w-50"}>
                    <div className="textBox">
                        <span className='L-text'>
                            해외계좌송금과 <br/>
                            WU빠른해외송금을 <br/>
                            더 쉽고, 저렴하게<br/>
                        </span><br/>

                        <span className='S-text'>
                            해외계좌송금이 가능한 22개국을 포함하여   <br/>
                            전세계 200여개국으로 <br/>
                            wu빠른해외송금이 가능합니다. <br/>
                        </span> <br/>

                        <Button color='light' size='sm'> 해외송금 &gt; </Button> <br/>
                    </div>
                </td>
            </tr>
        )
    }
}

export default Section5;