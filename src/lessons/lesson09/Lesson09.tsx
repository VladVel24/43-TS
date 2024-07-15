import { useEffect, useState } from "react";
import MyButton from "../../components/MyButton/MyButton";

interface IDogData {
    message: string;
    status: string;
}

function Lesson09(){

const [count, setCount] = useState(0);  
const [dog, setDog] = useState<IDogData>({
    message: '',
    status: ''

});

const fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => console.log(data));
};

useEffect(() => {
    fetchDog();
}, []);



const handlePlus = () => {
    setCount(prev => prev +1);
};





    
    return(
        <div className="lesson-container">
            <h3>Lesson 09</h3>
            <h4>UseEffect hook⚓️</h4>
            <h5> проблема которую решает этот хук </h5>
            <p> UseEffect - Этo функция, которая принимает в себя два параметра:</p>

            <ol>
                <li> стрелочные функцию с действием, которые вы хотите запустить при определённых условиях </li>
                <li> массив зависимости. В нём через запитую можно указать изменения в каких переменных 
                    будет зависеть запуск действий. Если массив пустой код сработает только при монтировании(mounting) компонента </li>
            </ol>
            <p>({count})</p>
            <MyButton name={'plus'} onClick={handlePlus} />
            

            <p>fetch запрос</p>
            <ul>
                <li>Ассинхронный запрос</li>
                <li> данные приходят не сразу, Их нужно подождать </li>
                <li>В ответ приходит Promise в состоянии Pending(обработка)</li>
                <li> данные которых нужно дождаться и обработать </li>
                <li> первый способ это цепочка из  .then() и методов</li>
                <li> второй асинхронный функции синтаксисом async / await</li>
                <li> В ответ мы хотим получить данные с сервера</li>
                <li> чаще всего он  будет в формате JSON</li>
                <li> данные сервера приходится обрабатывать два раза </li>
                <li> сначала мы дожидаемся самих данных </li>
                <li> потом дожидаемся выполнения синхронного метода .json</li>
            </ul>
        </div>
    );
}
export default Lesson09;