import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './';


storiesOf('Base', module)
.addWithChapters(
  'Button',
  {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { Button } from 'insidesales-components';
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Default',
            sectionFn: () => (
              <Button label='Button'/>
            )
          },
          {
            title: 'Loading',
            sectionFn: () => (
              <Button label='Button' loading/>
            )
          },
          {
            title: 'Disabled',
            sectionFn: () => (
              <Button label='Button' disabled/>
            )
          },
          {
            title: 'Danger',
            sectionFn: () => (
              <Button label='Button' danger/>
            )
          },
          {
            title: 'Neuralytics',
            sectionFn: () => (
              <Button label='Button' neuralytics/>
            )
          },
        ]
      }
    ]
  }
);

