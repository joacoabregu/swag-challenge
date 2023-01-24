/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ProductCard from './ProductCard';

const container = css`
  grid-column-start: 1;
  grid-column-end: 4;

  > h1 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 40px;
  }
`;

const cartProducts = [
  {
    name: 'Basic T-Shirt',
    price: '$13.50',
  },
  {
    name: 'Woman bottle',
    price: '$36.50',
  },
  {
    name: 'Unisex Short Sleeve T-Shirt',
    price: '$24',
  },
];

const Cart = () => {
  return (
    <div css={container}>
      <h1>
        Your Cart <span>(3)</span>
      </h1>
      {cartProducts.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
};

export default Cart;
