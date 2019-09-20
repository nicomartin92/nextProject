import React from 'react'
import { storiesOf } from '@storybook/react'
import Paragraphe from './Paragraphe.js'
import SmallText from './SmallText.js'
import LargeText from './LargeText.js'
import AllTexts from './AllTexts.js'

storiesOf('Atoms/Text')
  // .addDecorator(s => <div style={{ height: '100px', backgroundColor: 'grey' }}>{s()}</div>)
  .add('Paragraphe', Paragraphe, { inline: true })
  .add('SmallText', SmallText, { inline: true })
  .add('LargeText', LargeText, { inline: true })
  .add('AllTexts', AllTexts, { inline: true })