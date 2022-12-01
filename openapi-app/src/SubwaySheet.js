import {Button, Table} from 'reactstrap';


function SubwaySheet ({row}) {
    return (
        <div>
            
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
            
          
        </div>
    )
}

export default SubwaySheet;