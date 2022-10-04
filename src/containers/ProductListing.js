import React , {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {axios} from 'axios'
import ProductComponent from '../containers/ProductComponent'
import {setProducts} from '../redux/actions/productaction'

export default function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const jsonResponse = await response.json();
      console.log(jsonResponse)
      dispatch(setProducts(jsonResponse))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts()
  }, []);
 
  return (
    <div>
      <h2 className='text-center'>Product Listing</h2>
      <div className='container'>
        <ProductComponent/>
      </div>
    </div>
  )
}
