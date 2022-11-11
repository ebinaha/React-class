import {Component} from 'react';

class ReactState extends Component {
    constructor(props){
        super(props);
        this.state = { 
            StateString : this.props.reactString,
            StateNumber : 200
        };
    }
    
    stateChange = () => {
        // this.state.StateNumber = 300;    => 변경 안됨
        // this.forceUpdate();              => 강제로 변경시켜줌, 결과는 같음
        this.setState({...this.state, StateNumber:500});
    }


    render(){
        return (
            <div>
                <div>
                    {/* 가져와서 씀, 변경했을 때 변경은 되지 않음 */}
                    {this.state.StateString}
                    {this.state.StateNumber}
                </div>
                {/* 버튼을 누르면 StateNumber를 200 => 300 으로 변경 : setState 함수를 통해서만 변경 가능 */}
                {/* <button onClick={(e)=>{this.state.StateNumber=300}}>300</button> => 변경 불가 */}

                {/* 1) setState 함수를 이용해서 변경 */}
                {/* <button onClick={(e)=>{this.setState({...this.state, StateNumber:300})}}>300</button> */}
                {/* 2) 함수를 분리해서 변경 */}
                <button onClick={(e)=>{this.setState({...this.state, StateString:"리액트"})}}>리액트2</button>
                <button onClick={(e)=>this.stateChange()}>500</button>
            </div>
        )

    };
}

export default ReactState;