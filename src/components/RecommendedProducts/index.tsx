/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from '@mui/material';
import ProductCard from './ProductCard';
import ProductPhoto from '../../assets/Photo.png'

const container = css`
margin-bottom: 120px;
  > p {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
  }
  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    column-gap: 24px;
    row-gap: 24px;
  }
`;

const products = [
  {
    imgURL: ProductPhoto,
    name: 'Unisex Short Sleeve T-Shirt',
    price: '$10 - $24',
    quantity: '24',
  },
  {
    imgURL: ProductPhoto,
    name: 'Unisex Short Sleeve T-Shirt',
    price: '$10 - $24',
    quantity: '24',
  },
  {
    imgURL: ProductPhoto,
    name: 'Unisex Short Sleeve T-Shirt',
    price: '$10 - $24',
    quantity: '24',
  },
  {
    imgURL: ProductPhoto,
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
