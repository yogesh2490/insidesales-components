import React from 'react';
import { storiesOf } from '@storybook/react';

import Loader from './';

const darkExample = {
  height: '50px',
  backgroundColor: '#2a434a',
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center'
}

storiesOf('Base', module)
.addWithChapters(
  'Loader',
  {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { Loader } from 'insidesales-components';

      <Loader />
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Default',
            sectionFn: () => (
              <Loader />
            )
          },
          {
            title: 'White Loader',
            sectionFn: () => (
              <div style={darkExample} >
                <Loader white />
              </div>
            )
          },
          {
            title: 'Sizes',
            sectionFn: () => (
              <div>
                <Loader />
                <br/>
                <Loader medium />
                <br/>
                <Loader small />
              </div>
            )
          }
        ]
      }
    ]
  }
);

