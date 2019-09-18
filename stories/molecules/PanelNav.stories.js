import React from 'react';
import { storiesOf } from '@storybook/react';

import PanelNav from '../../components/PanelNav/PanelNav';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('PanelNav', module)
  .add('default', () => <PanelNav />)