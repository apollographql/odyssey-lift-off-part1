import React from 'react';
import { renderWithRouter, cleanup } from '../../utils/test-utils';
import TrackDetail from '../track-detail';

const mockTrack = {
  track: {
    id: 'c_0',
    title: 'Cat-stronomy, an introduction',
    description: '# Pulchra vehi vidit misera sola armenta secabatur\n\n',
    thumbnail:
      'https://res.cloudinary.com/apollographql/image/upload/v1730818804/odyssey/lift-off-api/nebula_cat_djkt9r_nzifdj.jpg',
    length: 2377,
    modulesCount: 10,
    numberOfViews: 51,
    author: {
      id: 'cat-1',
      name: 'Henri, le Chat Noir',
      photo:
        'https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzA0OH0',
    },
    modules: [
      {
        id: 'l_0',
        title: 'Exploring Time and Space',
        length: 258,
      },
    ],
  },
};

describe('Module Detail View', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders without error', () => {
    renderWithRouter(<TrackDetail {...mockTrack} />);
  });
});
