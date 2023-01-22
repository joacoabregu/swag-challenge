/** @jsxImportSource @emotion/react */
import { Container, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Logo from '../assets/Logo.png';
import { css } from '@emotion/react';

const header = css`
  background-color: #091625;
  color: white;
`;

const container = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  > img {
    height: 48px;
    width: 172px;
    margin-right: 68px;
  }
  // Search bar
  > div:first-of-type {
    flex: 2;
    > div {
      background-color: white;
      max-width: 700px;
      border-radius: 20px;

      // Search Icon
      svg {
        color: #001342;
      }

      input {
        height: 0.438em;
        &::placeholder {
          color: black !important;
          opacity: 1;
        }
      }
    }
  }
`;

const buttonsContainer = css`
  display: flex;
  flex-direction: row;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    > p {
      margin-left: 8px;
    }
  }
  > div:first-of-type {
    margin-right: 26px;
  }
`;

const Header = () => {
  return (
    <header css={header}>
      <Container css={container} maxWidth='xl'>
        <img src={Logo} />
        <TextField
          id='input-with-icon-textfield'
          placeholder='Search products'
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon fontSize='large' />
              </InputAdornment>
            ),
          }}
        />
        <div css={buttonsContainer}>
          <div>
            <PersonOutlineOutlinedIcon fontSize='large' />
            <p>Sign In</p>
          </div>
          <div>
            <ShoppingBagOutlinedIcon fontSize='large' />
            <p>Cart</p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
