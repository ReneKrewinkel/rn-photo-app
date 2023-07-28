// import { useState, useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { LabelInterface } from './Label.interface'
import LabelStyle from './Label.style'

/// TODO: update interface/arguments for Label
const Label = ({ testID, style, type, size, props }: LabelInterface) => {
  return (
    <View testID={testID} style={LabelStyle.View}>
      <Text>Label</Text>
    </View>
  )
}

export default Label
