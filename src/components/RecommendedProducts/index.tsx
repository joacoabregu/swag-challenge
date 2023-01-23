/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from '@mui/material';
import ProductCard from './ProductCard';

const container = css`
  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 24px;
  }
`;

const products = [
  {
    imgURL: '',
    name: 'Unisex Short Sleeve T-Shirt',
    price: '$10 - $24',
    quantity: '24',
  },
  {
    imgURL: '',
    name: 'Unisex Short Sleeve T-Shirt',
    price: '$10 - $24',
    quantity: '24',
  },
  {
    imgURL: '',
    name: 'Unisex Short Sleeve T-Shirt',
    price: '$10 - $24',
    quantity: '24',
  },
  {
    imgURL: '',
    name: 'Unisex Short Sleeve T-Shirt',
    price: '$10 - $24',
    quantity: '24',
  },
  {
    imgURL: '',
    name: 'Unisex Short Sleeve T-Shirt',
    price: '$10 - $24',
    quantity: '24',
  },
];

const RecommendedProducts = () => {
  return (
    <Container component='section' maxWidth='xl' css={container}>
      <p>You might also like</p>
      <div>
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </Container>
  );
};

export default RecommendedProducts;
