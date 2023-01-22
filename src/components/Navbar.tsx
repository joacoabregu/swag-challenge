/** @jsxImportSource @emotion/react */
import { Container } from '@mui/material';
import { css } from '@emotion/react';
import { backgroundGray, textGray } from '../styles';

const nav = css`
  background-color: ${backgroundGray};
  padding-top: 24px;
  padding-bottom: 24px;
`;

const container = css`
  display: flex;
  flex-direction: row;
  > a {
    color: ${textGray};
    font-size: 15px;
    cursor: pointer;
    & + a {
      margin-left: 24px;
    }
  }
`;

const navLinks = [
  'All products',
  'Packaging',
  'Drinkware',
  'Apparel',
  'Notebooks',
  'Backpacks',
];

const Navbar = () => {
  return (
    <nav css={nav}>
      <Container css={container} maxWidth='xl'>
        {navLinks.map((link) => (
          <a>{link}</a>
        ))}
      </Container>
    </nav>
  );
};

export default Navbar;
