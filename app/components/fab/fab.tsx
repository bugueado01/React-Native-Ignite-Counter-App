import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, TouchableNativeFeedback } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../"
import { flatten } from "ramda"

// const CONTAINER: ViewStyle = {
//   justifyContent: "center",
// }

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

const FAB_LOCATION: ViewStyle = {
  position: 'absolute',
  bottom: 25,
  borderRadius: 100
}

const FAB_LEFT = {
  left: 25
}

const FAB_RIGHT = {
  right: 25
}

const FAB_STYLE: ViewStyle = {
  backgroundColor: '#5856D6',
  height: 60,
  width: 60,
  borderRadius: 100,
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.30,
  shadowRadius: 4.65,
  elevation: 8,
}

const FAB_TEXT: TextStyle = {
  color: 'white',
  fontSize: 25,
  fontWeight: 'bold',
  alignSelf: 'center'
}


export interface FabProps {
  /**
   * An optional style override useful for padding & margin.
   */
  title: string;
  onPress: () => void;
  position?: 'br' | 'bl';
}

/**
 * Describe your component here
 */
export const Fab = ( { title, onPress, position = 'br' } : Props) => {
  return (
    <View style={ [FAB_LOCATION, 
      (position === 'bl') ? FAB_LEFT : FAB_RIGHT]
      }>
      <TouchableNativeFeedback background={ TouchableNativeFeedback.Ripple('#28425B', false, 30) }  onPress={ onPress }>
           <View style={ FAB_STYLE }>
                <Text style={ FAB_TEXT }>
                     { title }
                </Text>     
           </View>
      </TouchableNativeFeedback>
 </View>)
}
  