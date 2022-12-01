import {useState, useEffect} from 'react';
import {XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Line, Bar} from 'recharts'

function SubwayComposedChart({row}){
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(
            row.map((item) => ({
                역이름: item.SUB_STA_NM,
                승차인원수: item.RIDE_PASGR_NUM,
                하차인원수: item.ALIGHT_PASGR_NUM,
                유동인구수: item.RIDE_PASGR_NUM + item.ALIGHT_PASGR_NUM,
            }))
        );
    }, []);

    return(
        <>
            <ComposedChart width={1300} height={500} data={data} margin={{top:5, right:30, left:20, bottom:5}} style={{margin:"0 auto"}}>        
                <CartesianGrid strokeDasharray="3 3"/>            
                <XAxis dataKey={"역이름"}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                {/* 속성 확인 */}
                <Bar type="monotone" dataKey={"유동인구수"} fill="#ff9205"/>  
                <Line type="monotoneX" dataKey={"승차인원수"} stroke="#111111" activeDot={{r:8}} />   
                <Line type="monotoneX" dataKey={"하차인원수"} stroke="#36acd7" activeDot={{r:8}} />              
            </ComposedChart>  
        </>
    )


}

export default SubwayComposedChart;