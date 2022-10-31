import React from 'react';
import "./Comment.css";
import SingleComment from './SingleComment';
import pic1 from "./images/pic1.jpg"
import pic2 from "./images/pic2.jpg"
import pic3 from "./images/pic3.jpg"

/*const Signup = () => {
    return (
        <div className="signup">
            Signup HELLO
        </div>
    )
};*/
const Comment = () => {
    return (
        <div className="signup">
            <SingleComment name="Alex" text="I got good deal from the store" picture={pic1} date="Today at 5 pm" />
            <SingleComment name="Sarah" text="Staffs are friendly to help me find the product I want" picture={pic2} date="Today at 6 pm" />
            <SingleComment name="Curtis" text="It's good for money (not a gamng computer)" picture={pic3} date="Today at 7 pm" />
        </div>
    )
}

export default Comment;