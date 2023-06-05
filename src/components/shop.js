import React from 'react'

const ShopCart = ({products}) => {
  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
        <h1>{item.name}</h1>
        <img src={item.img} alt={item.name}/>
        </div>
      ))}
    </div>
  );
}

export default ShopCart;