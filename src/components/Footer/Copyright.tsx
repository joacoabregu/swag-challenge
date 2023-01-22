/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dark04 } from '../../styles';

const paragraph = css`
    color: ${dark04};
    font-size: 14px;
`

const Copyright = () => {
  return (
    <p css={paragraph}> © {new Date().getFullYear()} Customer Products. All rights reserved.</p>
  );
};

export default Copyright;
