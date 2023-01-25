/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ProductPhoto from '../../assets/Photo.png';
import { SelectChangeEvent, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import { dark09 } from '../../styles';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

const container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid ${dark09};
  padding-top: 24px;
  // Product description
  > div:first-of-type {
    display: flex;
    flex-direction: row;
    > img {
      width: 100%;
      max-width: 120px;
      max-height: 120px;
      margin-right: 16px;
    }
    > div {
      // Product name
      > p:first-of-type {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 8px;
      }
      // Product Quantity
      > div {
        font-weight: 500;

        .MuiSelect-select {
          padding-left: 4px;
          padding-right: 27px;
        }
        svg {
          color: black;
        }
      }
      // Remove button
      > button {
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
      }
    }
  }
  > div:nth-of-type(2) {
    text-align: right;
    > p {
      font-size: 18px;
      font-weight: 700;
    }
    > p:first-of-type {
      margin-bottom: 12px;
    }
    span {
      font-weight: 600;
    }
  }
`;

interface Props {
  name: string;
  price: string;
  bottomElement: EmotionJSX.Element;
}

const ProductCard = ({ name, price, bottomElement }: Props) => {
  const [region, setRegion] = useState('1');

  const changeRegion = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };
  return (
    <article css={container}>
      <div>
        <img src={ProductPhoto} />
        <div>
          <p>{name}</p>
          <div>
            Quantity:{' '}
            <Select
              labelId='select-region'
              id='select-region'
              size='small'
              value={region}
              placeholder='United States'
              onChange={changeRegion}
              sx={{
                boxShadow: 'none',
                '.MuiOutlinedInput-notchedOutline': { border: 0 },
              }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </div>
          {bottomElement}
        </div>
      </div>
      <div>
        <p>{price}</p>
        <p>
          <span>Total:</span> $730.00
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
