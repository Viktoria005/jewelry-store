// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const ProductDetail = () => {
//   const { id } = useParams(); // Get product ID from URL parameter
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost/jewelry-store/jewelry-store-php/products.php?id=${id}`)
//       .then(response => {
//         setProduct(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching product details:', error);
//       });
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{product.productName}</h2>
//       <img src={product.imageUrl} alt={product.productName} />
//       <p>Price: ${product.price}</p>
//       <p>Description: {product.description}</p>
//     </div>
//   );
// };

// export default ProductDetail;
