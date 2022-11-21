import React from 'react'

const Product = (props) => {
    const {product}=props;
    return (
    <div>
    <img src={product.image} alt="pizza" />
    <div className='text-center'>
    <h2 className='text-lg py-2 font-bold'>{product.name}</h2>
    <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>
      {product.size}
    </span>
    </div>
    <div className='flex justify-between mt-4 items-center'>
      <span className=''>{product.price}</span>
      <button className='bg-yellow-400 rounded-full px-4 py-1 font-bold'>ADD</button>
    </div>
  </div>
  )
}

export default Product