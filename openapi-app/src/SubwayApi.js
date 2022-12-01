import {useState} from 'react';
import axios from 'axios';
import {Button, Table} from 'reactstrap';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

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
            <Table style={{width:"600px", margin:"0 auto"}}>
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

            <LineChart width={1500} height={800} data={row} margin={{top:5, right:30, left:20, bottom:5}}>
                {/* 표의 그리드 : 시작과 끝 사이에 3개씩 그림 */}
                <CartesianGrid strokeDasharray="8 10"/>
                {/* // 승차인원 하차인원수 / x축은 00, 역이름 */}
                <XAxis dataKey={"SUB_STA_NM"}/>
                <YAxis/>
                {/* 가져다놓았을 때 보여주는 것 */}
                <Tooltip/>
                {/* 색 별로 보여주는 것 */}
                <Legend/>

                <Line type="monotone" dataKey={"RIDE_PASGR_NUM"} stroke="#8884d8" activeDot={{r:8}}/> 
                <Line type="monotone" dataKey={"ALIGHT_PASGR_NUM"} stroke="#82ca9d" /> 
            </LineChart>
        </div>
        
    )
}

export default SubwayApi;
