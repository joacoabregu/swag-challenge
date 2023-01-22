/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container, SelectChangeEvent, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import { dark01, dark04 } from '../../styles';

const container = css`
    display: flex;
    flex-direction: row;

    label {
        color: ${dark04};
        font-size: 14px;
    }
    .MuiSelect-select {
        font-size: 14px;
        font-weight: 600;
        color: ${dark01};
    }
    svg {
        color: ${dark01};
    }
    > div + div {
        margin-left: 36px;
    }
`

const Selectors = () => {
  const [region, setRegion] = useState('United States');
  const [language, setLanguage] = useState('English');


  const changeRegion = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };

  const changeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };


  return (
    <div css={container}>
      <div>
        <label htmlFor="select-region">Region:</label>
        <Select
          labelId='select-region'
          id='select-region'
          value={region}
          //label='Age'
          placeholder='United States'
          onChange={changeRegion}
          sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
        >
          <MenuItem value={'United States'}>United States</MenuItem>
          <MenuItem value={'Canada'}>Canada</MenuItem>
          <MenuItem value={'UK'}>UK</MenuItem>
        </Select>
      </div>
      <div>
        <label htmlFor="select-language">Language:</label>
        <Select
          labelId='select-language'
          id='select-language'
          value={language}
          //label='Age'
          placeholder='English'
          onChange={changeLanguage}
          sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
        >
          <MenuItem value={'English'}>English</MenuItem>
          <MenuItem value={'Spanish'}>Spanish</MenuItem>
          <MenuItem value={'Japanese'}>Japanese</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default Selectors;
