import {useState, useEffect} from 'react';
import axios from 'axios';


function ListBoard(){

    const [boards, setBoards] = useState([]);   //변수가 배열

    useEffect(()=> {
        axios.get('http://localhost:8090/boardlist')
        .then((response)=>{
            setBoards(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);


    return(
        <>        
            <h2> 
                글 목록 <a href="#"> 게시판 글쓰기 </a> 
            </h2>
            <section>
                <table>
                    <tbody>
                        <tr id='tr_top'>
                            <th> 번호 </th>
                            <th> 작성자 </th>
                            <th> 제목 </th>
                        </tr>

                        {
                            boards.map((board)=>(
                                <tr key={board.id}>
                                    <td> {board.id} </td>
                                    <td> {board.writer} </td>
                                    <td> {board.subject} </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </section>
        </>

    )
}

export default ListBoard;