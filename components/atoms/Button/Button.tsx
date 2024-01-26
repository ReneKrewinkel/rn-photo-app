// import { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ButtonInterface } from './Button.interface'
import ButtonStyle from './Button.style'

const Button = ({ testID, text, action }: ButtonInterface) => {

  const handler = () => {
    action()
  }

  return (
    <TouchableOpacity onPress={ () => handler() }
                      testID={testID}
                      style={ButtonStyle.View}>
      <Text>{ text }</Text>
    </TouchableOpacity>
  )
}

export default Button
