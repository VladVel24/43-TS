import MyButton from "../../components/MyButton/MyButton";
import MyInput from "../../components/myInput/MyInput"


const Lesson08 = () => {
    return (
        <div className="lesson-container">
            <h3>Lesson 08</h3>
            <p>Один и тот же компонент с типизированными props, но 
                с разеыми данными:
            </p>
            <MyInput />
            <MyInput label="pass" name="password" placeholder="type you pass" type="password"/>
            <h4>CSS modules</h4> 
            <p>Способ написания изолированных CSS стилей в React </p>
            <div>
                <MyButton />
            </div>

        </div>
    );
}

export default Lesson08;








    