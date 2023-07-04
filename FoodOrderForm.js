import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [order, setOrder] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    alert(`Order Successful!
    Your order was ${order}.
    Please show your confirmation number for pickup.`);
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Name:
        <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
      </label>

      <label htmlFor='phone'>
        Phone:
        <input type='text' id='phone' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>

      <label htmlFor='address'>
        Address:
        <input type='text' id='address' name='address' value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>

      <label htmlFor='order'>
        Order:
        <input type='text' id='order' name='order' value={order} onChange={(e) => setOrder(e.target.value)} />
      </label>

      <button type='submit'>
        Submit Order
      </button>
    </form>
  )
}

export default FoodOrderForm;
