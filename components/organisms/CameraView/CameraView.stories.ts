import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import CameraViewSrc from './CameraView'
import { CameraViewInterface  } from './CameraView.interface'
import { CameraViewMock } from './CameraView.mock'

/// TODO: Adapt Stories
const CameraViewMeta: Meta<typeof CameraViewSrc> = {
    title: "organisms/CameraView",
    component: CameraViewSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof CameraViewSrc>
export const CameraView: Story = {
    args: { ...CameraViewMock }
}

export default CameraViewMeta