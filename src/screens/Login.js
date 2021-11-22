import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Image, TextInput } from "react-native";
export default function (props) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.bubbleOne}></View>
      <View style={styles.bubbleTwo}></View>
      <View style={styles.bubbleThree}></View>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            position: "absolute",
            height: 210,
            width: 320,
            marginTop: 20,
          }}
          source={require("../../assets/ШМТДС-Лого(Transparent).png")}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          marginVertical: 200,
        }}
      >
        <Text style={styles.inputName}>~Нэр~{console.log(name)}</Text>
        <TextInput
          style={styles.input}
          placeholder="Та нэвтрэх нэрээ оруулна уу..."
          onChangeText={setName}
        ></TextInput>
        <Text style={styles.inputName}>~Утас~{console.log(phone)}</Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          onChangeText={setPhone}
          placeholder="Та утасны дугаараа оруулна уу..."
        ></TextInput>
        <View>
          <Button
            title="НЭВТРЭХ"
            onPress={() => props.navigation.navigate("NewsFeed")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  homePageText: {
    left: 50,
    fontSize: 25,
    bottom: 95,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    width: 300,
    borderRadius: 300 / 2,
    marginLeft: 45,
  },
  inputName: {
    marginLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  bubbleOne: {
    position: "absolute",
    height: 300,
    width: 300,
    borderRadius: 300 / 2,
    backgroundColor: "#7F2B0A",
    opacity: 0.5,
    top: -25,
    left: 120,
  },
  bubbleTwo: {
    position: "absolute",
    height: 300,
    width: 300,
    borderRadius: 300 / 2,
    backgroundColor: "#7F2B0A",
    opacity: 0.3,
    bottom: -50,
    right: 120,
  },
  bubbleThree: {
    position: "absolute",
    height: 250,
    width: 250,
    borderRadius: 300 / 2,
    backgroundColor: "#7F2B0A",
    opacity: 0.5,
    bottom: -100,
    right: -20,
  },
});
