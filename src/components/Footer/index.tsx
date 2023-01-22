/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container, SelectChangeEvent, Select, MenuItem } from '@mui/material';
import { useState } from 'react';

import { backgroundGray } from '../../styles';
import Copyright from './Copyright';
import Selectors from './Selectors';

const footer = css`
  background-color: ${backgroundGray};
`;

const container = css`
    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

const Footer = () => {
  

  return (
    <footer css={footer}>
      <Container css={container} maxWidth='xl'>
        <div>
          <Copyright />
          <Selectors />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
