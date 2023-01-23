/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from '@mui/material';
import Cart from './Cart';
import Summary from './Summary';

const container = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  column-gap: 24px;
  margin-top: 32px;
`;

const CartGrid = () => {
  return (
    <Container component='section' maxWidth='xl' css={container}>
      <Cart />
      <Summary />
    </Container>
  );
};

export default CartGrid;
