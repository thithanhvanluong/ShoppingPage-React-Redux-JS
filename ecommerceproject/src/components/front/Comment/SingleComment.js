import React from 'react';
import ReactDOM from "react-dom"
import "./Comment.css";



const SingleComment = (props) => {
    return (
        <div className='comment'>
            <table>
                <tr>
                    <td><img src={props.picture} alt="profile picture" className='avatar' /></td>
                    <td>
                        <a href="/" className="author">{props.name}</a>
                        <span className="date">{props.date} </span>
                        <div className="text">{props.text}</div>
                    </td>

                </tr>
            </table>



        </div>
    )
}
export default SingleComment;