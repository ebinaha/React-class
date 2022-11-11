
import React, {Component} from 'react';

// Component LifecycleEx
class LifecycleEx extends Component{

    // 1) 컴포넌트 생성과 동시 : 
    constructor(props){
        // 부모생성자 호출 : 생성될 때 가져온 property 전달
        super(props);
        this.state = {name:props.name, age:props.age};
        console.log("constructor");
    }
    
    // 2)
    // static getDerivedStateFromProps(props, state){
    //     console.log("getDerivedStateFromProps: name-"+props.name+" age-"+props.age);
            // state 변수를 초기화
    //     return {name:props.name, age:props.age};
    // }

    // 3) 화면에 뿌려짐
    render(){
        console.log("render");
        return <h1>Lifecycle Test : {this.state.name}, {this.state.age}</h1>
    }

    // 4) 화면에 다 뿌려지고 나중에 호출 : 생성된 객체(element)를 조작
    componentDidMount(){
        console.log("componentDidMount");
        // state값 변경
        this.setState({...this.state, name:"kang"});
        // this.setState({name:"kang", age:20});
        console.log(this.state.name);
    }
    
    // 5) state 변수가 변경될 때 자동 호출 : true를 반환할 때 데이터 변경
    shouldComponentUpdate(props, state){
        console.log("shouldComponentUpdate");
        return true;
    }




}

export default LifecycleEx;