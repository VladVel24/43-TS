
import  styles from './heroCard.module.css'

interface IHeroCardProps {
    name: string
    age: number
    isDark: boolean
    lightsaberColors?: string[];
    image: string;
    hasMagic?: boolean
}


function HeroCard({isDark, age, name, image, lightsaberColors }: IHeroCardProps ) {
    return(
        <div className={`${isDark ? styles.dark : styles.light} ${styles.card}`}>
            <h4>{name}</h4>
            <p>Age: {age}</p>
            <div>
            <img width={200} src={image} alt="" />
            </div>
            <p>
                Lightsaber colors:{' '}
                {lightsaberColors?.map((color, index )=> (
                    <span key={index}>{color} </span>
                ))}
            </p>
        </div>

    );
}
export default HeroCard;