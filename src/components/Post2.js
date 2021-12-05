import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function () {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.box1}>
        <Image
          style={styles.postImage1}
          source={require("../../assets/Enkhsaikhan_2.png")}
        />
        <View style={styles.postTitleWrapper}>
          <Text style={styles.postTitle1}>
            Б.ЭНХСАЙХАН: Дэлхийд архитектураараа хоёрт жагсдаг “NIKKEN SEKKEI
            consulting” компанид ажиллаж чадсан
          </Text>
          <Button
            title="Дэлгэрэнгүй..."
            onPress={() => navigation.navigate("PostInfo")}
          ></Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  box1: {
    width: "90%",
    height: "65%",
    backgroundColor: "#773537",
    borderRadius: 25,
    top: 100,
  },
  postImage1: {
    position: "relative",
    width: "100%",
    height: 250,
    borderRadius: 25,
  },
  postTitleWrapper: {
    position: "relative",
    bottom: 45,
    width: "100%",
    height: "35%",
    backgroundColor: "#773537",
    borderRadius: 25,
    opacity: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  postTitle1: {
    position: "relative",
    color: "white",
    opacity: 1,
  },
});
