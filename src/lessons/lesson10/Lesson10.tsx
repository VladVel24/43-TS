import { useEffect, useState } from 'react';
import './lesson10.css'



// interface ICatData{
//     message: string;
//     length: number;
// };




function Lesson10 (){
    
    
    const [facts, setFacts] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);


    const fetchCatFact = () => {
        setLoading(true);
        fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(data => {
            setFacts(prevFacts => [...prevFacts, data.fact]);
            setLoading(false);
        })
        
        

};     
  
    useEffect(() => {
        fetchCatFact();
    }, []);

const deleteAll = () => {
    setFacts([]);
}

console.log(facts);


    return(

        <div className="lesson-container">
            <h2>Факты о котах:{facts.length}</h2>
            
            {loading}
            <div className='facts-container'>
                {facts.map((fact,index) => (
                    <p key={index}>{fact} </p>
                ))}
            </div>
            <button onClick={fetchCatFact}>Get More Info </button> 
            
            {facts.length > 0 && (
            <button onClick={deleteAll}>Delete All Data</button>
        )}

        </div>

    );
}

export default Lesson10;