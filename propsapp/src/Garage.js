
import React, {Component} from "react";
import Car from "./Car";

// 1) class component 방법
// class Garage extends Component {
//     constructor(props){
//         super(props);
//     }

//     render(){
//         // 1) 데이터 여러개일때 : 객체로 묶어서 넘김
//         const carInfo = {name:"Ford", model:"Mustang"};
//         return(<Car brand={carInfo}/>);
//         // 2) 중괄호 2개 필요 : 변수, 객체
//         // return(<Car brand={{name:"Ford", model:"Mustang"}}/>);
//     }
// }

// 2) functional component 방법 
function Garage(props){
    return <Car brand={{name:"Ford", model:"Mustang"}}/>;
}

export default Garage;
