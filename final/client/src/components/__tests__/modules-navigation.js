import React from 'react';
import { renderWithRouter, cleanup } from '../../utils/test-utils';
import ModuleNav from '../modules-navigation';

const mockModule = {
  id: 'l_1',
  title: 'The Night Sky',
  content:
    '# Et tempus voces tigride remisso fer coimus\n\n## Montibus arbusta detrectas haud\n\n',
  thumbnail: null,
  videoUrl: 'https://youtu.be/dlKzlksOUtU',
  topic: 'Cat-stronomy',
  length: 164,
};

const mockParentTrack = {
  id: 'c_0',
  title: 'Cat-stronomy, an introduction',
  description: '# Pulchra vehi vidit misera sola armenta secabatur\n\n',
  thumbnail:
    'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
  trackLength: 2377,
  modulesCount: 10,
  numberOfViews: 51,
  author: {
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
};

describe('Modules Navigation View', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders without error', () => {
    renderWithRouter(<ModuleNav module={mockModule} track={mockParentTrack} />);
  });
});
