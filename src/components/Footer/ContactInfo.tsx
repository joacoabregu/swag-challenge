/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Logo from '../Logo';
import { dark01, dark04, dark05 } from '../../styles';

const container = css`
  img {
    margin-bottom: 24px;
  }
  // Company description
  > p {
    font-size: 14px;
    color: ${dark05};
    margin-bottom: 24px;
    max-width: 264px;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  // Phone number
  > div:first-of-type {
    margin-bottom: 40px;
    a {
        color: ${dark01};
        text-decoration: none;
        margin-left: 8px;
    }
  }

  // Social media
  > div:nth-of-type(2){
    svg {
        color: ${dark04};
        & + svg {
            margin-left: 8px;
        }
    }
  }

`;

const ContactInfo = () => {
  return (
    <div css={container}>
      <Logo />
      <p>
        We sell custom products for all your needs. Packs and bulk products that
        you will enjoy.
      </p>
      <div>
        <PhoneIcon />
        <a href='tel:+1-202-555-0129'>+1-202-555-0129</a>
      </div>
      <div>
        <FacebookRoundedIcon fontSize='large' />
        <FacebookRoundedIcon fontSize='large' />
        <FacebookRoundedIcon fontSize='large' />
        <FacebookRoundedIcon fontSize='large' />
        <FacebookRoundedIcon fontSize='large' />
      </div>
    </div>
  );
};

export default ContactInfo;
