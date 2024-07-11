

import MyButton from "../components/MyButton/MyButton"
import Counter from "../components/Counter/Counter"

function Lesson07() {


//let hero: string = "Batman"

interface ISuperhero {
 id: number   
name: string
nickname: string
abilities?: string[]
};

interface ISpaceHeroes extends ISuperhero {
    homePlanet: string
};

interface ISpaceHeroes {
    isAlive? : boolean
};



let hero1: ISpaceHeroes= {
    id: 1,
 name: 'Clark Kent',
 nickname: 'Superman',
 abilities: ['super vision', 'can fly'],
 homePlanet: 'Crypton'
};

let hero2: ISuperhero = {
    id: 2,
name: 'Bruce Wane',
nickname: 'Batman',
abilities:[]
};


const heroes : ISuperhero[] = [hero1, hero2]
console.log(heroes);

type Animal = {
    name: string
    weight: number
}; 

type ExoticAnimal = Animal & {
    country: string
};

let panda: ExoticAnimal = {
    name: 'Po',
    weight: 100,
    country: 'China',
};
console.log(panda);


function makeArray<T>(first:T, second:T):T[] {
    return [first, second]
};

const people = makeArray<number>(100, 7.7);
console.log(people);

const handleHello = () =>{
    console.log('hello');
    
}









    return(
  <div className="lesson-container">
    <h4>Lesson 07</h4>
    <p>Урок  'TypeScript' часть 2 в комментариях</p>
     <div>
        {heroes.map(hero => (

         <div key={hero.id}> 
           <h4> 🦹🏻‍♂️ : {hero.nickname} </h4> 
           <p>Real name: {hero.name}</p>
        </div>
        ))}
     </div>
     <div>
        <MyButton />
        <MyButton name="click" onClick = {() => console.log('click')} />
        <MyButton name="hello" onClick = {handleHello}/>
     </div>
     <Counter />
  </div>
);
}

export default Lesson07;