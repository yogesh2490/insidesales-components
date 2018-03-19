import React from 'react';
import {
  storiesOf,
  action
} from '@storybook/react';

import TextareaBox from './TextareaBox';

storiesOf('Form', module)
  .addWithChapters(
    'TextareaBox',
    {
      info: `
        Usage

        ~~~
        import React from 'react';
        import {TextareaBox} from 'insidesales-components';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Example: textarea default empty',
              sectionFn: () => (
                <TextareaBox
                  label="Label"
                  name="first"
                  onChange={action('value')}
                />
              )
            },
            {
              title: 'Example: textarea with existing text',
              sectionFn: () => (
                <TextareaBox
                  label="Label"
                  name="firstz"
                  onChange={action('value')}
                  value="This text was hardcoded into stories. The structure of this component follows how a `TextareaBox` should look."
                />
              )
            },
            {
              title: 'Example: textarea with helper text',
              sectionFn: () => (
                <TextareaBox
                  label="Labely"
                  helper="Helper text."
                  error=""
                  name="second"
                  onChange={action('value')}
                />
              )
            },
            {
              title: 'Example: textarea with error text',
              sectionFn: () => (
                <TextareaBox
                  label="Label"
                  helper="Helper text."
                  error="Errors will override helper text."
                  name="third"
                  onChange={action('value')}
                  value="This text was hardcoded into stories."
                />
              )
            },
            {
              title: 'Example: textarea disabled',
              sectionFn: () => (
                <TextareaBox
                  label="Label"
                  helper="Helper text."
                  disabled
                  name="fourth"
                  onChange={action('value')}
                />
              )
            },
            {
              title: 'Example: textarea disabled with text',
              sectionFn: () => (
                <TextareaBox
                  label="Label"
                  helper="Helper text."
                  disabled
                  name="fifth"
                  value="this is some example text"
                  onChange={action('value')}/>
              )
            },
            {
              title: 'Example: textarea closed without value',
              sectionFn: () => (
                <TextareaBox
                  label="Label"
                  helper="Helper text."
                  name="sixth"
                  collapsed />
              )
            },
            {
              title: 'Example: textarea closed without value and has an error',
              sectionFn: () => (
                <TextareaBox
                  label="Label"
                  helper="Helper text."
                  error={"This field is required."}
                  name="sixth"
                  collapsed />
              )
            },
          ]
        }
      ]
    }
  );