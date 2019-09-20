import React from 'react'
import { storiesOf } from '@storybook/react'
import ButtonSimple from './ButtonSimple.js'
import ButtonClose from './ButtonClose.js'

storiesOf('Atoms/Button')
  .add('Button Simple', ButtonSimple, { inline: true })
  .add('Close button', ButtonClose, { inline: true })