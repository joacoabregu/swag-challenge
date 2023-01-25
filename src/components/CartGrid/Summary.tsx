/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Cart } from '../../state';
import { dark01, dark03, dark05 } from '../../styles';

const container = css`
  grid-column-start: 4;
  grid-column-end: 5;
  > p:first-of-type {
    color: ${dark01};
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  > div:nth-of-type(1),
  div:nth-of-type(2) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  // Items Quantity
  > div:nth-of-type(1) {
    color: ${dark05};
    margin-bottom: 24px;
  }
  // Total
  > div:nth-of-type(2) {
    margin-top: 24px;
    margin-bottom: 32px;

    color: ${dark01};
    > p:first-of-type {
      font-size: 18px;
      font-weight: 600;
    }
    // Price
    > p:nth-of-type(2) {
      font-size: 24px;
      font-weight: 700;
    }
  }
  > button {
    font-weight: 700;
    border-radius: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: 2px solid;
    text-transform: none;
    font-size: 16px;
  }
  // Checkout
  > button:first-of-type {
    color: white;
    background-color: ${dark03};
    border-color: ${dark03};
    margin-bottom: 12px;
  }
  // Continue shopping
  > button:nth-of-type(2) {
    color: ${dark01};
    border-color: ${dark01};
  }
`;

interface Props {
  cart: Cart;
}

const Summary = ({ cart }: Props) => {
  return (
    <div css={container}>
      <p>Order Summary</p>
      <div>
        <p>Number of items</p>
        <p>{cart.totalItems} </p>
      </div>
      <Divider />
      <div>
        <p>Total</p>
        <p>$ {cart.totalPrice}</p>
      </div>
      <Button variant='contained' fullWidth>
        Proceed to Checkout
      </Button>
      <Button variant='outlined' fullWidth>
        Continue shopping
      </Button>
    </div>
  );
};

export default Summary;
