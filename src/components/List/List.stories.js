import React from 'react';
import List from './List';
import { storiesOf } from '@storybook/react';

storiesOf('List', module)
  .add('Simple List', () => (
    <List />
  ));
