import React from 'react';
import styled from '@emotion/styled';
import { colors, ApolloIcon } from '../styles';

/**
 * Footer is useless component to make our app look a little closer to a real website!
 */
const Footer = ({ children }) => {
  return (
    <FooterContainer>
      2021 ©{' '}
      <LogoContainer>
        <ApolloIcon width="100px" height="40px" />
      </LogoContainer>
    </FooterContainer>
  );
};

export default Footer;

/** Footer styled components */
const FooterContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  color: colors.pink.base,
  marginTop: 30,
  height: 200,
  padding: 20,
  backgroundColor: 'white',
  borderTop: `solid 1px ${colors.pink.light}`,
});

const LogoContainer = styled.div({
  height: 40,
  marginLeft: 5,
  svg: {
    height: 40,
  },
});
