import { useState } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { CameraViewInterface } from './CameraView.interface'
import CameraViewStyle from './CameraView.style'

import { Camera, CameraType } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'


import { Button } from '../../atoms'

const CameraView = ({ testID }:CameraViewInterface) => {

    const [type, setType] = useState(CameraType.front)
    const [capturedImage, setCapturedImage] = useState<any>(null)
    const [cameraPermission, requestCameraPermission] = Camera.useCameraPermissions()
    const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions()

    let camera: Camera

    if(cameraPermission?.status !== 'granted') requestCameraPermission()
    if(mediaPermission?.status !== 'granted') requestMediaPermission()

    const toggleCameraType = () => {
      setType( current => current === CameraType.front ?
                                      CameraType.back :
                                      CameraType.front)
    }

    const takePicture = async() => {
      const photo = await camera.takePictureAsync()
      await MediaLibrary.saveToLibraryAsync(photo.uri)
      setCapturedImage(photo)
    }

    const renderPreview = () => {
      if(capturedImage) {
        return(
          <View style={CameraViewStyle.Preview}>
            <ImageBackground
              source={{ uri: capturedImage && capturedImage.uri }}
              style={{ flex: 1 }}
            />
          </View>
        )
      }
    }

    return(
        <View testID={ testID }
              style={ CameraViewStyle.View }>

          <Camera style={ CameraViewStyle.Camera }
                  type={ type }
                  ref={ (r:any) => camera = r}>

            { renderPreview() }
            <View style={CameraViewStyle.Buttons}>
              <Button text={"toggle camera"} action={ () => toggleCameraType() } />
              <Button text={"take picture"} action={ () => takePicture() } />
            </View>

          </Camera>

        </View>
    )

}

export default CameraView
