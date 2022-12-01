import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

function SubwayLineChart({row}){
    return(
        <>
            {/* <ResponsiveContainer width={1000%} aspect={4 / 1}> */}
            <LineChart width={1300} height={500} data={row} margin={{top:5, right:30, left:20, bottom:5}}>
            {/* 표의 그리드 : 시작과 끝 사이에 3개씩 그림 */}
            <CartesianGrid strokeDasharray="3 3"/>
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
            {/* </ResponsiveContainer> */}
        </>
    )
}

export default SubwayLineChart;