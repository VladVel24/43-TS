
import './myButton.css'

interface IMyButtonProps {
    
    className?: string
    name?: string
    type?: 'button' | 'submit' | 'reset' 
    onClick?: ()=> void;
    
    
}

export default function MyButton({type ='button', onClick, name = 'default'} :IMyButtonProps) {
    //console.log(props);
    return (
     <button type = {type} onClick = {onClick} 
     className='myButton'>{name}</button> 

    );  
}