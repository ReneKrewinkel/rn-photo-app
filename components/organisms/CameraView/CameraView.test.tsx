import 'jest'
import { render, screen } from '@testing-library/react-native'

import { CameraViewInterface  } from './CameraView.interface'
import CameraView from './CameraView'
import { CameraViewMock } from './CameraView.mock'

/// TODO: fix test based upon interface
const testID = "CameraView-" + Math.floor(Math.random()*90000) + 10000

describe("CameraView", () => {

    it("Can render CameraView", () => {
        render(<CameraView testID={ testID } { ...CameraViewMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})