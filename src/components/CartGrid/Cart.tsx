/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ProductCard from './ProductCard';
import type { Cart as ICart, Action } from '../../state';
import ButtonRemoveProduct from './ButtonRemoveProduct';
import PackContent from './PackContent'

const container = css`
  grid-column-start: 1;
  grid-column-end: 4;

  > h1 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 24px;
  }
`;

interface Props {
  cart: ICart;
  dispatch: React.Dispatch<Action>;
}

const Cart = ({ cart, dispatch }: Props) => {
  function handleRemove(name: string) {
    dispatch({
      type: 'delete',
      name,
    });
  }
  return (
    <div css={container}>
      <h1>
        Your Cart <span>(3)</span>
      </h1>
      {cart.products.map((product) => (
        <ProductCard
          key={product.name}
          {...product}
          dispatch={dispatch}
          bottomElement={
            product.type === 'product' ? (
              <ButtonRemoveProduct
                onClickHandler={handleRemove}
                name={product.name}
              />
            ) : (
              <PackContent onClickHandler={handleRemove} name={product.name} />
            )
          }
        />
      ))}
    </div>
  );
};

export default Cart;
