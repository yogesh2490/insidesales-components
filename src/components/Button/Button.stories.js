import React from 'react';
import { action, storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Button from './';

const FadeBtn = styled(Button)`{
  animation-iteration-count: infinite;
}`;

storiesOf('Base', module)
.addWithChapters(
  'Button',
  {
    info: `
      Usage

      ~~~
      import React from 'react';
      import { Button } from 'insidesales-components';

      <Button onClick={() => {}}>Click Me</Button>
      ~~~
    `,
    chapters: [
      {
        sections: [
          {
            title: 'Default',
            subtitle: 'The default button style.',
            sectionFn: () => (
              <Button onClick={action('clicked')}>Button</Button>
            )
          },
          {
            title: 'Outline',
            sectionFn: () => (
              <Button onClick={action('clicked')} flat outline>Button</Button>
            )
          },
          {
            title: 'Flat',
            sectionFn: () => (
              <Button onClick={action('clicked')} flat>Button</Button>
            )
          },
          {
            title: 'States',
            subtitle: 'These are the different possible button states.',
            sectionFn: () => (
              <div>
                <Button>Resting</Button>
                <br/>
                <br/>
                <Button loading>Loading</Button>
                <br/>
                <br/>
                <FadeBtn fade>Fade</FadeBtn>
                <br/>
                <br/>
                <Button disabled>Disabled</Button>
              </div>
            )
          },
          {
            title: 'Colors',
            subtitle: 'You can change buttons colors by adding the appropriate prop to the button.',
            sectionFn: () => (
              <div>
                <Button>No Prop</Button>
                <br/>
                <br/>
                <Button danger>Danger</Button>
                <br/>
                <br/>
                <Button neuralytics>Neuralytics</Button>
              </div>
            )
          }
        ]
      }
    ]
  }
);

