import { Component } from "react";
import { Table } from 'reactstrap';

class TableEx extends Component{
    // 데이터를 하나의 객체 배열 형태로 가져옴 : Row 하나가 한 객체
    render(){
        return(
            // bordered, dark, striped, hover
            <Table borderless dark hover size="sm">
                <thead>
                    <tr>
                        <th> number </th>
                        <th> Book Name </th>
                        <th> Price </th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"> 1 </th>
                        <td> React start </td>
                        <td> $2000 </td>
                    </tr>
                    <tr>
                        <th scope="row"> 2 </th>
                        <td> React start </td>
                        <td> $3000 </td>
                    </tr>
                    <tr>
                        <th scope="row"> 3 </th>
                        <td> React start3 </td>
                        <td> $3000 </td>
                    </tr>
                    <tr>
                        <th scope="row"> 4 </th>
                        <td> React start4 </td>
                        <td> $3000 </td>
                    </tr>
                </tbody>
            </Table>    
        )
    }
}

export default TableEx;