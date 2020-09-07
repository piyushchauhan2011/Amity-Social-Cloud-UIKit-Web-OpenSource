import React, { useState, useEffect } from 'react';

import { customizableComponent } from 'hocs/customization';
import { getCommunities } from 'mock';
import Popover from 'components/Popover';
import { MenuItem } from 'components/Menu';

import {
  Avatar,
  CommunitiesSearchContainer,
  CommunitiesSearchInput,
  SearchIcon,
  CommunitiesSearchResults,
  Text,
  HighlightedText,
  TruncatedText,
} from './styles';

// from https://stackoverflow.com/questions/29652862/highlight-text-using-reactjs
const Highlight = ({ query, text }) => {
  const chunks = text.split(new RegExp(`(${query})`, 'gi'));
  return chunks.map(chunk => {
    if (chunk.toLowerCase() === query.toLowerCase())
      return <HighlightedText key={chunk}>{chunk}</HighlightedText>;
    return <Text key={chunk}>{chunk}</Text>;
  });
};

const CommunitySearch = ({ onSearchResultCommunityClick, searchContainerSize, placeholder }) => {
  const [query, setQuery] = useState('');

  const [isOpen, setIsOpen] = useState(true);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  // open if query not empty
  useEffect(() => {
    query.length && open();
  }, [query]);

  const communities = getCommunities();

  const searchResult = communities.filter(({ name }) =>
    name.toLowerCase().includes(query.toLowerCase()),
  );

  const handleSearchResultClick = community => {
    onSearchResultCommunityClick(community);
    setQuery('');
    close();
  };

  const menu = (
    <CommunitiesSearchResults size={searchContainerSize}>
      {/* TODO empty state */}
      {searchResult.map(community => (
        <MenuItem key={community.communityId} onClick={() => handleSearchResultClick(community)}>
          <Avatar size="tiny" avatar={community.avatar} />
          <TruncatedText>
            <Highlight text={community.name} query={query} />
          </TruncatedText>
        </MenuItem>
      ))}
    </CommunitiesSearchResults>
  );

  const isPopoverOpen = isOpen && query.length && searchResult.length;

  return (
    <Popover
      isOpen={isPopoverOpen}
      onClickOutside={close}
      position="bottom"
      align="start"
      content={menu}
    >
      <CommunitiesSearchContainer size={searchContainerSize}>
        <CommunitiesSearchInput
          value={query}
          onChange={e => setQuery(e.target.value)}
          type="text"
          placeholder={placeholder}
        />
        <SearchIcon />
      </CommunitiesSearchContainer>
    </Popover>
  );
};

export default customizableComponent('CommunitySearch', CommunitySearch);
