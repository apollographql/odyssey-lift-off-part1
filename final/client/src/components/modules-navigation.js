import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import { colors, IconArrowRight, IconDoubleArrowRight } from '../styles';
import { humanReadableTimeFromSeconds } from '../utils/helpers';

/**
 * Module Navigation: displays a list of modules titles
 * from a track and navigates to the modules page
 */
const ModulesNav = ({ module, track }) => {
  return (
    <ModulesNavContainer>
      <ModuleTitle>
        <h4>
          <Link to="../..">{track.title}</Link>
        </h4>
      </ModuleTitle>
      <ModulesList>
        {track.modules.map((navModule) => (
          <ModuleListItem key={`module_${navModule.id}`}>
            <div>
              <ModuleNavStyledLink to={`../${navModule.id}`}>
                <ModuleListItemContent isActive={navModule.id === module.id}>
                  {navModule.id === module.id ? (
                    <IconDoubleArrowRight width="14px" />
                  ) : (
                    <IconArrowRight width="14px" weight="thin" />
                  )}
                  <div>{navModule.title}</div>
                  <div>{humanReadableTimeFromSeconds(navModule.length)}</div>
                </ModuleListItemContent>
              </ModuleNavStyledLink>
            </div>
          </ModuleListItem>
        ))}
      </ModulesList>
    </ModulesNavContainer>
  );
};

export default ModulesNav;

/** Module Navigation styled components */
const ModulesNavContainer = styled.div({
  width: '33%',
  position: 'relative',
  marginLeft: 20,
  backgroundColor: colors.black.light,
  borderRadius: 4,
  border: `solid 1px ${colors.black.lighter}`,
  overflow: 'auto',
});

const trackTitleHeight = 70;

const ModuleTitle = styled.div({
  display: 'flex',
  position: 'sticky',
  fontSize: '1.6em',
  fontWeight: '400',
  height: trackTitleHeight,
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: 'colors.pink.base',
  borderBottom: `solid 1px ${colors.pink.base}`,

  a: {
    textDecoration: 'none',
    color: colors.silver.base,
  },
  ':hover': {
    backgroundColor: colors.black.base,
  },
});

const ModulesList = styled.ul({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  overflowY: 'scroll',
  height: `calc(100% - ${trackTitleHeight}px)`,
});

const ModuleListItem = styled.li((props) => ({
  borderBottom: `solid 1px ${colors.grey.darker}`,
  ':last-child': {
    borderBottom: 'none',
  },
}));

const ModuleNavStyledLink = styled(Link)({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
});

const ModuleListItemContent = styled.div((props) => ({
  backgroundColor: props.isActive ? colors.black.base : colors.black.light,
  color: props.isActive ? colors.silver.lighter : colors.silver.darker,
  minHeight: 80,
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '1.1em',
  flex: 1,
  ':hover': {
    backgroundColor: props.isActive ? colors.black.dark : colors.black.base,
    color: 'white',
  },
}));
