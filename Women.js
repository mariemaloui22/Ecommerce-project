
import React, { useEffect, useState } from 'react';
const  Women=()=> {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Could not fetch data');
          }
          const data = await response.json();
          const womenProducts = data.filter(product => product.category === "women's clothing");
          setProducts(womenProducts);
        } catch (error) {
          console.error('Error fetching data', error);
        }
      };
  
      fetchData();
    }, []); 
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">Women's Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-60">{product.description}</p>
              <img src={product.image} alt=''className="w-80 h-80 object-contain"/>  
              <p className="text-gray-800 font-semibold mt-2">Price: ${product.price}</p>
            </div>
          ))}
        </div>
        
      </div>
    );
  };
 export default Women;
