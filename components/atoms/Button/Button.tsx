// import { useState, useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { ButtonInterface } from './Button.interface'
import ButtonStyle from './Button.style'

/// TODO: update interface/arguments for Button
const Button = ({ testID, style, type, size, props }: ButtonInterface) => {
  return (
    <View testID={testID} style={ButtonStyle.View}>
      <Text>Button</Text>
    </View>
  )
}

export default Button
