import React from 'react';
import styled from '@emotion/styled';
import {
  colors,
  Button,
  IconRun,
  IconView,
  IconTime,
  IconBook,
} from '../styles';
import { humanReadableTimeFromSeconds } from '../utils/helpers';
import { Link } from 'react-router-dom';
import ContentSection from './content-section';
import MarkDown from './md-content';

/**
 * Track Detail component renders the main content of a given track:
 * author, length, number of views, modules list, among other things.
 * It provides access to the first module of the track.
 */
const TrackDetail: React.FC<{track: any}> = ({track}) => {
  const {
    title,
    description,
    thumbnail,
    author = { photo: '', name: ''},
    length,
    modulesCount,
    modules = [],
    numberOfViews,
  } = track ?? {};

  return (
    <ContentSection>
      <CoverImage src={thumbnail ?? ''} alt="" />
      <TrackDetails>
        <DetailRow>
          <h1>{title}</h1>
        </DetailRow>
        <DetailRow>
          <DetailItem>
            <h4>Track details</h4>
            <IconAndLabel>
              <IconView width="16px" />
              <div id="viewCount">{numberOfViews} view(s)</div>
            </IconAndLabel>
            <IconAndLabel>
              <IconBook width="14px" height="14px" />
              <div>{modulesCount} modules</div>
            </IconAndLabel>
            <IconAndLabel>
              <IconTime width="14px" />
              <div>{humanReadableTimeFromSeconds(length ?? 0)}</div>
            </IconAndLabel>
          </DetailItem>
          <DetailItem>
            <h4>Author</h4>
            <AuthorImage src={author.photo ?? ''} />
            <AuthorName>{author.name}</AuthorName>
          </DetailItem>
          <div>
            {/* Need to comment this out until Link is placed within a Router */}
            {/* <StyledLink to={`./module/${modules[0]['id']}`}> */}
              <Button
                icon={<IconRun width="20px" />}
                color={colors.pink.base}
                size="large"
              >
                Start Track
              </Button>
            {/* </StyledLink> */}
          </div>
        </DetailRow>
        <ModuleListContainer>
          <DetailItem>
            <h4>Modules</h4>
            <ul>
              {modules.map((module: any) => (
                <li key={module.title}>
                  <div>{module.title}</div>
                  <ModuleLength>
                    {humanReadableTimeFromSeconds(module.length ?? 0)}
                  </ModuleLength>
                </li>
              ))}
            </ul>
          </DetailItem>
        </ModuleListContainer>
      </TrackDetails>
      <MarkDown content={description} />
    </ContentSection>
  );
};

export default TrackDetail;

/** Track detail styled components */
const CoverImage = styled.img({
  objectFit: 'cover',
  maxHeight: 400,
  borderRadius: 4,
  marginBottom: 30,
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'white',
});

const TrackDetails = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
  borderRadius: 4,
  marginBottom: 30,
  border: `solid 1px ${colors.silver.dark}`,
  backgroundColor: colors.silver.lighter,
  h1: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 5,
  },
  h4: {
    fontSize: '1.2em',
    marginBottom: 5,
    color: colors.text,
  },
});

const DetailRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingBottom: 20,
  marginBottom: 20,
  borderBottom: `solid 1px ${colors.silver.dark}`,
});

const DetailItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: colors.textSecondary,
  alignSelf: 'center',
});

const AuthorImage = styled.img({
  height: 30,
  width: 30,
  marginBottom: 8,
  borderRadius: '50%',
  objectFit: 'cover',
});

const AuthorName = styled.div({
  lineHeight: '1em',
  fontSize: '1em',
});

const IconAndLabel = styled.div({
  display: 'flex',
  flex: 'row',
  alignItems: 'center',
  maxHeight: 20,
  width: '100%',
  div: {
    marginLeft: 8,
  },
  svg: {
    maxHeight: 16,
  },
  '#viewCount': {
    color: colors.pink.base,
  },
});

const ModuleListContainer = styled.div({
  width: '100%',
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginTop: 5,
    li: {
      fontSize: '1em',
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: 2,
    },
  },
});

const ModuleLength = styled.div({
  marginLeft: 30,
  color: colors.grey.light,
});
