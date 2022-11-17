import { Component } from "react";
import { Progress } from 'reactstrap';

class ProgressEx extends Component {
    constructor(props){
        super(props);
        this.state = {progress:0}
    }

    progress = () => {
        // bind : 바깥의 this와 function의 this를 연결시켜줌
        if(this.state.progress !== 100){
            // setInterval : 주어진 시간(50)마다 실행, setTimeout : 한번만 실행
            let id = setInterval(function () {
                // id를 clear해서 종료 : 100%에서 종료
                if (this.state.progress == 100){
                    clearInterval(id);
                    return;
                }

                // progress bar 채워지기
                this.setState({progress:this.state.progress+1})
            }.bind(this), 50);  // 채워지는 속도
        }
    }

    componentDidMount(){
        this.progress();
    }

    render(){
        return (
            <>
                <Progress color="dark" value={this.state.progress}> 
                    {this.state.progress}%
                </Progress>

                <Progress multi>
                    <Progress bar color="warning" value="25"> 25% </Progress>
                    <Progress bar color="success" value="40"> react </Progress>
                    <Progress bar value="15"> start </Progress>
                    <Progress bar color="danger" value="20"> 20% </Progress>
                </Progress>
            </>
        )
    }

}

export default ProgressEx;