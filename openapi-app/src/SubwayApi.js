import {useState} from 'react';
import axios from 'axios';
import {Button, Table} from 'reactstrap';

function SubwayApi(){
    const [row, setRow] = useState([]);

    const apiRequest = () => {
        axios.get("http://openapi.seoul.go.kr:8088/79415655796265613130364b44784474/json/CardSubwayStatsNew/1/10/20221019")
        .then((response) => {
            console.log(response.data)
            // 사용할 배열만 가져오기
            console.log(response.data.CardSubwayStatsNew.row)

            setRow(response.data.CardSubwayStatsNew.row);
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <br/>
            <Button color="success" outline onClick={apiRequest}> 데이터 가져오기 </Button>
            <br/><br/>
            <Table>
                <thead>
                    <tr className='table-success'>
                        <th> 날짜 </th>
                        <th> 라인 </th>
                        <th> 역이름 </th>
                        <th> 승차 인원수 </th>
                        <th> 하차 인원수 </th>
                    </tr>

                </thead>

                <tbody>
                    {
                        row.map(item => (
                            <tr key={item.SUB_STA_NM}>
                                <td> {item.USE_DT} </td>
                                <td> {item.LINE_NUM} </td>
                                <td> {item.SUB_STA_NM} </td>
                                <td> {item.RIDE_PASGR_NUM} </td>
                                <td> {item.ALIGHT_PASGR_NUM} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
        
    )
}

export default SubwayApi;
