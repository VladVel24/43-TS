import { useEffect, useState } from "react";


function Hw09 () {


    const [imageUrl, setImageUrl] = useState('') ;
    useEffect(() => {
        fetch('https://randomfox.ca/')
        .then(res => res.json())
        .then(data => setImageUrl(data))
    }, []);

    return (


        <div className="lesson-container">
            <h3>Изображение лисы</h3>
            <img src={imageUrl} alt="" />
            <h4>bild</h4>
        </div>

    );
}

export default Hw09;