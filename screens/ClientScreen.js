import { Button } from '@rneui/themed'
import React from 'react'
import { Text, View } from 'react-native'

export default function ClientScreen({ navigation }) {
  return (
    <View>
      <Text>ClientScreen</Text>
      <Button
        onPress={() => navigation.navigate('CreateClient')}
      >Crear</Button>
    </View>
  )
}