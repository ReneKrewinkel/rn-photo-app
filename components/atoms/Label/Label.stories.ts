import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import LabelSrc from './Label'
import { LabelInterface } from './Label.interface'
import { LabelMock } from './Label.mock'

/// TODO: Adapt Stories
const LabelMeta: Meta<typeof LabelSrc> = {
  title: 'atoms/Label',
  component: LabelSrc,
  argTypes: {
    testID: { table: { disable: true } }
  }
}

type Story = StoryObj<typeof LabelSrc>
export const Label: Story = {
  args: { ...LabelMock }
}

export default LabelMeta
