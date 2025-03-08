
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

import { FAB } from "@rneui/themed";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { getCliente } from "../services/clientServices";

export const ClientList = ({ navigation }) => {

  useEffect(() => {
    getAllCliente();
  }, [])

  const getAllCliente = async () => {
    try {
      let dataClientes = await getCliente();
      setDataClienteList(dataClientes);
    } catch (error) {
      console.log(error)
    }
  }

  const [dataClienteList, setDataClienteList] = useState();


  const ItemListCliente = ({ item }) => {
    return (<View style={{ flexDirection: 'row', flex: 1, borderWidth: 1, paddingVertical: 10, margin: 5, borderRadius: 4, backgroundColor: '#33415C' }}>
      <TouchableHighlight style={{ flex: 8 }} onPress={() => {
        navigation.navigate("CreateClient")
      }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}  >
            <Text style={styles.text}> {item.id_cliente}</Text>
          </View>

          <View style={{ flex: 2 }}  >
            <Text style={styles.text}>{item.nombre_cl} {item.apellido}</Text>
          </View>
        </View>
      </TouchableHighlight>

      <TouchableHighlight style={{ flex: 2 }}>
        <View>
          <Icon
            name="shopping-cart"
            type='Feather'
            size={21}
            color='white'
          />
        </View>
      </TouchableHighlight>
    </View>)
  }

  return (<View >

    <View style={{ flex: 1, minHeight: '90%' }}>
      <FlatList
        data={dataClienteList}
        renderItem={({ item }) => {
          return (<ItemListCliente
            item={item}
          />)
        }}
        keyExtractor={(item) => (item.id_cliente)}
      />
    </View>
    <FAB
      color="#002855"
      title={'NUEVO'}
      onPress={() => navigation.navigate('CreateClient')}
      style={{ justifyContent: 'flex-end', paddingHorizontal: 12 }}
    />
  </View>)

}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  text: {
    color: 'white',
    fontSize: 15
  }
});
