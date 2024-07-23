import { useParams } from 'react-router'
import style from './productPage.module.css'
import { useEffect, useState } from 'react';
import { IProduct } from '../shop/Shop';
import MyButton from '../MyButton/MyButton';
import { Link } from 'react-router-dom';

const initialProduct: IProduct = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: {
    rate: 0,
    count: 0
  }
};

export default function ProductPage() {

    const {id} = useParams();

    const[product, setProduct] = useState<IProduct>(initialProduct);

    useEffect(()=> {
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));      
    }, [id]);
        
    
  return (
    <div>
     <h3>{product.title}</h3>     
      <p>{product.description}</p>
      <img src={product.image} width={200} alt="" />
      <div>
      <Link to={'/my-shop'}><MyButton name='back to shop'/></Link>
      </div>
    </div>
  )
}
