
import {Component} from "react";

// 1) class component 방법
// class Car extends Component{
//     constructor(props){
//         super(props);
//     }

//     render() {

//         // 데이터 여러개일 때 : .속성
//         return <h2> I am a {this.props.brand.model} </h2>
//     }
// }

// 2) functional component 방법 
// function Car(props){
//     return <h2> I am a {props.brand.name} </h2>
// }
// direct로 {}로 받아서 사용하기도 함
function Car({brand}){
    return <h2> I am a {brand.model} </h2>
}

export default Car;