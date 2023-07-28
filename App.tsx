import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'

import { Button } from './components/atoms'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22 }}>
        Open up App.tsx to start working on your app!
      </Text>
      <Button />
    </View>
  )
}

let AppEntryPoint = App

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.ondevice').default
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AppEntryPoint
