

import styles from './starWarGallery.module.css'
import {forceUsers} from './data'
import HeroCard from '../heroCard/HeroCard'

export default function StarWarGallery() {
    return (
     <div className="lesson-container">         
        <div className={styles.forceUsersGrid}> 
             {forceUsers.map ((hero, index)=> (
             <HeroCard key = {index} age ={hero.age} isDark = {hero.isDark} name = {hero.name} image = {hero.image} />
             ))}
       </div>
    </div>
 )
}