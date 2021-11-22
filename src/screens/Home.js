import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

export default function (props) {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.bubbleOne}></View>
      <View style={styles.bubbleTwo}></View>
      <View style={styles.bubbleThree}></View>
      <Image
        style={styles.img}
        source={require("../../assets/ШМТДС-Лого(Transparent).png")}
      />
      <Text style={styles.descriptionStudent}>оюутанаар нэвтрэх бол</Text>
      <Button
        onPress={() => props.navigation.navigate("NewsFeed")}
        title="Нэвтрэх"
      ></Button>
      <Text style={styles.descriptionAdmin}>админаар нэвтрэх бол</Text>
      <Button
        onPress={() => props.navigation.navigate("Login")}
        title="Админ-аар нэвтрэх"
      ></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    width: 350,
    height: 250,
    top: 50,
    marginBottom: 70,
  },
  helloText: {
    fontSize: 24,
    marginTop: 20,
    paddingBottom: 50,
  },
  descriptionStudent: {
    color: "gray",
    marginBottom: 5,
    fontStyle: "italic",
  },
  descriptionAdmin: {
    color: "gray",
    marginBottom: 5,
    fontStyle: "italic",
    marginTop: 40,
  },
  bubbleOne: {
    position: "absolute",
    height: 300,
    width: 300,
    borderRadius: 300 / 2,
    backgroundColor: "#7F2B0A",
    opacity: 0.5,
    top: -50,
    left: -60,
  },
  bubbleTwo: {
    position: "absolute",
    height: 300,
    width: 300,
    borderRadius: 300 / 2,
    backgroundColor: "#7F2B0A",
    opacity: 0.3,
    bottom: -300,
    right: -60,
  },
  bubbleThree: {
    position: "absolute",
    height: 250,
    width: 250,
    borderRadius: 300 / 2,
    backgroundColor: "#7F2B0A",
    opacity: 0.5,
    bottom: -350,
    right: 80,
  },
});
