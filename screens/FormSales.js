import { Input, Text } from '@rneui/themed'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

//ventas: id, id_cliente, id_producto, cantidad

export default function FormSalesScreen() {
    const productos = [        
    {
        id: 1,
        nombre_p: "Televisor",
        stock: 10,
        precio: 450.00,
        id_categoria: 1
    },
    {
        id: 2,
        nombre_p: "Lavadora",
        stock: 5,
        precio: 300.00,
        id_categoria: 2
    },
    {
        id: 3,
        nombre_p: "Camiseta",
        stock: 20,
        precio: 15.00,
        id_categoria: 3
    },

]
  const [id, setIDSale] = useState('')
  const [id_cliente, setIdCLient] = useState('')
  const [id_producto, SetIdProudct] = useState('')
  const [cantidad, setCantidad] = useState('')

  const handleCreateClient = () => {
    console.log(id_cliente)
    console.log(id_producto)
    console.log(cantidad)
  }
  return (
    <View style={styles.container}>
      <Text>Cedula Cliente</Text>
      <Input
        onChangeText={(text) => setIdCLient(text)}
      />
      <Text>ID Producto</Text>
      <Input
        onChangeText={(text) => SetIdProudct(text)}
      />
      <Text>Cantidad</Text>
      <Input
        onChangeText={(text) => setCantidad(text)}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleCreateClient}
        >
          <Text style={styles.buttonText}>
            Regresar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleCreateClient}
        >
          <Text style={styles.buttonText}>
            Guardar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#002855',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  }
})