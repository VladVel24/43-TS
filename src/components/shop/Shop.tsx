import { useEffect, useState } from 'react';
import style from './shop.module.css'
import ProductCard from '../productCard/ProductCard';
import Loader from '../loader/Loader';




//1 прописали типизацию из массива
export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export default function Shop() {
//3 кладем данные в state
const [products , setProducts] = useState<IProduct[]>([]);

const[loading, setLoading] = useState(false);

//2 объявляем функцию через asynk или then
async function getData() {
    setLoading(true)
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
    setLoading(false)
}

//вызываем Effect,чтоб  не попасть в бесконечный цикл
useEffect(() => {
    getData();
}, []);

  return (
    <>
    <h3>Shop 🗑️</h3>
  
    {loading && <Loader />}
    {products.length > 0 && (
        

        <div className={style.container}>
       
            {products.map((product) => (
                    
                //5 этот код можно вынести в отдельный компонент и данные передавать
                //через props
                <ProductCard key={product.id} id={product.id} title={product.title} price={product.price}image={product.image}
                rate={product.rating.rate} count={product.rating.count} />
                //здесь заканчивается код для отдельной карточки
            ))}
        </div>
    )}
    </>
  );
}
