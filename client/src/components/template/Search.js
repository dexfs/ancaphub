import React, { memo } from 'react';
import styled from 'styled-components';

// Icons
import SearchIcon from 'react-ionicons/lib/IosSearch';
import LocateIcon from 'react-ionicons/lib/MdLocate';

// i18n
import { FormattedMessage } from 'react-intl';

const SearchWrapper = styled.div`
  height: 50px;
  border-radius: 5px;
  width: 400px;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  padding: 0px 10px;
  > i svg {
    fill: ${(props) => props.theme.palette.text.contrast};
  }
  > input {
    border: none;
    background: transparent;
    height: 50px;
    padding: 10px;
    outline: none;
    flex-grow: 1;
    color: ${(props) => props.theme.palette.text.contrast};

    &::placeholder {
      color: ${(props) => props.theme.palette.text.contrast};
      font-size: 16px;
      font-family: Ubuntu;
    }
  }
  > button {
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
  }
  > button svg {
    fill: white;
  }
`;

const Search = () => (
  <SearchWrapper>
    <i>
      <SearchIcon />
    </i>
    <FormattedMessage id="common.search" description="Input de pesquisa">
      {(msg) => <input type="text" placeholder={msg} />}
    </FormattedMessage>
    <button>
      <LocateIcon />
    </button>
  </SearchWrapper>
);

export default memo(Search);
