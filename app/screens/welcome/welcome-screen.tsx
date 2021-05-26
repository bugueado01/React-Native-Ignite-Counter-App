import React, { useState } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
// import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Screen, Text, Fab } from "../../components"
import { color, spacing, typography } from "../../theme"

const FULL: ViewStyle = { 
  flex: 1 
}

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1
}

const COUNTER_TEXT: TextStyle = {
  color: color.palette.angry,
  fontSize: 30,
  fontFamily: typography.code
}

const FOOTER: ViewStyle = { 
  backgroundColor: "#20162D", 
  marginBottom: 64 
}



export const WelcomeScreen = observer(function WelcomeScreen() {
  // const navigation = useNavigation()
  // const nextScreen = () => navigation.navigate("demo")
  const [contador, setContador] = useState(10)

  return (
    <SafeAreaView testID="WelcomeScreen" style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        
          <Text style={COUNTER_TEXT}>
            Contador: {contador}
          </Text>

          <Fab 
            title="+1"
            onPress={ () => setContador(contador + 1) }
          />

          <Fab 
            title="-1"
            position="bl"
            onPress={ () => setContador(contador - 1) }
          />
      </Screen>
      <SafeAreaView style={FOOTER}>
      </SafeAreaView>
    </SafeAreaView>
  )
})
