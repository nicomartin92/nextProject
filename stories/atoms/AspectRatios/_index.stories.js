import React from 'react'
import { storiesOf } from '@storybook/react'
import AspectRatio16x9 from './AspectRatio16x9.js'
import AspectRatio4x3 from './AspectRatio4x3.js'
import AspectRatio3x4 from './AspectRatio3x4.js'
import AspectRatio1x1 from './AspectRatio1x1.js'

storiesOf('Atoms/AspectRatio')
  .add('Aspect ratio 16by9', AspectRatio16x9, { inline: true })
  .add('Aspect ratio 4by3', AspectRatio4x3, { inline: true })
  .add('Aspect ratio 3by4', AspectRatio3x4, { inline: true })
  .add('Aspect ratio 1by1', AspectRatio1x1, { inline: true })