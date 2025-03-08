import { Input, Text } from '@rneui/themed'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

export default function FormClientScreen() {
  const [cedula, setCedula] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const [email, setEmail] = useState('')
  const handleCreateClient = () => {
    console.log(cedula)
    console.log(nombre)
    console.log(apellido)
    console.log(telefono)
    console.log(direccion)
    console.log(email)
  }
  return (
    <View style={styles.container}>
      <Text>Cedula</Text>
      <Input
        onChangeText={(text) => setCedula(text)}
      />
      <Text>Nombre</Text>
      <Input
        onChangeText={(text) => setNombre(text)}
      />
      <Text>Apellido</Text>
      <Input
        onChangeText={(text) => setApellido(text)}
      />
      <Text>Telefono</Text>
      <Input
        onChangeText={(text) => setTelefono(text)}
      />
      <Text>Direccion</Text>
      <Input
        onChangeText={(text) => setDireccion(text)}
      />
      <Text>Email</Text>
      <Input
        onChangeText={(text) => setEmail(text)}
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