/** @jsxImportSource @emotion/react */
import Logosrc from '../assets/Logo.png';
import { css } from '@emotion/react';

const image = css`
    height: 48px;
    width: 172px;
`

const Logo = () => {
    return (<img src={Logosrc} css={image} />)
}

export default Logo