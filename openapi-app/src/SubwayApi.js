import axios from 'axios';

function SubwayApi(){
    const apiRequest = () => {
        axios.get("http://openapi.seoul.go.kr:8088/79415655796265613130364b44784474/json/CardSubwayStatsNew/1/10/20221019")
        .then((response) => {
            console.log(response.data)
        }).catch((err)=>{

        })
    }

    return (
        <button onClick={apiRequest}> 데이터 가져오기 </button>
    )
}

export default SubwayApi;
