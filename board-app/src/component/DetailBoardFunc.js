import {useState, useEffect} from 'react';
import './WriteBoard.css';
import axios from 'axios';

function DetailBoardFunc() {

    const [writer, setWriter] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:8090/boarddetail/7')
        .then((response)=>{
            setWriter(response.data.writer);
            setSubject(response.data.subject);
            setContent(response.data.content);
            setImgUrl('http://localhost:8090/img/'+response.data.filename);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);

    return(
        <section>
            <h2> 게시판 </h2>
            <form>
                <table>
                    <tr>
                        <td className='td_left'>
                            <label for='writer'>
                                글쓴이
                            </label>
                        </td>
                        <td className='td_right'>
                            <input type='text' name='writer' id='writer' value={writer} readOnly/> 
                        </td>
                    </tr>

                    <tr>
                        <td className='td_left'>
                            <label for='subject'>
                                제목
                            </label>
                        </td>
                        <td className='td_right'>
                            <input type='text' name='subject' id='subject' value={subject} readOnly/>
                        </td>
                    </tr>

                    <tr>
                        <td className='td_left'>
                            <label for='content'>
                                내용
                            </label>
                        </td>
                        <td className='td_right'>
                            <textarea name='content' id='content' cols='40' rows='15' value={content} readOnly>
                            </textarea>
                        </td>
                    </tr>

                    <tr>
                        <td className='td_left'>
                            <label for='file'>
                                이미지
                            </label>
                        </td>
                        <td className='td_right'>
                            <img src={imgUrl} alt='' width="300px"/> 
                        </td>
                    </tr>
                </table>

                <section id="commandCell">
                    <a href='#'> 수정 </a>
                    &nbsp; &nbsp;
                    <a href='#'> 삭제 </a>
                </section>
            </form>
            
        </section>
    )
    
}

export default DetailBoardFunc;
