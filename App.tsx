import { useState, useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

import { fetchData } from './lib'
import {CameraView} from "./components/organisms";

const App = () => {

  const [isLoaded, setLoaded] = useState(false)
  const [isError, setError] = useState(false)
  const [data, setData] = useState([])

  useEffect( () => {
    fetchData()
      .then( result => {
        // @ts-ignore
        setData(result)
        setLoaded(true)
        setError(false)
      })
      .catch( err => {
        setLoaded(false)
        setError(err)
      })

  }, [])


  const showError = () => {
    if(isError) {
      return (
        <View><Text>DE ECHTE FOUT BOODSCHAP ZIET???</Text></View>
      )
    }
  }

  const renderList = () => {
    if(isLoaded) {
      return(
        <View>
          {
            data.map( (item:any, index) => {
              return(
                <View key={index}>
                  <Text>{ item.name } </Text>
                </View>
              )
            })

          }
        </View>
      )
    }
  }

  const renderSpinner = () => {
    if(!isLoaded && !isError) {
      return(<ActivityIndicator />)
    }
  }

  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
     <CameraView />
    </View>
  )
}

let AppEntryPoint = App

export default AppEntryPoint
