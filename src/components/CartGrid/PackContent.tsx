/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from '@mui/material';
import { dark01, dark05 } from '../../styles';
import { HandlerDeleteProps } from './ButtonRemoveProduct';

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

const PackContent = ({ name, onClickHandler }: HandlerDeleteProps) => {
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
      <Button size='small' onClick={() => onClickHandler(name)}>
        Remove
      </Button>
    </div>
  );
};

export default PackContent;
