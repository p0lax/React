import React from 'react';
import List from './List';
import ListTitle from './ListTitle';
import ListItem from './ListItem';
import { storiesOf } from '@storybook/react';

const ITEMS = [
  { title: 'Item' },
  { title: 'Item' },
  { title: 'Item' },
  { title: 'Item' },
  { title: 'Item' },
  { title: 'Item' },
  { title: 'Item' }
];

storiesOf('List', module)
  .add('List component', () => (
    <List title={'Title'} items={ITEMS} />
  ))
  .add('Expandedn ListTitle', () => (
    <ListTitle title={'Expanded title'} expanded />
  ))
  .add('Collapsed ListTitle', () => (
    <ListTitle title={'Collapsed title'} expanded={false} />
  ))
  .add('Simple ListItem', () => (
    <ListItem title={'Name'} index={1} />
  ));
