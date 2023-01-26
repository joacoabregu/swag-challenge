/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button } from '@mui/material';

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

export interface HandlerDeleteProps {
  onClickHandler: (name: string) => void;
  name: string;
}

const ButtonRemoveProduct = ({ onClickHandler, name }: HandlerDeleteProps) => {
  return (
    <Button css={btnStyle} onClick={() => onClickHandler(name)}>
      <DeleteOutlineOutlinedIcon fontSize='small' /> <span>Remove</span>
    </Button>
  );
};

export default ButtonRemoveProduct;
