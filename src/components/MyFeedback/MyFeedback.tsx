import './myFeedback.css'
import MyButton from '../MyButton/MyButton';
import { useState } from "react";


export default function MyFeedback() {

    const [likes, setLikes] = useState<number>(0);
    const [dislikes, setDislikes] = useState<number>(0);

    const handleLike = () : void => {
        setLikes(prev => prev + 1) 
    }

    const handleDislike = () : void => {
        setDislikes(prev => prev + 1)
    }

    const resetResult = () : void => {
        setLikes(0);
        setDislikes(0);
    }

    return (

        <div className='feedback-container'>
            <h3>Leave your Feedback</h3>
            <div className='feedback'>
                <span>{likes}</span>
                <MyButton type={'button'} onClick={handleLike} name={'Like'} />
            </div>
            <div className='feedback'>
                <MyButton type={'button'} onClick={handleDislike} name={'Dislike'} />
                <span>{dislikes}</span>
            </div>
            <MyButton className = 'reset-button' type={'button'} onClick={resetResult} name={'Reset Results'} />

        </div>

    );
}