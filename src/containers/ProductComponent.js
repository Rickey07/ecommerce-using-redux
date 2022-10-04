import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const {id , title, image, price , category} = product;
    return (
      <div className="card col-2" key={id}>
          <Link to={`/products/${id}`}>
        <img src={image} class="card-img-top" style={{height:"200px" , width:"200px"}} alt="Image not found"/>
          <div className="card-body">
            <div className="card-text">{price}</div>
            <div className="card-title">{title}</div>
            <div className="card-text">{category}</div>
          </div>
          </Link>
        </div>
    )
  })
  return (
    <>
    <div className='row gap-3'>
      {renderList}
    </div>
    </>
  )
  
}
