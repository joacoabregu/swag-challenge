/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from '@mui/material';
import { backgroundGray } from '../../styles';
import ContactInfo from './ContactInfo';
import Copyright from './Copyright';
import Links from './Links';
import Selectors from './Selectors';

const footer = css`
  background-color: ${backgroundGray};
`;

const container = css`
  > div:nth-of-type(1) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 24px;
    margin-bottom: 112px;
  }
  > div:nth-of-type(2) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <footer css={footer}>
      <Container css={container} maxWidth='xl'>
        <div>
          <ContactInfo />
          <Links />
        </div>
        <div>
          <Copyright />
          <Selectors />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
