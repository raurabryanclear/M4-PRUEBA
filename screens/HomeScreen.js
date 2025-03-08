import { Button } from "@rneui/themed";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.containertext}>Home</Text>
      </View>
      <Image
        source={require("../assets/krake.jpeg")}
        style={styles.reactLogo}
      />
      <View style={styles.text}>
        <Text style={styles.subtext}>Panel de administracion de datos</Text>
      </View>
      <Button
        style={styles.button}
        title={"Navegar"}
        onPress={() => navigation.navigate("Tabs")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#0466c8",
    fontSize: 30,
    alignItems: "center",
  },
  containertext: {
    fontSize: 30,
    color: "white",
  },
  reactLogo: {
    paddingTop: 20,
    width: 400,
    height: 300,
    alignSelf: "center",
  },
  text: {
    paddingTop: 60,
    alignContent: "center",
    textAlign: "center",
  },
  subtext: {
    fontSize: 45,
    textAlign: "center",
  },
  button: {
    paddingTop: 40,
    width: 200,
    alignSelf: "center",
  },
});

export default HomeScreen;
