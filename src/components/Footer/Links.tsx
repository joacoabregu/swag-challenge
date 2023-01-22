/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dark01, dark03 } from '../../styles';

const linksInfo = [
  {
    title: 'Our company',
    links: ['About us', 'FAQ', 'Partnerships', 'Sustainability', 'Blog'],
  },
  {
    title: 'How can we help',
    links: ['Place a ticket', 'Track your order', 'Help center'],
  },
  {
    title: 'Information',
    links: [
      'Contact us',
      'Live chat',
      'Privacy',
      'Sustainability',
      'Terms of use',
    ],
  },
];

const container = css`
    //Title
    p {
        font-size: 16px;
        font-weight: 700;
        color: ${dark01};
    }
    // Links
    a {
        font-size: 15px;
        color: ${dark03};
        display: block;
        cursor: pointer;
    }
    * + * {
        margin-top: 24px;
    } 
`

const Links = () => {
  return (
    <>
      {linksInfo.map((info) => (
        <div css={container} key={info.title}>
          <p>{info.title}</p>
          {info.links.map((link) => (
            <a key={link}>{link} </a>
          ))}
        </div>
      ))}
    </>
  );
};

export default Links;
