import { addDecorator } from '@storybook/react'
import React from 'react'
import Provider from './provider'

const withProvider = story => <Provider>{story()}</Provider>

addDecorator(withProvider)
