import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-web'
import { ListItem, FAB } from "@rneui/base"

export default function SalesScreen(navigation) {
  return (
    <View>
      <Text>SalesScreen</Text>
      <FAB
            placement="right"
            title="+"
            color="blue"
            onPress={() => { navigation.navigate("LaptopsFormNav",{}) }}
        />
    </View>


  )
}