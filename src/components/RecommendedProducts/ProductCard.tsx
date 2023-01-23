/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dark05 } from '../../styles';

const container = css`
  > img {
    width: 100%;
    margin-bottom: 16px;
  }
  // Product Name
  > p {
    font-weight: 700;
    margin-bottom: 10px;
  }
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // Price
    > p:nth-of-type(1){
      font-size: 15px;
      font-weight: 600;
    }
    // Quantity
    > p:nth-of-type(2) {
      color: ${dark05};
      font-size: 14px;
      span {
        color: black;
      }
    }

  }
`

interface Props {
  name: string;
  imgURL: string;
  price: string;
  quantity: string;
}

const ProductCard = ({ name, imgURL, price, quantity }: Props) => {
  return (
    <div css={container}>
      <img src={imgURL} />
      <p>{name}</p>
      <div>
        <p>{price} </p>
        <p> Minimum: <span>{quantity}</span></p>
      </div>
    </div>
  );
};

export default ProductCard;
