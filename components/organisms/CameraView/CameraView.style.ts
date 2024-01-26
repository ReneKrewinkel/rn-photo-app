/// TODO: add general style(s)
/// import Style from './path/to/general/style

import { Dimensions } from 'react-native'
const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const CameraViewStyle: any = {
  View: {
    flex: 1,
    backgroundColor: '#F00'
  },

  Camera: {
    flex: 1,
    width: w,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  Buttons: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    padding: 20,
    borderRadius: 15,
    margin: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  Preview: {
    width: w / 2,
    height: w / 2,
    borderWidth: 4,
    borderColor: "#FFF"
  }
}

export default CameraViewStyle