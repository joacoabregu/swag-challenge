/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface Props {
  name: string;
  imgURL: string;
  price: string;
  quantity: string;
}

const ProductCard = ({ name, imgURL, price, quantity }: Props) => {
  return (
    <div key={name}>
      <img src={imgURL} />
      <p>{name}</p>
      <div>
        <p>{price} </p>
        <p> Minimum: {quantity} </p>
      </div>
    </div>
  );
};

export default ProductCard;
