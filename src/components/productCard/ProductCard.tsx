import { Link } from 'react-router-dom'
import MyButton from '../MyButton/MyButton'
import style from './productCard.module.css'

interface IProductCardProps {
id: number;
title: string;
price: number;
image: string;
rate?: number;
count?: number;
rating?: {
rate: number;
count: number;
};
}

export default function ProductCard({id, title, price,image, rate, count, rating}: IProductCardProps) {
  return (
    <div key={id} className={style.card}>
    <h5>{title.length > 20 ? title.substring(0, 20) + '...' : title}</h5>
    <span>{price}$</span> 
    <div className={style.imgWrapper}>
        <img src={image} alt={title} />
    </div>
    {/* <span>rate: {rate}</span>
    <span>count: {count}</span>
    {rating && <span>rate from object: {rating.rate}</span>} */}
    <Link to={String(id)}><MyButton name='about product'/></Link>
    </div>
  );
}
