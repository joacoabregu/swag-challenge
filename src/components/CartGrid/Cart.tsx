/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ProductCard from './ProductCard';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button } from '@mui/material';
import { dark01, dark05 } from '../../styles';

const container = css`
  grid-column-start: 1;
  grid-column-end: 4;

  > h1 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 24px;
  }
`;

const cartProducts = [
  {
    name: 'Basic T-Shirt',
    price: '$13.50',
    bottomElement: <ButtonRemoveProduct />,
  },
  {
    name: 'Woman bottle',
    price: '$36.50',
    bottomElement: <ButtonRemoveProduct />,
  },
  {
    name: 'Unisex Short Sleeve T-Shirt',
    price: '$24',
    bottomElement: <ButtonRemoveProduct />,
  },
];
const btnStyle = css`
  padding: 0;
  color: black;
  font-size: 12px;
  text-transform: none;
  position: relative;
  // Icon
  svg {
    position: absolute;
    left: -3px;
  }
  // Btn Text
  span {
    position: absolute;
    left: 22px;
    font-size: 12px;
    font-weight: 600;
    font-family: 'Open Sans';
  }
`;
function ButtonRemoveProduct() {
  return (
    <Button css={btnStyle}>
      <DeleteOutlineOutlinedIcon fontSize='small' /> <span>Remove</span>
    </Button>
  );
}

const packContentstyle = css`
  ul {
    margin-left: 4px;
    padding-left: 20px;
    li {
      color: ${dark01};
      font-size: 14px;
      font-weight: 600;
      > span {
        color: ${dark05};
      }
    }
  }
  button {
    font-size: 12px;
    font-weight: 600;
    text-transform: none;
    color: ${dark01};
    padding: 0 4px 0 0;

    min-width: fit-content;
  }
  // Btn divider
  > span {
    font-size: 12px;
    color: ${dark05};
  }
`;

function PackContent() {
  return (
    <div css={packContentstyle}>
      <ul>
        <li>
          Cardboard box: <span>(container)</span>
        </li>
        <li>
          Unisex Short Sleeve T-Shirt <span>(Green, Small)</span>
        </li>
        <li>
          Basic bottle: <span>(Blue)</span>
        </li>
      </ul>
      <Button size='small'>Edit</Button> <span>|</span>{' '}
      <Button size='small'>Remove</Button>
    </div>
  );
}

function Pack() {
  return (
    <ProductCard
      name='My Christmas pack'
      price='$71.20'
      bottomElement={<PackContent />}
    />
  );
}

const Cart = () => {
  return (
    <div css={container}>
      <h1>
        Your Cart <span>(3)</span>
      </h1>
      <Pack />
      {cartProducts.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
};

export default Cart;
