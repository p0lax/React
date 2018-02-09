import React from 'react';
import List from './List';
import { storiesOf } from '@storybook/react';

const ITEMS = [{ displayName: 'Item 1' }];

storiesOf('List', module)
  .add('Simple List', () => (
    <List title={'Title'} items={} />
  ));
