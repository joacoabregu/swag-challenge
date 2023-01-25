/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from '@mui/material';
import Cart from './Cart';
import Summary from './Summary';
import { useReducer } from 'react';
import cartReducer, { initialCart } from '../../state';

const container = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  column-gap: 24px;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const CartGrid = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <Container component='section' maxWidth='xl' css={container}>
      <Cart cart={cart} dispatch={dispatch} />
      <Summary cart={cart} />
    </Container>
  );
};

export default CartGrid;
