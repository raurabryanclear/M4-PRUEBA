import { Button } from '@rneui/themed'
import React from 'react'
import { Text, View } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title={'Navegar'}
        onPress={() => navigation.navigate('Tabs')}
      />
    </View>
  )
}

export default HomeScreen